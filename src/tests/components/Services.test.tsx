import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Services } from '../../components/home/Services';

describe('Services Component - UI/UX Tests', () => {
  beforeEach(() => {
    render(<Services />);
  });

  describe('Visual Hierarchy', () => {
    it('should render main heading with emphasis', () => {
      expect(screen.getByText(/Unlimited requests/i)).toBeInTheDocument();
      expect(screen.getByText(/One flat fee/i)).toBeInTheDocument();
    });

    it('should have gradient text on key phrase', () => {
      const gradientText = screen.getByText(/One flat fee/i);
      expect(gradientText).toHaveClass('bg-gradient-to-r');
    });

    it('should display value proposition', () => {
      expect(screen.getByText(/Your virtual design and dev team/i)).toBeInTheDocument();
    });

    it('should have large heading for impact', () => {
      const heading = screen.getByRole('heading', { name: /Unlimited requests/i });
      expect(heading).toHaveClass('text-5xl', 'md:text-7xl');
    });
  });

  describe('Service Cards', () => {
    it('should render Subscribe card', () => {
      expect(screen.getByText('Subscribe')).toBeInTheDocument();
      expect(screen.getByText(/Subscribe to a plan/i)).toBeInTheDocument();
    });

    it('should render Request card', () => {
      expect(screen.getByText('Request')).toBeInTheDocument();
      expect(screen.getByText(/Request whatever you'd like/i)).toBeInTheDocument();
    });

    it('should render Receive card', () => {
      expect(screen.getByText('Receive')).toBeInTheDocument();
      expect(screen.getByText(/Receive your design within two business days/i)).toBeInTheDocument();
    });

    it('should display pricing on Subscribe card', () => {
      expect(screen.getByText('$4,995')).toBeInTheDocument();
      expect(screen.getByText('/mo')).toBeInTheDocument();
    });

    it('should show key features on Subscribe card', () => {
      expect(screen.getByText(/One request at a time/i)).toBeInTheDocument();
      expect(screen.getByText(/Avg. 48 hour delivery/i)).toBeInTheDocument();
      expect(screen.getByText(/Pause or cancel anytime/i)).toBeInTheDocument();
    });
  });

  describe('Visual Design', () => {
    it('should have distinct color schemes for each card', () => {
      const subscribeCard = screen.getByText('Subscribe').closest('.from-yellow-400');
      const requestCard = screen.getByText('Request').closest('.from-blue-500');
      const receiveCard = screen.getByText('Receive').closest('.from-red-500');

      expect(subscribeCard).toBeInTheDocument();
      expect(requestCard).toBeInTheDocument();
      expect(receiveCard).toBeInTheDocument();
    });

    it('should have rounded corners for modern aesthetic', () => {
      const card = screen.getByText('Subscribe').closest('.rounded-\\[2rem\\]');
      expect(card).toBeInTheDocument();
    });

    it('should have consistent card heights', () => {
      const subscribeCard = screen.getByText('Subscribe').closest('.h-\\[500px\\]');
      expect(subscribeCard).toBeInTheDocument();
    });
  });

  describe('Call-to-Action', () => {
    it('should have Join today button on Subscribe card', () => {
      const button = screen.getByRole('button', { name: /Join today/i });
      expect(button).toBeInTheDocument();
    });

    it('should have prominent button styling', () => {
      const button = screen.getByRole('button', { name: /Join today/i });
      expect(button).toHaveClass('bg-orange-600');
    });

    it('should have hover state on button', () => {
      const button = screen.getByRole('button', { name: /Join today/i });
      expect(button).toHaveClass('hover:bg-orange-500');
    });
  });

  describe('Content Quality', () => {
    it('should clearly explain the process', () => {
      expect(screen.getByText(/Subscribe to a plan/i)).toBeInTheDocument();
      expect(screen.getByText(/Request whatever you'd like/i)).toBeInTheDocument();
      expect(screen.getByText(/Receive your design within two business days/i)).toBeInTheDocument();
    });

    it('should set clear expectations', () => {
      expect(screen.getByText(/Avg. 48 hour delivery/i)).toBeInTheDocument();
      expect(screen.getByText(/One request at a time/i)).toBeInTheDocument();
    });

    it('should emphasize flexibility', () => {
      expect(screen.getByText(/Pause or cancel anytime/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      const mainHeading = screen.getByRole('heading', { name: /Unlimited requests/i });
      const cardHeadings = screen.getAllByRole('heading', { level: 3 });
      
      expect(mainHeading).toBeInTheDocument();
      expect(cardHeadings.length).toBeGreaterThanOrEqual(3);
    });

    it('should have accessible button', () => {
      const button = screen.getByRole('button', { name: /Join today/i });
      expect(button).toBeEnabled();
      expect(button).toHaveAccessibleName();
    });

    it('should have sufficient color contrast', () => {
      const subscribeHeading = screen.getByText('Subscribe');
      expect(subscribeHeading).toHaveClass('text-black');
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive grid layout', () => {
      const heading = screen.getByRole('heading', { name: /Unlimited requests/i });
      const section = heading.closest('section');
      const grid = section?.querySelector('.grid-cols-1');
      expect(grid).toBeInTheDocument();
    });

    it('should have responsive heading sizes', () => {
      const heading = screen.getByRole('heading', { name: /Unlimited requests/i });
      expect(heading).toHaveClass('text-5xl', 'md:text-7xl');
    });

    it('should have responsive padding', () => {
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toHaveClass('px-6', 'md:px-12');
    });
  });

  describe('Visual Feedback', () => {
    it('should have decorative icons', () => {
      const svgs = screen.getAllByRole('img', { hidden: true });
      expect(svgs.length).toBeGreaterThan(0);
    });

    it('should have visual indicators for features', () => {
      const featureText = screen.getByText(/One request at a time/i);
      const container = featureText.closest('.flex');
      expect(container).toBeInTheDocument();
    });
  });

  describe('User Experience', () => {
    it('should present clear value proposition', () => {
      expect(screen.getByText(/Submit as many requests as you want/i)).toBeInTheDocument();
    });

    it('should explain service scope', () => {
      expect(screen.getByText(/from mobile apps to logos/i)).toBeInTheDocument();
    });

    it('should build trust with clear timeline', () => {
      expect(screen.getByText(/within two business days on average/i)).toBeInTheDocument();
    });
  });

  describe('Layout and Spacing', () => {
    it('should have proper section padding', () => {
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toHaveClass('py-32');
    });

    it('should have centered content', () => {
      const heading = screen.getByRole('heading', { name: /Unlimited requests/i });
      const container = heading.closest('.text-center');
      expect(container).toBeInTheDocument();
    });

    it('should have proper spacing between cards', () => {
      const heading = screen.getByRole('heading', { name: /Unlimited requests/i });
      const section = heading.closest('section');
      const grid = section?.querySelector('.gap-8');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Interactive Elements', () => {
    it('should have hover effects on cards', () => {
      const subscribeCard = screen.getByText('Subscribe').closest('div[class*="motion"]');
      expect(subscribeCard).toBeInTheDocument();
    });

    it('should have transition effects', () => {
      const button = screen.getByRole('button', { name: /Join today/i });
      expect(button).toHaveClass('transition-colors');
    });
  });
});
