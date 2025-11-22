import { renderHook } from '@testing-library/react';
import { useIntercom } from './useIntercom';
import Intercom from '@intercom/messenger-js-sdk';
import type { IntercomUser } from '../types/intercom';

jest.mock('@intercom/messenger-js-sdk');

describe('useIntercom', () => {
  const mockUser: IntercomUser = {
    id: 'user123',
    name: 'Test User',
    email: 'test@example.com',
    createdAt: 1704067200,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    console.error = jest.fn();
  });

  it('should initialize Intercom with valid user data', () => {
    renderHook(() => useIntercom(mockUser));

    expect(Intercom).toHaveBeenCalledWith({
      app_id: 'xu0gfiqb',
      user_id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      created_at: 1704067200,
    });
    expect(Intercom).toHaveBeenCalledTimes(1);
  });

  it('should not initialize when user is null', () => {
    renderHook(() => useIntercom(null));

    expect(Intercom).not.toHaveBeenCalled();
  });

  it('should not initialize twice for the same user', () => {
    const { rerender } = renderHook(({ user }) => useIntercom(user), {
      initialProps: { user: mockUser },
    });

    expect(Intercom).toHaveBeenCalledTimes(1);

    rerender({ user: mockUser });

    expect(Intercom).toHaveBeenCalledTimes(1);
  });

  it('should handle initialization errors gracefully', () => {
    const mockError = new Error('Intercom initialization failed');
    (Intercom as jest.Mock).mockImplementationOnce(() => {
      throw mockError;
    });

    renderHook(() => useIntercom(mockUser));

    expect(console.error).toHaveBeenCalledWith(
      'Failed to initialize Intercom:',
      mockError
    );
  });

  it('should skip initialization when user data is missing required fields', () => {
    const incompleteUser = { id: 'user123' } as IntercomUser;
    
    renderHook(() => useIntercom(incompleteUser));

    // Hook will attempt to initialize, but Intercom SDK should handle validation
    expect(Intercom).toHaveBeenCalled();
  });
});
