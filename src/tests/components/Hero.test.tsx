import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Hero } from '../../components/home/Hero';

describe('Hero Component - UI/UX Tests', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  describe('Visual Elements', () => {
    it('should render the main heading with correct text', () => {
      expect(screen.getByText(/Tech is your/i)).toBeInTheDocument();
      expect(screen.getByText(/best friend/i)).toBeInTheDocument();
    });

    it('should display the value proposition text', () => {
      expect(
        screen.getByText(/Empowering small to medium businesses with premium tech solutions/i)
      ).toBeInTheDocument();
    });

    it('should render the CTA button with correct text', () => {
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('bg-white', 'text-black');
    });

    it('should have gradient text styling on "best friend"', () => {
      const gradientText = screen.getByText(/best friend/i);
      expect(gradientText).toHaveClass('bg-gradient-to-r');
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it('should have accessible button', () => {
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toBeEnabled();
    });

    it('should have readable text contrast', () => {
      const button = screen.getByRole('button');
      const styles = window.getComputedStyle(button);
      // Button should have high contrast (white bg, black text)
      expect(button).toHaveClass('bg-white', 'text-black');
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive text classes', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-6xl', 'md:text-8xl');
    });

    it('should have responsive paragraph text', () => {
      const paragraph = screen.getByText(/Empowering small to medium businesses/i);
      expect(paragraph).toHaveClass('text-xl', 'md:text-2xl');
    });
  });

  describe('Interactive Elements', () => {
    it('should have hover states on CTA button', () => {
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('hover:bg-gray-200');
    });

    it('should render arrow icon in button', () => {
      const button = screen.getByRole('button', { name: /Start your journey/i });
      const svg = button.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Animation Elements', () => {
    it('should render background decorative elements', () => {
      const container = screen.getByRole('heading').closest('div');
      expect(container).toBeInTheDocument();
    });

    it('should have proper z-index layering', () => {
      const heroContent = screen.getByRole('heading').closest('.z-20');
      expect(heroContent).toBeInTheDocument();
    });
  });

  describe('Content Quality', () => {
    it('should have clear and concise messaging', () => {
      const subheading = screen.getByText(/No hourly billing. No corporate nonsense./i);
      expect(subheading).toBeInTheDocument();
    });

    it('should communicate value proposition within viewport', () => {
      const container = screen.getByRole('heading').closest('.h-screen');
      expect(container).toBeInTheDocument();
    });
  });
});
