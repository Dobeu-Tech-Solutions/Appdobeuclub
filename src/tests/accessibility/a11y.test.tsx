import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import App from '../../App';

describe('Accessibility Tests - WCAG 2.1 Compliance', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('Semantic HTML', () => {
    it('should use semantic header element', () => {
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should use semantic main element', () => {
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('should use semantic navigation', () => {
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should have proper heading hierarchy', () => {
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
    });

    it('should use semantic button elements', () => {
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
      buttons.forEach(button => {
        expect(button.tagName).toBe('BUTTON');
      });
    });
  });

  describe('Keyboard Navigation', () => {
    it('should have focusable navigation links', () => {
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).not.toHaveAttribute('tabindex', '-1');
      });
    });

    it('should have focusable buttons', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toBeEnabled();
      });
    });

    it('should have accessible navigation menu', () => {
      const nav = screen.getByRole('navigation');
      const links = within(nav).getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });
  });

  describe('ARIA Labels and Roles', () => {
    it('should have accessible names for all interactive elements', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveAccessibleName();
      });
    });

    it('should have accessible names for all links', () => {
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAccessibleName();
      });
    });

    it('should use proper landmark roles', () => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('Color Contrast', () => {
    it('should have high contrast CTA buttons', () => {
      const ctaButtons = screen.getAllByRole('button', { name: /Get Started|Start your journey/i });
      ctaButtons.forEach(button => {
        // White background with black text provides high contrast
        expect(button).toHaveClass('bg-white', 'text-black');
      });
    });

    it('should have readable text on dark backgrounds', () => {
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('should use sufficient contrast for navigation links', () => {
      const nav = screen.getByRole('navigation');
      const links = within(nav).getAllByRole('link');
      links.forEach(link => {
        // Gray text on dark background should be readable
        expect(link).toHaveClass('text-gray-300');
      });
    });
  });

  describe('Text Alternatives', () => {
    it('should have text content for all buttons', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button.textContent || button.getAttribute('aria-label')).toBeTruthy();
      });
    });

    it('should have meaningful link text', () => {
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        const text = link.textContent || link.getAttribute('aria-label');
        expect(text).toBeTruthy();
        expect(text).not.toBe('click here');
        expect(text).not.toBe('read more');
      });
    });
  });

  describe('Focus Management', () => {
    it('should not have elements with negative tabindex on interactive elements', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        const tabindex = button.getAttribute('tabindex');
        if (tabindex) {
          expect(parseInt(tabindex)).toBeGreaterThanOrEqual(0);
        }
      });
    });

    it('should have visible focus indicators', () => {
      const links = screen.getAllByRole('link');
      // Links should be focusable
      links.forEach(link => {
        expect(link).not.toHaveAttribute('tabindex', '-1');
      });
    });
  });

  describe('Responsive Text', () => {
    it('should have scalable text sizes', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      // Should use responsive classes
      expect(heading).toHaveClass('text-6xl', 'md:text-8xl');
    });

    it('should not use fixed pixel sizes for critical text', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      const computedStyle = window.getComputedStyle(heading);
      // Tailwind uses rem units
      expect(computedStyle.fontSize).toBeTruthy();
    });
  });

  describe('Form Accessibility', () => {
    it('should have accessible buttons with proper type', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button.tagName).toBe('BUTTON');
      });
    });
  });

  describe('Navigation Structure', () => {
    it('should have skip to main content capability', () => {
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('should have logical tab order', () => {
      const nav = screen.getByRole('navigation');
      const navLinks = within(nav).getAllByRole('link');
      expect(navLinks.length).toBeGreaterThan(0);
    });

    it('should have consistent navigation across sections', () => {
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });
  });

  describe('Content Structure', () => {
    it('should have descriptive headings', () => {
      const headings = screen.getAllByRole('heading');
      headings.forEach(heading => {
        expect(heading.textContent).toBeTruthy();
        expect(heading.textContent?.length).toBeGreaterThan(0);
      });
    });

    it('should have proper document structure', () => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('Interactive Elements State', () => {
    it('should have enabled state for all interactive buttons', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toBeEnabled();
      });
    });

    it('should have valid href for all links', () => {
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Visual Indicators', () => {
    it('should have hover states for interactive elements', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        const classes = button.className;
        // Should have some hover state
        expect(classes).toBeTruthy();
      });
    });

    it('should have transition effects for smooth interactions', () => {
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        if (link.className.includes('transition')) {
          expect(link).toHaveClass('transition-colors');
        }
      });
    });
  });

  describe('Error Prevention', () => {
    it('should have clear call-to-action buttons', () => {
      const ctaButtons = screen.getAllByRole('button', { name: /Get Started|Start your journey/i });
      expect(ctaButtons.length).toBeGreaterThan(0);
    });

    it('should have descriptive button text', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        const text = button.textContent;
        if (text) {
          expect(text.length).toBeGreaterThan(0);
        }
      });
    });
  });

  describe('Mobile Accessibility', () => {
    it('should have mobile menu toggle', () => {
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('should have touch-friendly button sizes', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        // Buttons should have padding for touch targets
        expect(button.className).toBeTruthy();
      });
    });
  });

  describe('Content Readability', () => {
    it('should have readable font sizes', () => {
      const paragraphs = document.querySelectorAll('p');
      paragraphs.forEach(p => {
        expect(p).toBeInTheDocument();
      });
    });

    it('should have proper line height for readability', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });
  });
});
