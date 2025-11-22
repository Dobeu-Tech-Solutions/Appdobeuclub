import { useEffect, useRef } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import type { IntercomUser } from '../types/intercom';

export function useIntercom(user: IntercomUser | null): void {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!user || isInitialized.current) {
      return;
    }

    try {
      Intercom({
        app_id: 'xu0gfiqb',
        user_id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.createdAt,
      });
      
      isInitialized.current = true;
    } catch (error) {
      console.error('Failed to initialize Intercom:', error);
    }
  }, [user]);
}
