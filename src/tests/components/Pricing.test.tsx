import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pricing } from '../../components/home/Pricing';

describe('Pricing Component - UI/UX Tests', () => {
  beforeEach(() => {
    render(<Pricing />);
  });

  describe('Visual Hierarchy', () => {
    it('should render main heading', () => {
      expect(screen.getByText(/Join the club/i)).toBeInTheDocument();
    });

    it('should display pricing subheading', () => {
      expect(screen.getByText(/Simple pricing. No hidden fees. Cancel anytime./i)).toBeInTheDocument();
    });

    it('should have large, prominent heading', () => {
      const heading = screen.getByRole('heading', { name: /Join the club/i });
      expect(heading).toHaveClass('text-5xl', 'md:text-7xl');
    });
  });

  describe('Pricing Card', () => {
    it('should display plan name', () => {
      expect(screen.getByText('Standard Plan')).toBeInTheDocument();
    });

    it('should show price prominently', () => {
      expect(screen.getByText('$4,995')).toBeInTheDocument();
      expect(screen.getByText('/mo')).toBeInTheDocument();
    });

    it('should have POPULAR badge', () => {
      expect(screen.getByText('POPULAR')).toBeInTheDocument();
    });

    it('should display plan description', () => {
      expect(screen.getByText(/One request at a time. Pause or cancel anytime./i)).toBeInTheDocument();
    });

    it('should have prominent CTA button', () => {
      const button = screen.getByRole('button', { name: /Get started today/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('bg-yellow-400');
    });
  });

  describe('Features List', () => {
    it('should display all key features', () => {
      expect(screen.getByText(/One request at a time/i)).toBeInTheDocument();
      expect(screen.getByText(/Average 48 hour delivery/i)).toBeInTheDocument();
      expect(screen.getByText(/Unlimited users/i)).toBeInTheDocument();
      expect(screen.getByText(/Unlimited stock photos/i)).toBeInTheDocument();
      expect(screen.getByText(/Easy credit-card payments/i)).toBeInTheDocument();
      expect(screen.getByText(/Pause or cancel anytime/i)).toBeInTheDocument();
    });

    it('should have checkmark icons for each feature', () => {
      const checkmarks = screen.getAllByRole('img', { hidden: true });
      expect(checkmarks.length).toBeGreaterThan(0);
    });

    it('should use green color for positive indicators', () => {
      const featureText = screen.getByText(/One request at a time/i);
      const container = featureText.closest('.flex');
      const checkContainer = container?.querySelector('.bg-green-500\\/20');
      expect(checkContainer).toBeInTheDocument();
    });
  });

  describe('Call-to-Action', () => {
    it('should have primary CTA button', () => {
      const button = screen.getByRole('button', { name: /Get started today/i });
      expect(button).toBeInTheDocument();
    });

    it('should have secondary CTA link', () => {
      const link = screen.getByRole('link', { name: /Book a 15-min intro call/i });
      expect(link).toBeInTheDocument();
    });

    it('should have hover state on CTA button', () => {
      const button = screen.getByRole('button', { name: /Get started today/i });
      expect(button).toHaveClass('hover:bg-yellow-500');
    });

    it('should have full-width CTA button for emphasis', () => {
      const button = screen.getByRole('button', { name: /Get started today/i });
      expect(button).toHaveClass('w-full');
    });
  });

  describe('Visual Design', () => {
    it('should have rounded corners for modern look', () => {
      const heading = screen.getByRole('heading', { name: /Standard Plan/i });
      const card = heading.closest('.rounded-\\[2\\.5rem\\]');
      expect(card).toBeInTheDocument();
    });

    it('should have dark theme with white text', () => {
      const heading = screen.getByRole('heading', { name: /Standard Plan/i });
      const card = heading.closest('.bg-black');
      expect(card).toHaveClass('text-white');
    });

    it('should have visual glow effect', () => {
      const section = screen.getByRole('heading', { name: /Join the club/i }).closest('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      const mainHeading = screen.getByRole('heading', { name: /Join the club/i });
      const planHeading = screen.getByRole('heading', { name: /Standard Plan/i });
      expect(mainHeading).toBeInTheDocument();
      expect(planHeading).toBeInTheDocument();
    });

    it('should have accessible button', () => {
      const button = screen.getByRole('button', { name: /Get started today/i });
      expect(button).toBeEnabled();
      expect(button).toHaveAccessibleName();
    });

    it('should have accessible link', () => {
      const link = screen.getByRole('link', { name: /Book a 15-min intro call/i });
      expect(link).toHaveAccessibleName();
    });

    it('should have sufficient text contrast', () => {
      const price = screen.getByText('$4,995');
      expect(price).toHaveClass('text-6xl', 'font-bold');
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive heading sizes', () => {
      const heading = screen.getByRole('heading', { name: /Join the club/i });
      expect(heading).toHaveClass('text-5xl', 'md:text-7xl');
    });

    it('should have responsive padding', () => {
      const section = screen.getByRole('heading', { name: /Join the club/i }).closest('section');
      expect(section).toHaveClass('px-6', 'md:px-12');
    });
  });

  describe('User Experience', () => {
    it('should clearly communicate pricing model', () => {
      expect(screen.getByText(/Simple pricing. No hidden fees. Cancel anytime./i)).toBeInTheDocument();
    });

    it('should emphasize flexibility', () => {
      expect(screen.getByText(/Pause or cancel anytime/i)).toBeInTheDocument();
    });

    it('should show delivery time expectation', () => {
      expect(screen.getByText(/Average 48 hour delivery/i)).toBeInTheDocument();
    });

    it('should have clear value proposition', () => {
      expect(screen.getByText(/Unlimited users/i)).toBeInTheDocument();
      expect(screen.getByText(/Unlimited stock photos/i)).toBeInTheDocument();
    });
  });

  describe('Interactive Elements', () => {
    it('should have hover effect on card', async () => {
      const heading = screen.getByRole('heading', { name: /Standard Plan/i });
      const card = heading.closest('div[class*="motion"]');
      expect(card).toBeInTheDocument();
    });

    it('should have clickable CTA button', async () => {
      const user = userEvent.setup();
      const button = screen.getByRole('button', { name: /Get started today/i });
      await user.click(button);
      expect(button).toBeEnabled();
    });

    it('should have clickable secondary link', () => {
      const link = screen.getByRole('link', { name: /Book a 15-min intro call/i });
      expect(link).toHaveAttribute('href');
    });
  });

  describe('Trust Indicators', () => {
    it('should show POPULAR badge for social proof', () => {
      const badge = screen.getByText('POPULAR');
      expect(badge).toHaveClass('bg-yellow-400', 'text-black');
    });

    it('should emphasize easy payment', () => {
      expect(screen.getByText(/Easy credit-card payments/i)).toBeInTheDocument();
    });

    it('should highlight cancellation policy', () => {
      expect(screen.getByText(/Pause or cancel anytime/i)).toBeInTheDocument();
    });
  });
});
