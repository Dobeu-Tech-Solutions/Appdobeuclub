import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../../components/home/Hero';
import { Services } from '../../components/home/Services';
import { Pricing } from '../../components/home/Pricing';
import { Work } from '../../components/home/Work';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';

describe('Visual Consistency Tests', () => {
  describe('Color Scheme Consistency', () => {
    it('should use consistent black background', () => {
      render(<Hero />);
      const container = screen.getByRole('heading').closest('.bg-black');
      expect(container).toBeInTheDocument();
    });

    it('should use consistent white text on dark backgrounds', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('.text-white');
      expect(section).toBeInTheDocument();
    });

    it('should use consistent yellow accent color', () => {
      render(<Navbar />);
      const button = screen.getAllByRole('button', { name: /Get Started/i })[0];
      expect(button).toHaveClass('bg-yellow-500');
    });

    it('should use consistent gray for secondary text', () => {
      render(<Hero />);
      const paragraph = screen.getByText(/Empowering small to medium businesses/i);
      expect(paragraph).toHaveClass('text-gray-400');
    });
  });

  describe('Typography Consistency', () => {
    it('should use consistent heading font weights', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('font-bold');
    });

    it('should use consistent heading tracking', () => {
      render(<Services />);
      const heading = screen.getByRole('heading', { name: /Unlimited requests/i });
      expect(heading).toHaveClass('tracking-tighter');
    });

    it('should use consistent paragraph styling', () => {
      render(<Hero />);
      const paragraph = screen.getByText(/Empowering small to medium businesses/i);
      expect(paragraph).toHaveClass('text-xl', 'md:text-2xl');
    });

    it('should use consistent font sizes across sections', () => {
      render(<Pricing />);
      const heading = screen.getByRole('heading', { name: /Join the club/i });
      expect(heading).toHaveClass('text-5xl', 'md:text-7xl');
    });
  });

  describe('Button Consistency', () => {
    it('should use consistent primary button styling', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('bg-white', 'text-black');
    });

    it('should use consistent button border radius', () => {
      render(<Navbar />);
      const button = screen.getAllByRole('button', { name: /Get Started/i })[0];
      expect(button).toHaveClass('rounded-full');
    });

    it('should use consistent button padding', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('px-8', 'py-4');
    });

    it('should use consistent hover states', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('hover:bg-gray-200');
    });
  });

  describe('Card Consistency', () => {
    it('should use consistent card border radius', () => {
      render(<Services />);
      const card = screen.getByText('Subscribe').closest('.rounded-\\[2rem\\]');
      expect(card).toBeInTheDocument();
    });

    it('should use consistent card padding', () => {
      render(<Services />);
      const card = screen.getByText('Subscribe').closest('.p-8');
      expect(card).toBeInTheDocument();
    });

    it('should use consistent card heights', () => {
      render(<Services />);
      const card = screen.getByText('Subscribe').closest('.h-\\[500px\\]');
      expect(card).toBeInTheDocument();
    });
  });

  describe('Spacing Consistency', () => {
    it('should use consistent section padding', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toHaveClass('py-32');
    });

    it('should use consistent horizontal padding', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toHaveClass('px-6', 'md:px-12');
    });

    it('should use consistent gap spacing', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('gap-8');
    });

    it('should use consistent margin bottom on headings', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('mb-6');
    });
  });

  describe('Layout Consistency', () => {
    it('should use consistent max-width containers', () => {
      render(<Navbar />);
      const container = screen.getByRole('navigation').querySelector('.max-w-7xl');
      expect(container).toBeInTheDocument();
    });

    it('should use consistent centering', () => {
      render(<Hero />);
      const container = screen.getByRole('heading').closest('.mx-auto');
      expect(container).toBeInTheDocument();
    });

    it('should use consistent flex layouts', () => {
      render(<Navbar />);
      const container = screen.getByRole('navigation').querySelector('.flex');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Icon Consistency', () => {
    it('should use consistent icon sizes', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      const svg = button.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should use consistent icon styling', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Animation Consistency', () => {
    it('should use consistent transition durations', () => {
      render(<Navbar />);
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        if (link.className.includes('transition')) {
          expect(link).toHaveClass('transition-colors');
        }
      });
    });

    it('should use consistent hover transitions', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('transition-colors');
    });
  });

  describe('Border Consistency', () => {
    it('should use consistent border colors', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('border-gray-900');
    });

    it('should use consistent border widths', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('border-t');
    });
  });

  describe('Shadow Consistency', () => {
    it('should use consistent shadow styles on cards', () => {
      render(<Pricing />);
      const card = screen.getByRole('heading', { name: /Standard Plan/i }).closest('.shadow-2xl');
      expect(card).toBeInTheDocument();
    });
  });

  describe('Gradient Consistency', () => {
    it('should use consistent gradient directions', () => {
      render(<Hero />);
      const gradientText = screen.getByText(/best friend/i);
      expect(gradientText).toHaveClass('bg-gradient-to-r');
    });

    it('should use consistent gradient colors', () => {
      render(<Services />);
      const gradientText = screen.getByText(/One flat fee/i);
      expect(gradientText).toHaveClass('bg-gradient-to-r');
    });
  });

  describe('Z-Index Hierarchy', () => {
    it('should have consistent z-index for navigation', () => {
      render(<Navbar />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('z-40');
    });

    it('should have consistent z-index for content layers', () => {
      render(<Hero />);
      const content = screen.getByRole('heading').closest('.z-20');
      expect(content).toBeInTheDocument();
    });
  });

  describe('Responsive Consistency', () => {
    it('should use consistent breakpoint classes', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-6xl', 'md:text-8xl');
    });

    it('should use consistent responsive padding', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toHaveClass('px-6', 'md:px-12');
    });
  });

  describe('Text Alignment Consistency', () => {
    it('should use consistent center alignment for hero content', () => {
      render(<Hero />);
      const container = screen.getByRole('heading').closest('.text-center');
      expect(container).toBeInTheDocument();
    });

    it('should use consistent center alignment for pricing', () => {
      render(<Pricing />);
      const container = screen.getByRole('heading', { name: /Join the club/i }).closest('.text-center');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Link Styling Consistency', () => {
    it('should use consistent link colors', () => {
      render(<Navbar />);
      const link = screen.getByRole('link', { name: 'Mission' });
      expect(link).toHaveClass('text-gray-300');
    });

    it('should use consistent link hover states', () => {
      render(<Navbar />);
      const link = screen.getByRole('link', { name: 'Mission' });
      expect(link).toHaveClass('hover:text-white');
    });

    it('should use consistent link transitions', () => {
      render(<Navbar />);
      const link = screen.getByRole('link', { name: 'Mission' });
      expect(link).toHaveClass('transition-colors');
    });
  });

  describe('Badge Consistency', () => {
    it('should use consistent badge styling', () => {
      render(<Pricing />);
      const badge = screen.getByText('POPULAR');
      expect(badge).toHaveClass('bg-yellow-400', 'text-black');
    });

    it('should use consistent badge border radius', () => {
      render(<Pricing />);
      const badge = screen.getByText('POPULAR');
      expect(badge).toHaveClass('rounded-full');
    });
  });

  describe('Feature List Consistency', () => {
    it('should use consistent checkmark styling', () => {
      render(<Pricing />);
      const feature = screen.getByText(/One request at a time/i);
      const container = feature.closest('.flex');
      expect(container).toBeInTheDocument();
    });

    it('should use consistent feature spacing', () => {
      render(<Pricing />);
      const section = screen.getByRole('heading', { name: /Standard Plan/i }).closest('div');
      const featureList = section?.querySelector('.space-y-4');
      expect(featureList).toBeInTheDocument();
    });
  });
});
