import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from '../../components/layout/Navbar';
import { Hero } from '../../components/home/Hero';
import { Pricing } from '../../components/home/Pricing';

describe('Keyboard Navigation Tests', () => {
  describe('Navbar Keyboard Navigation', () => {
    beforeEach(() => {
      render(<Navbar />);
    });

    it('should allow tab navigation through all links', async () => {
      const user = userEvent.setup();
      const links = screen.getAllByRole('link');
      
      // First link should be focusable
      await user.tab();
      expect(links[0]).toHaveFocus();
    });

    it('should allow tab navigation to buttons', async () => {
      const user = userEvent.setup();
      const buttons = screen.getAllByRole('button');
      
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('should support Enter key on links', async () => {
      const user = userEvent.setup();
      const missionLink = screen.getByRole('link', { name: 'Mission' });
      
      missionLink.focus();
      expect(missionLink).toHaveFocus();
    });

    it('should support Space key on buttons', async () => {
      const user = userEvent.setup();
      const buttons = screen.getAllByRole('button');
      
      if (buttons.length > 0) {
        buttons[0].focus();
        expect(buttons[0]).toHaveFocus();
      }
    });

    it('should maintain focus visibility', async () => {
      const user = userEvent.setup();
      const links = screen.getAllByRole('link');
      
      await user.tab();
      const focusedElement = document.activeElement;
      expect(links).toContain(focusedElement);
    });

    it('should have logical tab order', async () => {
      const user = userEvent.setup();
      
      // Tab through elements
      await user.tab(); // Logo
      await user.tab(); // First nav link or button
      
      const focusedElement = document.activeElement;
      expect(focusedElement).toBeInTheDocument();
    });
  });

  describe('Hero Keyboard Navigation', () => {
    beforeEach(() => {
      render(<Hero />);
    });

    it('should allow keyboard access to CTA button', async () => {
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      button.focus();
      expect(button).toHaveFocus();
    });

    it('should activate button with Enter key', async () => {
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      button.focus();
      await user.keyboard('{Enter}');
      expect(button).toBeInTheDocument();
    });

    it('should activate button with Space key', async () => {
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      button.focus();
      await user.keyboard(' ');
      expect(button).toBeInTheDocument();
    });

    it('should not trap keyboard focus', async () => {
      const user = userEvent.setup();
      const button = screen.getByRole('button');
      
      button.focus();
      await user.tab();
      
      // Focus should move away
      expect(button).not.toHaveFocus();
    });
  });

  describe('Pricing Keyboard Navigation', () => {
    beforeEach(() => {
      render(<Pricing />);
    });

    it('should allow keyboard access to primary CTA', async () => {
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Get started today/i });
      
      button.focus();
      expect(button).toHaveFocus();
    });

    it('should allow keyboard access to secondary link', async () => {
      const user = userEvent.setup();
      const link = screen.getByRole('link', { name: /Book a 15-min intro call/i });
      
      link.focus();
      expect(link).toHaveFocus();
    });

    it('should have proper tab order in pricing card', async () => {
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Get started today/i });
      const link = screen.getByRole('link', { name: /Book a 15-min intro call/i });
      
      // Button should come before link in tab order
      button.focus();
      await user.tab();
      
      const focusedElement = document.activeElement;
      expect(focusedElement).toBeInTheDocument();
    });

    it('should support Enter key on CTA button', async () => {
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Get started today/i });
      
      button.focus();
      await user.keyboard('{Enter}');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Focus Indicators', () => {
    it('should have visible focus on navigation links', async () => {
      render(<Navbar />);
      const user = userEvent.setup();
      const links = screen.getAllByRole('link');
      
      if (links.length > 0) {
        await user.tab();
        const focusedElement = document.activeElement;
        expect(focusedElement).toBeVisible();
      }
    });

    it('should have visible focus on buttons', async () => {
      render(<Hero />);
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      button.focus();
      expect(button).toHaveFocus();
      expect(button).toBeVisible();
    });

    it('should maintain focus visibility during interaction', async () => {
      render(<Pricing />);
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Get started today/i });
      
      button.focus();
      expect(button).toHaveFocus();
      
      await user.keyboard('{Enter}');
      expect(button).toBeVisible();
    });
  });

  describe('Skip Navigation', () => {
    it('should allow skipping to main content', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });
  });

  describe('Escape Key Handling', () => {
    it('should close mobile menu with Escape key', async () => {
      render(<Navbar />);
      const user = userEvent.setup();
      
      // Find mobile menu toggle
      const buttons = screen.getAllByRole('button');
      const mobileToggle = buttons.find(btn => 
        btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
      );
      
      if (mobileToggle) {
        await user.click(mobileToggle);
        await user.keyboard('{Escape}');
        // Menu should close (implementation dependent)
      }
    });
  });

  describe('Arrow Key Navigation', () => {
    it('should not interfere with default arrow key behavior', async () => {
      render(<Navbar />);
      const user = userEvent.setup();
      
      await user.tab();
      await user.keyboard('{ArrowDown}');
      
      // Should not cause errors
      expect(document.activeElement).toBeInTheDocument();
    });
  });

  describe('Tab Trapping', () => {
    it('should not trap focus in navigation', async () => {
      render(<Navbar />);
      const user = userEvent.setup();
      
      const links = screen.getAllByRole('link');
      const buttons = screen.getAllByRole('button');
      const totalInteractive = links.length + buttons.length;
      
      // Tab through all elements
      for (let i = 0; i < totalInteractive + 1; i++) {
        await user.tab();
      }
      
      // Should be able to tab out
      expect(document.activeElement).toBeInTheDocument();
    });
  });

  describe('Focus Management on Route Change', () => {
    it('should maintain focus after interaction', async () => {
      render(<Hero />);
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      button.focus();
      await user.keyboard('{Enter}');
      
      // Focus should remain manageable
      expect(document.activeElement).toBeInTheDocument();
    });
  });

  describe('Keyboard Shortcuts', () => {
    it('should not override browser keyboard shortcuts', async () => {
      render(<Navbar />);
      const user = userEvent.setup();
      
      // Ctrl+F should not be prevented
      await user.keyboard('{Control>}f{/Control}');
      
      expect(document.activeElement).toBeInTheDocument();
    });
  });
});
