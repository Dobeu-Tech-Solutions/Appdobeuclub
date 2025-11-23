# Test Examples and Usage Guide

## Table of Contents

1. [Component Testing Examples](#component-testing-examples)
2. [Accessibility Testing Examples](#accessibility-testing-examples)
3. [Responsive Design Testing Examples](#responsive-design-testing-examples)
4. [User Interaction Testing Examples](#user-interaction-testing-examples)
5. [Visual Consistency Testing Examples](#visual-consistency-testing-examples)

---

## Component Testing Examples

### Example 1: Testing Button Rendering

**Purpose**: Verify a button renders with correct text and styling.

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../../components/home/Hero';

describe('Hero Component - Button Tests', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('should render CTA button with correct text', () => {
    // Query button by role and accessible name
    const button = screen.getByRole('button', { name: /Start your journey/i });
    
    // Assert button exists
    expect(button).toBeInTheDocument();
  });

  it('should have correct button styling', () => {
    const button = screen.getByRole('button', { name: /Start your journey/i });
    
    // Check CSS classes
    expect(button).toHaveClass('bg-white', 'text-black');
    expect(button).toHaveClass('rounded-full');
  });

  it('should have hover state', () => {
    const button = screen.getByRole('button', { name: /Start your journey/i });
    
    // Verify hover class exists
    expect(button).toHaveClass('hover:bg-gray-200');
  });
});
```

**Key Concepts**:
- Use `beforeEach` to render component before each test
- Query by role for accessibility
- Use regex for case-insensitive matching
- Check multiple classes with `toHaveClass`

---

### Example 2: Testing Navigation Links

**Purpose**: Verify navigation links have correct href attributes.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../../components/layout/Navbar';

describe('Navbar - Link Tests', () => {
  it('should have correct href for all navigation links', () => {
    render(<Navbar />);
    
    // Get all links by role
    const missionLink = screen.getByRole('link', { name: 'Mission' });
    const servicesLink = screen.getByRole('link', { name: 'Services' });
    const workLink = screen.getByRole('link', { name: 'Work' });
    const pricingLink = screen.getByRole('link', { name: 'Pricing' });

    // Assert href attributes
    expect(missionLink).toHaveAttribute('href', '#mission');
    expect(servicesLink).toHaveAttribute('href', '#services');
    expect(workLink).toHaveAttribute('href', '#work');
    expect(pricingLink).toHaveAttribute('href', '#pricing');
  });
});
```

**Key Concepts**:
- Query multiple elements individually
- Use `toHaveAttribute` to check attributes
- Test anchor tag properties

---

### Example 3: Testing Conditional Rendering

**Purpose**: Test component renders different content based on state.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from '../../components/layout/Navbar';

describe('Navbar - Mobile Menu', () => {
  it('should toggle mobile menu on button click', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    // Find mobile toggle button
    const buttons = screen.getAllByRole('button');
    const mobileToggle = buttons.find(btn => 
      btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
    );

    // Click to open menu
    if (mobileToggle) {
      await user.click(mobileToggle);
      
      // Wait for menu to appear
      await waitFor(() => {
        const mobileLinks = screen.getAllByRole('link', { name: 'Mission' });
        expect(mobileLinks.length).toBeGreaterThan(1);
      });
    }
  });
});
```

**Key Concepts**:
- Use `userEvent` for realistic interactions
- Use `waitFor` for async state changes
- Query multiple elements with `getAllByRole`
- Handle conditional logic in tests

---

## Accessibility Testing Examples

### Example 4: Testing Keyboard Navigation

**Purpose**: Verify all interactive elements are keyboard accessible.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Hero } from '../../components/home/Hero';

describe('Hero - Keyboard Navigation', () => {
  it('should allow keyboard access to CTA button', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    
    const button = screen.getByRole('button', { name: /Start your journey/i });
    
    // Focus the button
    button.focus();
    expect(button).toHaveFocus();
  });

  it('should activate button with Enter key', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    
    const button = screen.getByRole('button', { name: /Start your journey/i });
    
    // Focus and press Enter
    button.focus();
    await user.keyboard('{Enter}');
    
    // Button should still exist (no errors)
    expect(button).toBeInTheDocument();
  });

  it('should activate button with Space key', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    
    const button = screen.getByRole('button', { name: /Start your journey/i });
    
    // Focus and press Space
    button.focus();
    await user.keyboard(' ');
    
    expect(button).toBeInTheDocument();
  });
});
```

**Key Concepts**:
- Test focus management
- Test keyboard activation (Enter, Space)
- Use `toHaveFocus` matcher
- Simulate keyboard events with `user.keyboard`

---

### Example 5: Testing ARIA Labels

**Purpose**: Verify all interactive elements have accessible names.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../../components/layout/Navbar';

describe('Navbar - ARIA Labels', () => {
  it('should have accessible names for all buttons', () => {
    render(<Navbar />);
    
    const buttons = screen.getAllByRole('button');
    
    // Check each button has accessible name
    buttons.forEach(button => {
      expect(button).toHaveAccessibleName();
    });
  });

  it('should have accessible names for all links', () => {
    render(<Navbar />);
    
    const links = screen.getAllByRole('link');
    
    // Check each link has accessible name
    links.forEach(link => {
      expect(link).toHaveAccessibleName();
    });
  });
});
```

**Key Concepts**:
- Use `toHaveAccessibleName` matcher
- Iterate over multiple elements
- Test accessibility requirements

---

### Example 6: Testing Color Contrast

**Purpose**: Verify sufficient color contrast for readability.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../../components/home/Hero';

describe('Hero - Color Contrast', () => {
  it('should have high contrast CTA button', () => {
    render(<Hero />);
    
    const button = screen.getByRole('button', { name: /Start your journey/i });
    
    // White background with black text = high contrast
    expect(button).toHaveClass('bg-white', 'text-black');
  });

  it('should have readable text on dark background', () => {
    render(<Hero />);
    
    const paragraph = screen.getByText(/Empowering small to medium businesses/i);
    
    // Gray text on dark background should be readable
    expect(paragraph).toHaveClass('text-gray-400');
  });
});
```

**Key Concepts**:
- Test color combinations
- Verify contrast ratios through class names
- Ensure readability

---

## Responsive Design Testing Examples

### Example 7: Testing Mobile Viewport

**Purpose**: Verify component adapts to mobile viewport.

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../../components/layout/Navbar';

describe('Navbar - Mobile Viewport', () => {
  beforeEach(() => {
    // Mock mobile viewport
    global.innerWidth = 375;
    global.innerHeight = 667;
    
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(max-width: 767px)',
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  it('should render mobile navigation toggle', () => {
    render(<Navbar />);
    
    const buttons = screen.getAllByRole('button');
    const mobileToggle = buttons.find(btn => 
      btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
    );
    
    expect(mobileToggle).toBeInTheDocument();
    expect(mobileToggle).toHaveClass('md:hidden');
  });

  it('should hide desktop navigation on mobile', () => {
    render(<Navbar />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('hidden', 'md:flex');
  });
});
```

**Key Concepts**:
- Mock `window.matchMedia` for viewport testing
- Set `global.innerWidth` and `global.innerHeight`
- Test responsive classes (md:, lg:, etc.)

---

### Example 8: Testing Responsive Typography

**Purpose**: Verify text scales appropriately across viewports.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../../components/home/Hero';

describe('Hero - Responsive Typography', () => {
  it('should have responsive heading sizes', () => {
    render(<Hero />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    
    // Check responsive classes
    expect(heading).toHaveClass('text-6xl', 'md:text-8xl');
  });

  it('should have responsive paragraph text', () => {
    render(<Hero />);
    
    const paragraph = screen.getByText(/Empowering small to medium businesses/i);
    
    expect(paragraph).toHaveClass('text-xl', 'md:text-2xl');
  });
});
```

**Key Concepts**:
- Test responsive utility classes
- Verify mobile-first approach
- Check breakpoint-specific styles

---

## User Interaction Testing Examples

### Example 9: Testing Click Events

**Purpose**: Verify click handlers work correctly.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Hero } from '../../components/home/Hero';

describe('Hero - Click Interactions', () => {
  it('should handle button click', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    
    const button = screen.getByRole('button', { name: /Start your journey/i });
    
    // Click the button
    await user.click(button);
    
    // Button should still be in document (no errors)
    expect(button).toBeInTheDocument();
  });

  it('should handle double clicks gracefully', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    
    const button = screen.getByRole('button', { name: /Start your journey/i });
    
    // Double click
    await user.dblClick(button);
    
    expect(button).toBeInTheDocument();
  });
});
```

**Key Concepts**:
- Use `user.click()` for single clicks
- Use `user.dblClick()` for double clicks
- Always await user events

---

### Example 10: Testing Hover Effects

**Purpose**: Verify hover states are applied correctly.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from '../../components/layout/Navbar';

describe('Navbar - Hover Effects', () => {
  it('should show hover effects on navigation links', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const missionLink = screen.getByRole('link', { name: 'Mission' });
    
    // Hover over link
    await user.hover(missionLink);
    
    // Check hover class exists
    expect(missionLink).toHaveClass('hover:text-white');
  });

  it('should show hover effect on button', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    
    const button = screen.getByRole('button', { name: /Start your journey/i });
    
    await user.hover(button);
    
    expect(button).toHaveClass('hover:bg-gray-200');
  });
});
```

**Key Concepts**:
- Use `user.hover()` to simulate hover
- Use `user.unhover()` to remove hover
- Test hover classes

---

## Visual Consistency Testing Examples

### Example 11: Testing Color Scheme

**Purpose**: Verify consistent color usage across components.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../../components/home/Hero';
import { Services } from '../../components/home/Services';

describe('Visual Consistency - Colors', () => {
  it('should use consistent black background', () => {
    render(<Hero />);
    
    const container = screen.getByRole('heading').closest('.bg-black');
    expect(container).toBeInTheDocument();
  });

  it('should use consistent yellow accent', () => {
    render(<Navbar />);
    
    const button = screen.getAllByRole('button', { name: /Get Started/i })[0];
    expect(button).toHaveClass('bg-yellow-500');
  });

  it('should use consistent gray for secondary text', () => {
    render(<Hero />);
    
    const paragraph = screen.getByText(/Empowering small to medium businesses/i);
    expect(paragraph).toHaveClass('text-gray-400');
  });
});
```

**Key Concepts**:
- Test color consistency across components
- Use `.closest()` to find parent elements
- Verify design system adherence

---

### Example 12: Testing Typography Consistency

**Purpose**: Verify consistent typography across components.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../../components/home/Hero';
import { Pricing } from '../../components/home/Pricing';

describe('Visual Consistency - Typography', () => {
  it('should use consistent heading font weights', () => {
    render(<Hero />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('font-bold');
  });

  it('should use consistent heading tracking', () => {
    render(<Services />);
    
    const heading = screen.getByRole('heading', { name: /Unlimited requests/i });
    expect(heading).toHaveClass('tracking-tighter');
  });

  it('should use consistent font sizes', () => {
    render(<Pricing />);
    
    const heading = screen.getByRole('heading', { name: /Join the club/i });
    expect(heading).toHaveClass('text-5xl', 'md:text-7xl');
  });
});
```

**Key Concepts**:
- Test typography consistency
- Verify font weights, sizes, tracking
- Ensure design system compliance

---

## Advanced Testing Patterns

### Example 13: Testing with waitFor

**Purpose**: Handle asynchronous state changes.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Async Tests', () => {
  it('should wait for element to appear', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const mobileToggle = screen.getAllByRole('button')[0];
    await user.click(mobileToggle);
    
    // Wait for menu to appear
    await waitFor(() => {
      const mobileLinks = screen.getAllByRole('link', { name: 'Mission' });
      expect(mobileLinks.length).toBeGreaterThan(1);
    });
  });
});
```

**Key Concepts**:
- Use `waitFor` for async assertions
- Wrap assertions in callback
- Handle loading states

---

### Example 14: Testing Multiple Elements

**Purpose**: Test collections of similar elements.

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pricing } from '../../components/home/Pricing';

describe('Pricing - Features List', () => {
  it('should display all key features', () => {
    render(<Pricing />);
    
    const features = [
      /One request at a time/i,
      /Average 48 hour delivery/i,
      /Unlimited users/i,
      /Unlimited stock photos/i,
      /Easy credit-card payments/i,
      /Pause or cancel anytime/i,
    ];
    
    // Check each feature exists
    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });
});
```

**Key Concepts**:
- Use arrays to test multiple similar elements
- Iterate with `forEach`
- Keep tests DRY

---

## Running These Examples

```bash
# Run all tests
npm test

# Run specific test file
npm test Hero.test.tsx

# Run tests in UI mode
npm run test:ui

# Run with coverage
npm run test:coverage
```

---

For more information, see [TEST_DOCUMENTATION.md](../TEST_DOCUMENTATION.md)
