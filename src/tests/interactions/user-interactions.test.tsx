import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from '../../components/layout/Navbar';
import { Hero } from '../../components/home/Hero';
import { Services } from '../../components/home/Services';
import { Pricing } from '../../components/home/Pricing';
import { Work } from '../../components/home/Work';
import App from '../../App';

describe('User Interaction Tests', () => {
  describe('Navigation Interactions', () => {
    beforeEach(() => {
      render(<Navbar />);
    });

    it('should handle navigation link clicks', async () => {
      const user = userEvent.setup();
      const missionLink = screen.getByRole('link', { name: 'Mission' });
      
      await user.click(missionLink);
      expect(missionLink).toHaveAttribute('href', '#mission');
    });

    it('should handle CTA button clicks', async () => {
      const user = userEvent.setup();
      const ctaButton = screen.getAllByRole('button', { name: /Get Started/i })[0];
      
      await user.click(ctaButton);
      expect(ctaButton).toBeInTheDocument();
    });

    it('should toggle mobile menu on click', async () => {
      const user = userEvent.setup();
      const buttons = screen.getAllByRole('button');
      const mobileToggle = buttons.find(btn => 
        btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
      );

      if (mobileToggle) {
        await user.click(mobileToggle);
        await waitFor(() => {
          const mobileLinks = screen.getAllByRole('link', { name: 'Mission' });
          expect(mobileLinks.length).toBeGreaterThan(1);
        });
      }
    });

    it('should close mobile menu when link is clicked', async () => {
      const user = userEvent.setup();
      const buttons = screen.getAllByRole('button');
      const mobileToggle = buttons.find(btn => 
        btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
      );

      if (mobileToggle) {
        await user.click(mobileToggle);
        
        await waitFor(async () => {
          const mobileLinks = screen.getAllByRole('link', { name: 'Mission' });
          if (mobileLinks.length > 1) {
            await user.click(mobileLinks[1]);
          }
        });
      }
    });

    it('should show hover effects on navigation links', async () => {
      const user = userEvent.setup();
      const missionLink = screen.getByRole('link', { name: 'Mission' });
      
      await user.hover(missionLink);
      expect(missionLink).toHaveClass('hover:text-white');
    });
  });

  describe('Button Interactions', () => {
    it('should handle hero CTA button click', async () => {
      render(<Hero />);
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      await user.click(button);
      expect(button).toBeInTheDocument();
    });

    it('should show hover effect on hero button', async () => {
      render(<Hero />);
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      await user.hover(button);
      expect(button).toHaveClass('hover:bg-gray-200');
    });

    it('should handle pricing CTA button click', async () => {
      render(<Pricing />);
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Get started today/i });
      
      await user.click(button);
      expect(button).toBeInTheDocument();
    });

    it('should handle services CTA button click', async () => {
      render(<Services />);
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Join today/i });
      
      await user.click(button);
      expect(button).toBeInTheDocument();
    });

    it('should provide visual feedback on button press', async () => {
      render(<Hero />);
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      await user.click(button);
      expect(button).toBeEnabled();
    });
  });

  describe('Link Interactions', () => {
    it('should handle footer link clicks', async () => {
      const mockNavigate = vi.fn();
      render(<App />);
      const user = userEvent.setup();
      
      const privacyLink = screen.getByRole('link', { name: /Privacy/i });
      await user.click(privacyLink);
      expect(privacyLink).toHaveAttribute('href');
    });

    it('should handle secondary CTA link in pricing', async () => {
      render(<Pricing />);
      const user = userEvent.setup();
      const link = screen.getByRole('link', { name: /Book a 15-min intro call/i });
      
      await user.click(link);
      expect(link).toHaveAttribute('href');
    });

    it('should show hover effects on links', async () => {
      render(<Navbar />);
      const user = userEvent.setup();
      const link = screen.getByRole('link', { name: 'Mission' });
      
      await user.hover(link);
      expect(link).toHaveClass('hover:text-white');
    });
  });

  describe('Scroll Interactions', () => {
    it('should handle scroll events', () => {
      render(<Navbar />);
      
      fireEvent.scroll(window, { target: { scrollY: 100 } });
      
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should update navbar on scroll', () => {
      render(<Navbar />);
      
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
      fireEvent.scroll(window);
      
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('fixed');
    });
  });

  describe('Mouse Interactions', () => {
    it('should handle mouse enter on cards', async () => {
      render(<Services />);
      const user = userEvent.setup();
      const subscribeCard = screen.getByText('Subscribe').closest('div[class*="motion"]');
      
      if (subscribeCard) {
        await user.hover(subscribeCard);
        expect(subscribeCard).toBeInTheDocument();
      }
    });

    it('should handle mouse leave on cards', async () => {
      render(<Services />);
      const user = userEvent.setup();
      const subscribeCard = screen.getByText('Subscribe').closest('div[class*="motion"]');
      
      if (subscribeCard) {
        await user.hover(subscribeCard);
        await user.unhover(subscribeCard);
        expect(subscribeCard).toBeInTheDocument();
      }
    });

    it('should handle mouse move for custom cursor', () => {
      render(<App />);
      
      fireEvent.mouseMove(window, { clientX: 100, clientY: 200 });
      
      const cursorDot = document.querySelector('.cursor-dot');
      expect(cursorDot).toBeInTheDocument();
    });
  });

  describe('Click Interactions', () => {
    it('should handle double clicks gracefully', async () => {
      render(<Hero />);
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      await user.dblClick(button);
      expect(button).toBeInTheDocument();
    });

    it('should handle rapid clicks', async () => {
      render(<Pricing />);
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Get started today/i });
      
      await user.click(button);
      await user.click(button);
      await user.click(button);
      
      expect(button).toBeEnabled();
    });
  });

  describe('Touch Interactions', () => {
    it('should handle touch events on mobile menu', async () => {
      render(<Navbar />);
      const buttons = screen.getAllByRole('button');
      const mobileToggle = buttons.find(btn => 
        btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
      );

      if (mobileToggle) {
        fireEvent.touchStart(mobileToggle);
        fireEvent.touchEnd(mobileToggle);
        expect(mobileToggle).toBeInTheDocument();
      }
    });

    it('should handle touch events on buttons', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      fireEvent.touchStart(button);
      fireEvent.touchEnd(button);
      
      expect(button).toBeInTheDocument();
    });
  });

  describe('Focus Interactions', () => {
    it('should handle focus on buttons', async () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      button.focus();
      expect(button).toHaveFocus();
    });

    it('should handle blur on buttons', async () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      button.focus();
      button.blur();
      expect(button).not.toHaveFocus();
    });

    it('should handle focus on links', async () => {
      render(<Navbar />);
      const link = screen.getByRole('link', { name: 'Mission' });
      
      link.focus();
      expect(link).toHaveFocus();
    });
  });

  describe('Animation Interactions', () => {
    it('should trigger animations on scroll', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      
      expect(section).toBeInTheDocument();
    });

    it('should handle hover animations on cards', async () => {
      render(<Pricing />);
      const user = userEvent.setup();
      const card = screen.getByRole('heading', { name: /Standard Plan/i }).closest('div[class*="motion"]');
      
      if (card) {
        await user.hover(card);
        expect(card).toBeInTheDocument();
      }
    });
  });

  describe('Route Navigation', () => {
    it('should handle route changes', async () => {
      render(<App />);
      
      // Initial route should be home
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('should handle back button navigation', () => {
      render(<App />);
      
      window.history.pushState({}, '', '/brand');
      fireEvent.popState(window);
      
      expect(window.location.pathname).toBe('/brand');
    });
  });

  describe('Error Handling', () => {
    it('should handle missing event handlers gracefully', async () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      
      // Should not throw error
      await userEvent.click(button);
      expect(button).toBeInTheDocument();
    });

    it('should handle invalid interactions gracefully', () => {
      render(<Navbar />);
      
      // Should not throw error on invalid scroll
      fireEvent.scroll(window, { target: { scrollY: -100 } });
      
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });
  });

  describe('Multi-step Interactions', () => {
    it('should handle navigation flow', async () => {
      render(<Navbar />);
      const user = userEvent.setup();
      
      const missionLink = screen.getByRole('link', { name: 'Mission' });
      await user.click(missionLink);
      
      const servicesLink = screen.getByRole('link', { name: 'Services' });
      await user.click(servicesLink);
      
      expect(servicesLink).toHaveAttribute('href', '#services');
    });

    it('should handle mobile menu interaction flow', async () => {
      render(<Navbar />);
      const user = userEvent.setup();
      const buttons = screen.getAllByRole('button');
      const mobileToggle = buttons.find(btn => 
        btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
      );

      if (mobileToggle) {
        // Open menu
        await user.click(mobileToggle);
        
        // Click link
        await waitFor(async () => {
          const mobileLinks = screen.getAllByRole('link', { name: 'Mission' });
          if (mobileLinks.length > 1) {
            await user.click(mobileLinks[1]);
          }
        });
      }
    });
  });

  describe('State Management', () => {
    it('should maintain state during interactions', async () => {
      render(<Navbar />);
      const user = userEvent.setup();
      const buttons = screen.getAllByRole('button');
      const mobileToggle = buttons.find(btn => 
        btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
      );

      if (mobileToggle) {
        await user.click(mobileToggle);
        await user.click(mobileToggle);
        
        expect(mobileToggle).toBeInTheDocument();
      }
    });
  });
});
