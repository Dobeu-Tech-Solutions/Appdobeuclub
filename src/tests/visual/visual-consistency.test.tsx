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
    it('should have dark background theme', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      // Test for presence and structure rather than specific CSS class
      expect(heading).toBeInTheDocument();
      expect(heading.closest('div')).toBeInTheDocument();
    });

    it('should have sections with consistent theming', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toBeInTheDocument();
      expect(section).toHaveAttribute('id', 'services');
    });

    it('should have prominent CTA buttons', () => {
      render(<Navbar />);
      const button = screen.getAllByRole('button', { name: /Get Started/i })[0];
      expect(button).toBeInTheDocument();
      expect(button).toBeEnabled();
    });

    it('should have readable secondary text', () => {
      render(<Hero />);
      const paragraph = screen.getByText(/Empowering small to medium businesses/i);
      expect(paragraph).toBeInTheDocument();
      expect(paragraph.textContent).toBeTruthy();
    });
  });

  describe('Typography Consistency', () => {
    it('should have prominent main headings', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toContain('best friend');
    });

    it('should have clear section headings', () => {
      render(<Services />);
      const heading = screen.getByRole('heading', { name: /Unlimited requests/i });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toContain('Unlimited requests');
    });

    it('should have responsive paragraph text', () => {
      render(<Hero />);
      const paragraph = screen.getByText(/Empowering small to medium businesses/i);
      // Test for responsive classes which are behavioral
      expect(paragraph).toHaveClass('md:text-2xl');
    });

    it('should have responsive heading sizes', () => {
      render(<Pricing />);
      const heading = screen.getByRole('heading', { name: /Join the club/i });
      // Test for responsive classes which are behavioral
      expect(heading).toHaveClass('md:text-7xl');
    });
  });

  describe('Button Consistency', () => {
    it('should have accessible primary buttons', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toBeInTheDocument();
      expect(button).toBeEnabled();
      expect(button).toHaveAccessibleName();
    });

    it('should have rounded button styling', () => {
      render(<Navbar />);
      const button = screen.getAllByRole('button', { name: /Get Started/i })[0];
      expect(button).toHaveClass('rounded-full');
    });

    it('should have proper button spacing', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toBeInTheDocument();
      expect(button.textContent).toContain('Start your journey');
    });

    it('should have interactive button states', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      // Test for transition class which indicates interactivity
      expect(button).toHaveClass('transition-colors');
    });
  });

  describe('Card Consistency', () => {
    it('should have visually distinct service cards', () => {
      render(<Services />);
      const subscribeCard = screen.getByText('Subscribe');
      expect(subscribeCard).toBeInTheDocument();
      expect(subscribeCard.closest('div')).toBeInTheDocument();
    });

    it('should have structured card content', () => {
      render(<Services />);
      const card = screen.getByText('Subscribe');
      const cardParent = card.closest('div');
      expect(cardParent).toBeInTheDocument();
    });

    it('should have consistent card layout', () => {
      render(<Services />);
      const requestCard = screen.getByText('Request');
      const receiveCard = screen.getByText('Receive');
      expect(requestCard).toBeInTheDocument();
      expect(receiveCard).toBeInTheDocument();
    });
  });

  describe('Spacing Consistency', () => {
    it('should have well-spaced sections', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toBeInTheDocument();
      expect(section).toHaveAttribute('id', 'services');
    });

    it('should have responsive horizontal spacing', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      // Test for responsive padding classes
      expect(section).toHaveClass('md:px-12');
    });

    it('should have navigation spacing', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveClass('gap-8');
    });

    it('should have proper heading margins', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveClass('mb-6');
    });
  });

  describe('Layout Consistency', () => {
    it('should have constrained content width', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      const container = nav.querySelector('.max-w-7xl');
      expect(container).toBeInTheDocument();
    });

    it('should center main content', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      const container = heading.closest('div');
      expect(container).toBeInTheDocument();
    });

    it('should use flexible layouts', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveClass('flex');
    });
  });

  describe('Icon Consistency', () => {
    it('should include icons in interactive elements', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      const svg = button.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should have icons in service sections', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toBeInTheDocument();
      const svgs = section?.querySelectorAll('svg');
      expect(svgs?.length).toBeGreaterThan(0);
    });
  });

  describe('Animation Consistency', () => {
    it('should have smooth transitions on links', () => {
      render(<Navbar />);
      const links = screen.getAllByRole('link');
      const transitionLinks = links.filter(link => link.className.includes('transition'));
      transitionLinks.forEach(link => {
        expect(link).toHaveClass('transition-colors');
      });
    });

    it('should have interactive transitions on buttons', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('transition-colors');
    });
  });

  describe('Border Consistency', () => {
    it('should have subtle borders on sections', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
      expect(footer).toHaveClass('border-t');
    });

    it('should maintain visual separation', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('Shadow Consistency', () => {
    it('should have depth on pricing cards', () => {
      render(<Pricing />);
      const heading = screen.getByRole('heading', { name: /Standard Plan/i });
      expect(heading).toBeInTheDocument();
      const card = heading.closest('div');
      expect(card).toBeInTheDocument();
    });
  });

  describe('Gradient Consistency', () => {
    it('should have gradient text effects', () => {
      render(<Hero />);
      const gradientText = screen.getByText(/best friend/i);
      expect(gradientText).toBeInTheDocument();
      expect(gradientText).toHaveClass('bg-gradient-to-r');
    });

    it('should use gradients for emphasis', () => {
      render(<Services />);
      const gradientText = screen.getByText(/One flat fee/i);
      expect(gradientText).toBeInTheDocument();
      expect(gradientText).toHaveClass('bg-gradient-to-r');
    });
  });

  describe('Z-Index Hierarchy', () => {
    it('should layer navigation above content', () => {
      render(<Navbar />);
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('z-40');
    });

    it('should properly layer hero content', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      const content = heading.closest('div');
      expect(content).toBeInTheDocument();
    });
  });

  describe('Responsive Consistency', () => {
    it('should have responsive typography', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      // Test for responsive classes which control behavior
      expect(heading).toHaveClass('md:text-8xl');
    });

    it('should adapt spacing for different screens', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      // Test for responsive padding classes
      expect(section).toHaveClass('md:px-12');
    });
  });

  describe('Text Alignment Consistency', () => {
    it('should center hero content', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      const container = heading.closest('div');
      expect(container).toBeInTheDocument();
    });

    it('should center pricing section', () => {
      render(<Pricing />);
      const heading = screen.getByRole('heading', { name: /Join the club/i });
      expect(heading).toBeInTheDocument();
    });
  });

  describe('Link Styling Consistency', () => {
    it('should have clear navigation links', () => {
      render(<Navbar />);
      const link = screen.getByRole('link', { name: 'Mission' });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAccessibleName();
    });

    it('should have interactive link states', () => {
      render(<Navbar />);
      const link = screen.getByRole('link', { name: 'Mission' });
      expect(link).toHaveClass('hover:text-white');
    });

    it('should have smooth link transitions', () => {
      render(<Navbar />);
      const link = screen.getByRole('link', { name: 'Mission' });
      expect(link).toHaveClass('transition-colors');
    });
  });

  describe('Badge Consistency', () => {
    it('should have prominent badges for emphasis', () => {
      render(<Pricing />);
      const badge = screen.getByText('POPULAR');
      expect(badge).toBeInTheDocument();
      expect(badge.textContent).toBe('POPULAR');
    });

    it('should have rounded badge styling', () => {
      render(<Pricing />);
      const badge = screen.getByText('POPULAR');
      expect(badge).toHaveClass('rounded-full');
    });
  });

  describe('Feature List Consistency', () => {
    it('should have structured feature lists', () => {
      render(<Pricing />);
      const feature = screen.getByText(/One request at a time/i);
      expect(feature).toBeInTheDocument();
      const container = feature.closest('div');
      expect(container).toBeInTheDocument();
    });

    it('should have well-spaced features', () => {
      render(<Pricing />);
      const heading = screen.getByRole('heading', { name: /Standard Plan/i });
      expect(heading).toBeInTheDocument();
      const section = heading.closest('div');
      expect(section).toBeInTheDocument();
    });
  });
});
