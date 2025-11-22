# Implementation Plan

- [ ] 1. Install Intercom SDK dependency
  - Run npm install command to add @intercom/messenger-js-sdk to package.json
  - Verify the package is added to dependencies
  - _Requirements: 1.1, 1.2, 1.3_

- [ ] 2. Create TypeScript type definitions for Intercom
  - Create src/types/intercom.ts file
  - Define IntercomUser interface with id, name, email, createdAt fields
  - Define IntercomConfig interface for SDK initialization parameters
  - _Requirements: 4.1_

- [ ] 3. Implement useIntercom custom hook
  - Create src/hooks/useIntercom.ts file
  - Implement hook that accepts IntercomUser or null
  - Add initialization guard using useRef to prevent duplicate instances
  - Implement useEffect to initialize Intercom when user data is available
  - Add try-catch error handling for SDK initialization
  - Pass app_id 'xu0gfiqb' and user data to Intercom SDK
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 3.5, 4.2, 4.4, 4.5_

- [ ] 4. Integrate Intercom into App.tsx
  - Import useIntercom hook in App.tsx
  - Add user state management (placeholder for now, to be connected to actual auth)
  - Call useIntercom hook with user data
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 4.3_

- [ ] 5. Write unit tests for useIntercom hook
  - Create src/hooks/useIntercom.test.ts file
  - Test hook initializes Intercom with valid user data
  - Test hook skips initialization when user is null
  - Test hook prevents duplicate initialization
  - Test hook handles errors gracefully
  - _Requirements: 2.6, 3.5, 4.5_
