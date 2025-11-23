# API Documentation - Test Suite

## Overview

This document provides comprehensive API documentation for the UI/UX test suite, including all test utilities, helper functions, and configuration methods.

## Table of Contents

1. [Test Setup Configuration](#test-setup-configuration)
2. [Test Utilities](#test-utilities)
3. [Component Test APIs](#component-test-apis)
4. [Accessibility Test APIs](#accessibility-test-apis)
5. [Testing Best Practices](#testing-best-practices)

---

## Test Setup Configuration

### `vitest.config.ts`

Configuration file for the Vitest test framework.

#### Configuration Object

```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [...]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
```

#### Properties

- **plugins**: Array of Vite plugins
  - `react()`: Enables React support with SWC
  
- **test.globals**: `boolean`
  - Enables global test APIs (describe, it, expect)
  - Default: `true`
  
- **test.environment**: `string`
  - DOM environment for tests
  - Options: `'jsdom'` | `'happy-dom'` | `'node'`
  
- **test.setupFiles**: `string[]`
  - Files to run before each test file
  - Example: `['./src/tests/setup.ts']`
  
- **test.css**: `boolean`
  - Enable CSS processing in tests
  
- **test.coverage**: `object`
  - Coverage configuration
  - `provider`: Coverage tool (`'v8'` | `'istanbul'`)
  - `reporter`: Output formats
  - `exclude`: Patterns to exclude

#### Usage Example

```bash
# Run tests with this configuration
npm test

# Generate coverage
npm run test:coverage
```

---

## Test Utilities

### `src/tests/setup.ts`

Global test setup and utilities.

### Functions

#### `cleanup()`

Automatically cleans up after each test.

**Description**: Unmounts React components and clears DOM after each test.

**Usage**:
```typescript
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});
```

**Returns**: `void`

---

#### `window.matchMedia(query)`

Mock implementation of the matchMedia API.

**Parameters**:
- `query` (string): Media query string (e.g., `'(max-width: 768px)'`)

**Returns**: `MediaQueryList` object with:
- `matches` (boolean): Whether query matches
- `media` (string): The query string
- `addEventListener` (function): Mock event listener
- `removeEventListener` (function): Mock event listener

**Usage Example**:
```typescript
// Test responsive behavior
window.matchMedia = vi.fn().mockImplementation(query => ({
  matches: query === '(max-width: 767px)',
  media: query,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
}));
```

---

#### `IntersectionObserver`

Mock implementation for intersection observer.

**Constructor**: `new IntersectionObserver(callback, options)`

**Methods**:
- `observe(target)`: Mock observe method
- `unobserve(target)`: Mock unobserve method
- `disconnect()`: Mock disconnect method
- `takeRecords()`: Returns empty array

**Usage Example**:
```typescript
// Component using IntersectionObserver will work in tests
const observer = new IntersectionObserver(() => {});
observer.observe(element);
```

---

## Component Test APIs

### Testing Library Methods

#### `render(component, options)`

Renders a React component for testing.

**Parameters**:
- `component` (ReactElement): Component to render
- `options` (object, optional): Render options
  - `wrapper`: Wrapper component
  - `queries`: Custom queries

**Returns**: `RenderResult` object with:
- `container`: DOM element containing component
- `rerender`: Function to re-render with new props
- `unmount`: Function to unmount component
- All query functions (getBy*, queryBy*, findBy*)

**Usage Example**:
```typescript
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

const { container, rerender } = render(<Hero />);
const heading = screen.getByRole('heading');
```

---

#### `screen.getByRole(role, options)`

Queries element by ARIA role.

**Parameters**:
- `role` (string): ARIA role (e.g., 'button', 'heading', 'link')
- `options` (object, optional):
  - `name`: Accessible name (string | RegExp)
  - `level`: Heading level (1-6)
  - `hidden`: Include hidden elements

**Returns**: `HTMLElement`

**Throws**: Error if element not found

**Usage Example**:
```typescript
// Find button by role and name
const button = screen.getByRole('button', { name: /Get Started/i });

// Find heading by role and level
const h1 = screen.getByRole('heading', { level: 1 });
```

---

#### `screen.getByText(text, options)`

Queries element by text content.

**Parameters**:
- `text` (string | RegExp): Text to search for
- `options` (object, optional):
  - `exact`: Exact match (default: true)
  - `selector`: CSS selector to narrow search

**Returns**: `HTMLElement`

**Usage Example**:
```typescript
// Case-insensitive search
const element = screen.getByText(/tech is your/i);

// Exact match
const exact = screen.getByText('Get Started', { exact: true });
```

---

#### `screen.getAllByRole(role, options)`

Queries all elements by ARIA role.

**Parameters**: Same as `getByRole`

**Returns**: `HTMLElement[]`

**Usage Example**:
```typescript
const buttons = screen.getAllByRole('button');
expect(buttons.length).toBeGreaterThan(0);
```

---

### User Event API

#### `userEvent.setup()`

Creates a user event instance.

**Returns**: User event object with methods:
- `click(element)`: Simulates click
- `dblClick(element)`: Simulates double click
- `hover(element)`: Simulates hover
- `unhover(element)`: Simulates unhover
- `keyboard(text)`: Simulates keyboard input
- `tab()`: Simulates tab key

**Usage Example**:
```typescript
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();
await user.click(button);
await user.hover(element);
await user.keyboard('{Enter}');
```

---

#### `user.click(element, options)`

Simulates a click event.

**Parameters**:
- `element` (HTMLElement): Element to click
- `options` (object, optional):
  - `button`: Mouse button (0=left, 1=middle, 2=right)
  - `ctrlKey`: Ctrl key pressed
  - `shiftKey`: Shift key pressed

**Returns**: `Promise<void>`

**Usage Example**:
```typescript
const button = screen.getByRole('button');
await user.click(button);

// Click with modifier
await user.click(button, { ctrlKey: true });
```

---

#### `user.hover(element)`

Simulates hovering over an element.

**Parameters**:
- `element` (HTMLElement): Element to hover

**Returns**: `Promise<void>`

**Usage Example**:
```typescript
const link = screen.getByRole('link', { name: 'Mission' });
await user.hover(link);
expect(link).toHaveClass('hover:text-white');
```

---

#### `user.keyboard(text)`

Simulates keyboard input.

**Parameters**:
- `text` (string): Keys to press
  - Regular text: `'hello'`
  - Special keys: `'{Enter}'`, `'{Escape}'`, `'{Tab}'`
  - Modifiers: `'{Control>}a{/Control}'`

**Returns**: `Promise<void>`

**Usage Example**:
```typescript
// Press Enter
await user.keyboard('{Enter}');

// Press Escape
await user.keyboard('{Escape}');

// Ctrl+A
await user.keyboard('{Control>}a{/Control}');
```

---

## Accessibility Test APIs

### Custom Matchers

#### `toBeInTheDocument()`

Asserts element is in the document.

**Usage**:
```typescript
const button = screen.getByRole('button');
expect(button).toBeInTheDocument();
```

---

#### `toHaveAccessibleName(name)`

Asserts element has accessible name.

**Parameters**:
- `name` (string | RegExp, optional): Expected name

**Usage**:
```typescript
const button = screen.getByRole('button');
expect(button).toHaveAccessibleName('Get Started');
```

---

#### `toHaveFocus()`

Asserts element has focus.

**Usage**:
```typescript
button.focus();
expect(button).toHaveFocus();
```

---

#### `toBeVisible()`

Asserts element is visible.

**Usage**:
```typescript
const heading = screen.getByRole('heading');
expect(heading).toBeVisible();
```

---

#### `toHaveClass(...classes)`

Asserts element has CSS classes.

**Parameters**:
- `classes` (string[]): Class names to check

**Usage**:
```typescript
const button = screen.getByRole('button');
expect(button).toHaveClass('bg-white', 'text-black');
```

---

#### `toHaveAttribute(attr, value)`

Asserts element has attribute.

**Parameters**:
- `attr` (string): Attribute name
- `value` (string | RegExp, optional): Expected value

**Usage**:
```typescript
const link = screen.getByRole('link');
expect(link).toHaveAttribute('href', '#mission');
```

---

## Testing Best Practices

### 1. Query Priority

Use queries in this order:
1. `getByRole` - Most accessible
2. `getByLabelText` - For form fields
3. `getByPlaceholderText` - For inputs
4. `getByText` - For non-interactive content
5. `getByTestId` - Last resort

### 2. Async Testing

Always await async operations:
```typescript
await user.click(button);
await waitFor(() => {
  expect(element).toBeInTheDocument();
});
```

### 3. Cleanup

Cleanup happens automatically after each test.

### 4. Accessibility

Always test with roles and accessible names:
```typescript
screen.getByRole('button', { name: /get started/i });
```

---

For more examples, see the test files in `src/tests/`.
