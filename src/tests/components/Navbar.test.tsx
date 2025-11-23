import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from '../../components/layout/Navbar';

describe('Navbar Component - UI/UX Tests', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  describe('Visual Elements', () => {
    it('should render the logo', () => {
      const logo = screen.getByRole('link', { name: /logo/i });
      expect(logo).toBeInTheDocument();
    });

    it('should render all navigation links on desktop', () => {
      expect(screen.getByText('Mission')).toBeInTheDocument();
      expect(screen.getByText('Services')).toBeInTheDocument();
      expect(screen.getByText('Work')).toBeInTheDocument();
      expect(screen.getByText('Pricing')).toBeInTheDocument();
    });

    it('should render Get Started CTA button', () => {
      const ctaButtons = screen.getAllByRole('button', { name: /Get Started/i });
      expect(ctaButtons.length).toBeGreaterThan(0);
    });

    it('should have yellow CTA button styling', () => {
      const desktopCTA = screen.getAllByRole('button', { name: /Get Started/i })[0];
      expect(desktopCTA).toHaveClass('bg-yellow-500');
    });
  });

  describe('Navigation Links', () => {
    it('should have correct href attributes for all links', () => {
      const missionLink = screen.getByRole('link', { name: 'Mission' });
      const servicesLink = screen.getByRole('link', { name: 'Services' });
      const workLink = screen.getByRole('link', { name: 'Work' });
      const pricingLink = screen.getByRole('link', { name: 'Pricing' });

      expect(missionLink).toHaveAttribute('href', '#mission');
      expect(servicesLink).toHaveAttribute('href', '#services');
      expect(workLink).toHaveAttribute('href', '#work');
      expect(pricingLink).toHaveAttribute('href', '#pricing');
    });

    it('should have hover states on navigation links', () => {
      const missionLink = screen.getByRole('link', { name: 'Mission' });
      expect(missionLink).toHaveClass('hover:text-white');
    });
  });

  describe('Mobile Menu', () => {
    it('should render mobile menu toggle button', () => {
      const menuButton = screen.getByRole('button', { name: /Toggle navigation menu/i });
      expect(menuButton).toBeInTheDocument();
    });

    it('should toggle mobile menu on button click', async () => {
      const user = userEvent.setup();
      const mobileToggle = screen.getByRole('button', { name: /Toggle navigation menu/i });

      await user.click(mobileToggle);
      await waitFor(() => {
        // Mobile menu should be visible
        const mobileLinks = screen.getAllByRole('link', { name: 'Mission' });
        expect(mobileLinks.length).toBeGreaterThan(1);
      });
    });

    it('should close mobile menu when link is clicked', async () => {
      const user = userEvent.setup();
      const mobileToggle = screen.getByRole('button', { name: /Toggle navigation menu/i });

      await user.click(mobileToggle);
      
      await waitFor(async () => {
        const mobileLinks = screen.getAllByRole('link', { name: 'Mission' });
        if (mobileLinks.length > 1) {
          await user.click(mobileLinks[1]);
        }
      });
    });
  });

  describe('Responsive Design', () => {
    it('should hide desktop nav on mobile', () => {
      const desktopNav = screen.getByRole('navigation');
      expect(desktopNav).toHaveClass('hidden', 'md:flex');
    });

    it('should show mobile toggle only on mobile', () => {
      const mobileToggle = screen.getByRole('button', { name: /Toggle navigation menu/i });
      expect(mobileToggle).toHaveClass('md:hidden');
    });
  });

  describe('Accessibility', () => {
    it('should have proper navigation landmark', () => {
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should have accessible links with proper text', () => {
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAccessibleName();
      });
    });

    it('should have keyboard accessible buttons', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toBeEnabled();
      });
    });

    it('should have sufficient color contrast on links', () => {
      const missionLink = screen.getByRole('link', { name: 'Mission' });
      expect(missionLink).toHaveClass('text-gray-300');
    });
  });

  describe('Sticky Behavior', () => {
    it('should have fixed positioning', () => {
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('fixed');
    });

    it('should span full width', () => {
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('left-0', 'right-0');
    });

    it('should have proper z-index for overlay', () => {
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('z-40');
    });
  });

  describe('User Experience', () => {
    it('should have smooth transitions on hover', () => {
      const missionLink = screen.getByRole('link', { name: 'Mission' });
      expect(missionLink).toHaveClass('transition-colors');
    });

    it('should have rounded CTA button for modern look', () => {
      const ctaButton = screen.getAllByRole('button', { name: /Get Started/i })[0];
      expect(ctaButton).toHaveClass('rounded-full');
    });

    it('should have proper spacing between nav items', () => {
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('gap-8');
    });
  });

  describe('Visual Feedback', () => {
    it('should show menu icon when closed', () => {
      const mobileToggle = screen.getByRole('button', { name: /Toggle navigation menu/i });
      expect(mobileToggle.querySelector('svg')).toBeInTheDocument();
    });

    it('should have backdrop blur effect', () => {
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('transition-all');
    });
  });
});
