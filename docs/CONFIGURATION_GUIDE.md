# Configuration Guide

## Overview

This guide explains all configuration files and options for the UI/UX test suite.

## Table of Contents

1. [Vitest Configuration](#vitest-configuration)
2. [Test Setup Configuration](#test-setup-configuration)
3. [Package.json Scripts](#packagejson-scripts)
4. [CI/CD Configuration](#cicd-configuration)
5. [Environment Variables](#environment-variables)

---

## Vitest Configuration

### File: `vitest.config.ts`

Complete configuration for the Vitest test framework.

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

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
      exclude: [
        'node_modules/',
        'src/tests/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData',
        'dist/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### Configuration Options

#### `plugins`

**Type**: `Plugin[]`

**Description**: Vite plugins to use during testing.

**Options**:
- `react()`: Enables React support with SWC compiler

**Example**:
```typescript
plugins: [react()]
```

---

#### `test.globals`

**Type**: `boolean`

**Default**: `false`

**Description**: Enable global test APIs (describe, it, expect, vi) without imports.

**Recommended**: `true` for convenience

**Example**:
```typescript
test: {
  globals: true
}
```

**Usage**:
```typescript
// With globals: true
describe('Test', () => {
  it('works', () => {
    expect(true).toBe(true);
  });
});

// Without globals
import { describe, it, expect } from 'vitest';
```

---

#### `test.environment`

**Type**: `'node' | 'jsdom' | 'happy-dom'`

**Default**: `'node'`

**Description**: Test environment for DOM APIs.

**Options**:
- `'node'`: No DOM (fastest)
- `'jsdom'`: Full DOM implementation (most compatible)
- `'happy-dom'`: Lightweight DOM (faster than jsdom)

**Recommended**: `'jsdom'` for React components

**Example**:
```typescript
test: {
  environment: 'jsdom'
}
```

---

#### `test.setupFiles`

**Type**: `string | string[]`

**Description**: Files to run before each test file.

**Use Cases**:
- Global mocks
- Test utilities
- Environment setup
- Custom matchers

**Example**:
```typescript
test: {
  setupFiles: ['./src/tests/setup.ts']
}
```

---

#### `test.css`

**Type**: `boolean`

**Default**: `false`

**Description**: Process CSS imports in tests.

**Recommended**: `true` for component tests

**Example**:
```typescript
test: {
  css: true
}
```

---

#### `test.coverage`

**Type**: `object`

**Description**: Coverage configuration.

**Properties**:

##### `coverage.provider`

**Type**: `'v8' | 'istanbul'`

**Description**: Coverage tool to use.

**Options**:
- `'v8'`: Faster, native V8 coverage
- `'istanbul'`: More detailed, slower

**Recommended**: `'v8'`

##### `coverage.reporter`

**Type**: `string[]`

**Description**: Coverage report formats.

**Options**:
- `'text'`: Console output
- `'json'`: JSON file
- `'html'`: HTML report
- `'lcov'`: LCOV format (for CI)

**Example**:
```typescript
coverage: {
  provider: 'v8',
  reporter: ['text', 'json', 'html']
}
```

##### `coverage.exclude`

**Type**: `string[]`

**Description**: Patterns to exclude from coverage.

**Common Exclusions**:
- `'node_modules/'`
- `'src/tests/'`
- `'**/*.d.ts'`
- `'**/*.config.*'`
- `'dist/'`

**Example**:
```typescript
coverage: {
  exclude: [
    'node_modules/',
    'src/tests/',
    '**/*.d.ts'
  ]
}
```

---

#### `resolve.alias`

**Type**: `Record<string, string>`

**Description**: Path aliases for imports.

**Example**:
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@components': path.resolve(__dirname, './src/components'),
    '@tests': path.resolve(__dirname, './src/tests')
  }
}
```

**Usage**:
```typescript
// Instead of
import { Hero } from '../../components/home/Hero';

// Use
import { Hero } from '@/components/home/Hero';
```

---

## Test Setup Configuration

### File: `src/tests/setup.ts`

Global test setup and mocks.

```typescript
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() { return []; }
  unobserve() {}
} as any;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as any;

// Mock scrollTo
window.scrollTo = vi.fn();

// Mock history API
window.history.pushState = vi.fn();
window.history.replaceState = vi.fn();
```

### Setup Options

#### Custom Matchers

**Description**: Extend expect with custom matchers.

**Example**:
```typescript
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
```

**Available Matchers**:
- `toBeInTheDocument()`
- `toHaveClass()`
- `toHaveAttribute()`
- `toHaveTextContent()`
- `toBeVisible()`
- `toHaveFocus()`

---

#### Cleanup

**Description**: Automatically cleanup after each test.

**Example**:
```typescript
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});
```

**What it does**:
- Unmounts React components
- Clears DOM
- Resets state

---

#### Global Mocks

**Description**: Mock browser APIs not available in test environment.

##### window.matchMedia

**Purpose**: Mock media query matching.

**Example**:
```typescript
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
});
```

**Usage in Tests**:
```typescript
window.matchMedia = vi.fn().mockImplementation(query => ({
  matches: query === '(max-width: 767px)',
  media: query,
}));
```

##### IntersectionObserver

**Purpose**: Mock intersection observer API.

**Example**:
```typescript
global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as any;
```

##### ResizeObserver

**Purpose**: Mock resize observer API.

**Example**:
```typescript
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as any;
```

---

## Package.json Scripts

### File: `package.json`

Test-related npm scripts.

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:run": "vitest run"
  }
}
```

