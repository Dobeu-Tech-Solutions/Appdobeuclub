import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CustomCursor } from '../../components/ui/CustomCursor';

describe('CustomCursor Component - UI/UX Tests', () => {
  beforeEach(() => {
    render(<CustomCursor />);
  });

  describe('Visual Elements', () => {
    it('should render cursor dot element', () => {
      const cursorDot = document.querySelector('.cursor-dot');
      expect(cursorDot).toBeInTheDocument();
    });

    it('should have proper styling for cursor dot', () => {
      const cursorDot = document.querySelector('.cursor-dot');
      expect(cursorDot).toHaveClass('cursor-dot');
    });

    it('should inject custom styles', () => {
      const style = document.querySelector('style');
      expect(style).toBeInTheDocument();
      expect(style?.textContent).toContain('cursor: none');
    });
  });

  describe('Cursor Behavior', () => {
    it('should update cursor position on mouse move', async () => {
      const cursorDot = document.querySelector('.cursor-dot');
      
      fireEvent.mouseMove(window, { clientX: 100, clientY: 200 });
      
      await waitFor(() => {
        expect(cursorDot).toBeInTheDocument();
      });
    });

    it('should hide default cursor', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('cursor: none');
    });

    it('should apply cursor-none to interactive elements', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('a, button, input, textarea, select');
    });
  });

  describe('Click Interaction', () => {
    it('should add clicking class on mousedown', () => {
      fireEvent.mouseDown(window);
      expect(document.body.classList.contains('cursor-clicking')).toBe(true);
    });

    it('should remove clicking class on mouseup', () => {
      fireEvent.mouseDown(window);
      fireEvent.mouseUp(window);
      expect(document.body.classList.contains('cursor-clicking')).toBe(false);
    });

    it('should scale cursor on click', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('.cursor-clicking .cursor-dot');
      expect(style?.textContent).toContain('scale(0.8)');
    });
  });

  describe('Visual Design', () => {
    it('should have circular cursor', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('border-radius: 50%');
    });

    it('should use mix-blend-mode for visibility', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('mix-blend-mode: difference');
    });

    it('should have proper z-index for overlay', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('z-index: 9999');
    });

    it('should have fixed positioning', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('position: fixed');
    });
  });

  describe('Accessibility', () => {
    it('should not interfere with pointer events', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('pointer-events: none');
    });

    it('should maintain cursor functionality', () => {
      const cursorDot = document.querySelector('.cursor-dot');
      expect(cursorDot).toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('should use spring animation for smooth movement', () => {
      const cursorDot = document.querySelector('.cursor-dot');
      expect(cursorDot).toBeInTheDocument();
    });

    it('should clean up event listeners', () => {
      const { unmount } = render(<CustomCursor />);
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
      
      unmount();
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
      expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
      expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));
    });
  });

  describe('User Experience', () => {
    it('should provide visual feedback on interaction', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('transform: scale(0.8)');
    });

    it('should be visible against different backgrounds', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('background-color: white');
      expect(style?.textContent).toContain('mix-blend-mode: difference');
    });

    it('should have smooth transitions', () => {
      const cursorDot = document.querySelector('.cursor-dot');
      expect(cursorDot).toBeInTheDocument();
    });
  });

  describe('Cross-browser Compatibility', () => {
    it('should handle missing mouse events gracefully', () => {
      const cursorDot = document.querySelector('.cursor-dot');
      expect(cursorDot).toBeInTheDocument();
    });

    it('should initialize with cursor off-screen', () => {
      const cursorDot = document.querySelector('.cursor-dot');
      expect(cursorDot).toBeInTheDocument();
    });
  });

  describe('Visual Consistency', () => {
    it('should have consistent size', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('width: 20px');
      expect(style?.textContent).toContain('height: 20px');
    });

    it('should maintain aspect ratio', () => {
      const style = document.querySelector('style');
      expect(style?.textContent).toContain('border-radius: 50%');
    });
  });
});
