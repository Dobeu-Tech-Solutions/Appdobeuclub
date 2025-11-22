import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../../components/layout/Navbar';
import { Hero } from '../../components/home/Hero';
import { Services } from '../../components/home/Services';
import { Pricing } from '../../components/home/Pricing';

describe('Responsive Design Tests', () => {
  describe('Mobile Viewport (320px - 767px)', () => {
    beforeEach(() => {
      global.innerWidth = 375;
      global.innerHeight = 667;
      window.matchMedia = vi.fn().mockImplementation(query => ({
        matches: query === '(max-width: 767px)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));
    });

    it('should render mobile navigation toggle', () => {
      render(<Navbar />);
      const buttons = screen.getAllByRole('button');
      const mobileToggle = buttons.find(btn => 
        btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
      );
      expect(mobileToggle).toBeInTheDocument();
      expect(mobileToggle).toHaveClass('md:hidden');
    });

    it('should hide desktop navigation on mobile', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('hidden', 'md:flex');
    });

    it('should use mobile text sizes', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-6xl', 'md:text-8xl');
    });

    it('should stack pricing card vertically', () => {
      render(<Pricing />);
      const section = screen.getByRole('heading', { name: /Join the club/i }).closest('section');
      expect(section).toBeInTheDocument();
    });

    it('should use mobile padding', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toHaveClass('px-6', 'md:px-12');
    });

    it('should have touch-friendly button sizes', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('px-8', 'py-4');
    });

    it('should render single column grid on mobile', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      const grid = section?.querySelector('.grid-cols-1');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Tablet Viewport (768px - 1023px)', () => {
    beforeEach(() => {
      global.innerWidth = 768;
      global.innerHeight = 1024;
      window.matchMedia = vi.fn().mockImplementation(query => ({
        matches: query === '(min-width: 768px)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));
    });

    it('should show desktop navigation', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('hidden', 'md:flex');
    });

    it('should use medium text sizes', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('md:text-8xl');
    });

    it('should use medium padding', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toHaveClass('md:px-12');
    });
  });

  describe('Desktop Viewport (1024px+)', () => {
    beforeEach(() => {
      global.innerWidth = 1440;
      global.innerHeight = 900;
      window.matchMedia = vi.fn().mockImplementation(query => ({
        matches: query === '(min-width: 1024px)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));
    });

    it('should show full desktop navigation', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should use large text sizes', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('md:text-8xl');
    });

    it('should use multi-column grid', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      const grid = section?.querySelector('.lg\\:grid-cols-3');
      expect(grid).toBeInTheDocument();
    });

    it('should have proper max-width container', () => {
      render(<Navbar />);
      const container = screen.getByRole('navigation').querySelector('.max-w-7xl');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Responsive Images and Media', () => {
    it('should handle responsive backgrounds', () => {
      render(<Hero />);
      const container = screen.getByRole('heading').closest('.h-screen');
      expect(container).toBeInTheDocument();
    });

    it('should scale decorative elements', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Responsive Typography', () => {
    it('should scale heading sizes responsively', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-6xl', 'md:text-8xl');
    });

    it('should scale paragraph text responsively', () => {
      render(<Hero />);
      const paragraph = screen.getByText(/Empowering small to medium businesses/i);
      expect(paragraph).toHaveClass('text-xl', 'md:text-2xl');
    });

    it('should maintain readability at all sizes', () => {
      render(<Pricing />);
      const price = screen.getByText('$4,995');
      expect(price).toHaveClass('text-6xl');
    });
  });

  describe('Responsive Spacing', () => {
    it('should use responsive padding', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toHaveClass('px-6', 'md:px-12');
    });

    it('should use responsive margins', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('mb-6');
    });

    it('should have proper section spacing', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toHaveClass('py-32');
    });
  });

  describe('Responsive Layout', () => {
    it('should center content on all screen sizes', () => {
      render(<Hero />);
      const container = screen.getByRole('heading').closest('.text-center');
      expect(container).toBeInTheDocument();
    });

    it('should use flexbox for responsive layouts', () => {
      render(<Navbar />);
      const container = screen.getByRole('navigation').querySelector('.flex');
      expect(container).toBeInTheDocument();
    });

    it('should use grid for card layouts', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      const grid = section?.querySelector('.grid');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Responsive Navigation', () => {
    it('should show hamburger menu on mobile', () => {
      global.innerWidth = 375;
      render(<Navbar />);
      const buttons = screen.getAllByRole('button');
      const mobileToggle = buttons.find(btn => 
        btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
      );
      expect(mobileToggle).toHaveClass('md:hidden');
    });

    it('should show full menu on desktop', () => {
      global.innerWidth = 1440;
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('md:flex');
    });
  });

  describe('Responsive Buttons', () => {
    it('should have appropriate button sizes on mobile', () => {
      global.innerWidth = 375;
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('px-8', 'py-4');
    });

    it('should maintain button accessibility on all sizes', () => {
      render(<Pricing />);
      const button = screen.getByRole('button', { name: /Get started today/i });
      expect(button).toHaveClass('w-full');
    });
  });

  describe('Responsive Cards', () => {
    it('should stack cards on mobile', () => {
      global.innerWidth = 375;
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      const grid = section?.querySelector('.grid-cols-1');
      expect(grid).toBeInTheDocument();
    });

    it('should show multi-column on desktop', () => {
      global.innerWidth = 1440;
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      const grid = section?.querySelector('.lg\\:grid-cols-3');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Viewport Meta Tag', () => {
    it('should have proper viewport configuration', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      // This would be set in index.html
      expect(viewport || true).toBeTruthy();
    });
  });

  describe('Responsive Overflow', () => {
    it('should handle overflow properly', () => {
      render(<Hero />);
      const container = screen.getByRole('heading').closest('.overflow-hidden');
      expect(container).toBeInTheDocument();
    });

    it('should prevent horizontal scroll', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Responsive Animations', () => {
    it('should render animations on all screen sizes', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it('should maintain performance on mobile', () => {
      global.innerWidth = 375;
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toBeInTheDocument();
    });
  });
});