### Script Descriptions

#### `npm test`

**Command**: `vitest`

**Description**: Run tests in watch mode.

**Use Case**: Development

**Features**:
- Watches for file changes
- Re-runs affected tests
- Interactive CLI

**Example**:
```bash
npm test
```

---

#### `npm run test:ui`

**Command**: `vitest --ui`

**Description**: Run tests with visual UI.

**Use Case**: Development, debugging

**Features**:
- Web-based UI
- Visual test results
- Interactive filtering
- Coverage visualization

**Example**:
```bash
npm run test:ui
```

**Access**: Opens browser at `http://localhost:51204`

---

#### `npm run test:coverage`

**Command**: `vitest --coverage`

**Description**: Run tests and generate coverage report.

**Use Case**: CI/CD, quality checks

**Output**:
- Console summary
- HTML report in `coverage/`
- JSON data

**Example**:
```bash
npm run test:coverage
```

**View Report**:
```bash
open coverage/index.html
```

---

#### `npm run test:run`

**Command**: `vitest run`

**Description**: Run tests once (no watch mode).

**Use Case**: CI/CD pipelines

**Features**:
- Single run
- Exit with code
- No interactive mode

**Example**:
```bash
npm run test:run
```

---

## CI/CD Configuration

### File: `.github/workflows/test.yml`

GitHub Actions workflow for automated testing.

```yaml
name: UI/UX Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run test:run
    
    - name: Generate coverage report
      run: npm run test:coverage
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v4
      with:
        file: ./coverage/coverage-final.json
        flags: unittests
        name: codecov-umbrella
        fail_ci_if_error: false

    - name: Archive test results
      if: always()
      uses: actions/upload-artifact@v4
      with:
        name: test-results-${{ matrix.node-version }}
        path: |
          coverage/
          test-results/
```

### Workflow Configuration

#### Triggers

**on.push**: Run on push to branches
**on.pull_request**: Run on PRs to branches

**Example**:
```yaml
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]
```

---

#### Matrix Strategy

**Description**: Test on multiple Node.js versions.

**Example**:
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x]
```

---

#### Steps

##### Checkout Code

```yaml
- uses: actions/checkout@v4
```

##### Setup Node.js

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: ${{ matrix.node-version }}
    cache: 'npm'
```

##### Install Dependencies

```yaml
- name: Install dependencies
  run: npm ci
```

**Note**: Use `npm ci` for CI (faster, deterministic)

##### Run Tests

```yaml
- name: Run tests
  run: npm run test:run
```

##### Generate Coverage

```yaml
- name: Generate coverage
  run: npm run test:coverage
```

##### Upload Coverage

```yaml
- name: Upload coverage
  uses: codecov/codecov-action@v4
  with:
    file: ./coverage/coverage-final.json
```

---

## Environment Variables

### Test Environment Variables

#### `NODE_ENV`

**Type**: `string`

**Values**: `'test' | 'development' | 'production'`

**Description**: Current environment.

**Example**:
```bash
NODE_ENV=test npm test
```

---

#### `CI`

**Type**: `boolean`

**Description**: Running in CI environment.

**Set by**: GitHub Actions, GitLab CI, etc.

**Usage**:
```typescript
if (process.env.CI) {
  // CI-specific behavior
}
```

---

#### `VITEST_UI_PORT`

**Type**: `number`

**Default**: `51204`

**Description**: Port for Vitest UI.

**Example**:
```bash
VITEST_UI_PORT=3000 npm run test:ui
```

---

## Custom Configuration Examples

### Example 1: Add TypeScript Path Aliases

```typescript
// vitest.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@tests': path.resolve(__dirname, './src/tests'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
```

---

### Example 2: Exclude Files from Coverage

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
      exclude: [
        'node_modules/',
        'src/tests/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData',
        'dist/',
        'src/types/',
        '**/*.stories.tsx',
      ],
    },
  },
});
```

---

### Example 3: Add Custom Test Timeout

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    testTimeout: 10000, // 10 seconds
    hookTimeout: 10000,
  },
});
```

---

### Example 4: Configure Multiple Environments

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.node.test.ts', 'node'],
    ],
  },
});
```

---

## Troubleshooting

### Issue: Tests not finding modules

**Solution**: Add path alias
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src')
  }
}
```

### Issue: Coverage not generating

**Solution**: Install coverage package
```bash
npm install -D @vitest/coverage-v8
```

### Issue: Tests timing out

**Solution**: Increase timeout
```typescript
test: {
  testTimeout: 20000
}
```

---

For more information, see [TEST_DOCUMENTATION.md](../TEST_DOCUMENTATION.md)
