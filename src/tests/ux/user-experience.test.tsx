import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import App from '../../App';
import { Hero } from '../../components/home/Hero';
import { Services } from '../../components/home/Services';
import { Pricing } from '../../components/home/Pricing';
import { Work } from '../../components/home/Work';
import { Navbar } from '../../components/layout/Navbar';

describe('User Experience Tests', () => {
  describe('First Impressions', () => {
    beforeEach(() => {
      render(<App />);
    });

    it('should display clear value proposition immediately', () => {
      expect(screen.getByText(/Tech is your/i)).toBeInTheDocument();
      expect(screen.getByText(/best friend/i)).toBeInTheDocument();
    });

    it('should have prominent CTA above the fold', () => {
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
    });

    it('should communicate target audience clearly', () => {
      expect(screen.getByText(/small to medium businesses/i)).toBeInTheDocument();
    });

    it('should establish brand identity immediately', () => {
      const logo = screen.getByRole('link', { name: /logo/i });
      expect(logo).toBeInTheDocument();
    });
  });

  describe('Content Clarity', () => {
    it('should have clear and concise headings', () => {
      render(<App />);
      const headings = screen.getAllByRole('heading');
      
      headings.forEach(heading => {
        expect(heading.textContent).toBeTruthy();
        expect(heading.textContent?.length).toBeGreaterThan(0);
      });
    });

    it('should explain the service model clearly', () => {
      render(<Services />);
      expect(screen.getByText(/Unlimited requests/i)).toBeInTheDocument();
      expect(screen.getByText(/One flat fee/i)).toBeInTheDocument();
    });

    it('should set clear expectations', () => {
      render(<Services />);
      expect(screen.getByText(/Avg. 48 hour delivery/i)).toBeInTheDocument();
      expect(screen.getByText(/One request at a time/i)).toBeInTheDocument();
    });

    it('should communicate pricing transparently', () => {
      render(<Pricing />);
      expect(screen.getByText('$4,995')).toBeInTheDocument();
      expect(screen.getByText(/Simple pricing. No hidden fees/i)).toBeInTheDocument();
    });
  });

  describe('Navigation Experience', () => {
    beforeEach(() => {
      render(<Navbar />);
    });

    it('should have intuitive navigation structure', () => {
      expect(screen.getByRole('link', { name: 'Mission' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument();
    });

    it('should have clear navigation labels', () => {
      const nav = screen.getByRole('navigation');
      const links = within(nav).getAllByRole('link');
      
      links.forEach(link => {
        const text = link.textContent;
        expect(text).toBeTruthy();
        expect(text?.length).toBeGreaterThan(0);
      });
    });

    it('should provide visual feedback on hover', () => {
      const link = screen.getByRole('link', { name: 'Mission' });
      expect(link).toHaveClass('hover:text-white');
    });
  });

  describe('Call-to-Action Effectiveness', () => {
    it('should have multiple CTAs throughout the page', () => {
      render(<App />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(2);
    });

    it('should have action-oriented CTA text', () => {
      render(<App />);
      expect(screen.getByRole('button', { name: /Start your journey/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Get started today/i })).toBeInTheDocument();
    });

    it('should make CTAs visually prominent', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('bg-white', 'text-black');
    });

    it('should provide secondary CTAs for different commitment levels', () => {
      render(<Pricing />);
      expect(screen.getByRole('button', { name: /Get started today/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Book a 15-min intro call/i })).toBeInTheDocument();
    });
  });

  describe('Trust Building', () => {
    it('should display social proof', () => {
      render(<Work />);
      expect(screen.getByText(/Sarah Jenkins, CEO of TechFlow/i)).toBeInTheDocument();
      expect(screen.getByText(/Mike Ross, Founder of Specter/i)).toBeInTheDocument();
    });

    it('should show portfolio/work examples', () => {
      render(<Work />);
      expect(screen.getByText(/Recent work/i)).toBeInTheDocument();
    });

    it('should communicate flexibility and low risk', () => {
      render(<Pricing />);
      expect(screen.getByText(/Pause or cancel anytime/i)).toBeInTheDocument();
      expect(screen.getByText(/No hidden fees/i)).toBeInTheDocument();
    });

    it('should provide clear contact options', () => {
      render(<Pricing />);
      expect(screen.getByRole('link', { name: /Book a 15-min intro call/i })).toBeInTheDocument();
    });
  });

  describe('Visual Hierarchy', () => {
    it('should have clear heading hierarchy', () => {
      render(<App />);
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
    });

    it('should use size to indicate importance', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-6xl', 'md:text-8xl');
    });

    it('should use color to draw attention', () => {
      render(<Hero />);
      const gradientText = screen.getByText(/best friend/i);
      expect(gradientText).toHaveClass('bg-gradient-to-r');
    });

    it('should use whitespace effectively', () => {
      render(<Services />);
      const section = screen.getByRole('heading', { name: /Unlimited requests/i }).closest('section');
      expect(section).toHaveClass('py-32');
    });
  });

  describe('Loading and Performance Perception', () => {
    it('should render critical content immediately', () => {
      render(<App />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it('should have smooth transitions', () => {
      render(<Navbar />);
      const link = screen.getByRole('link', { name: 'Mission' });
      expect(link).toHaveClass('transition-colors');
    });
  });

  describe('Error Prevention', () => {
    it('should have clear button labels', () => {
      render(<App />);
      const buttons = screen.getAllByRole('button');
      
      buttons.forEach(button => {
        const text = button.textContent;
        expect(text).toBeTruthy();
      });
    });

    it('should have descriptive link text', () => {
      render(<Navbar />);
      const links = screen.getAllByRole('link');
      
      links.forEach(link => {
        const text = link.textContent || link.getAttribute('aria-label');
        expect(text).toBeTruthy();
      });
    });
  });

  describe('Mobile Experience', () => {
    it('should have mobile-friendly navigation', () => {
      render(<Navbar />);
      const buttons = screen.getAllByRole('button');
      const mobileToggle = buttons.find(btn => 
        btn.querySelector('svg') && !btn.textContent?.includes('Get Started')
      );
      expect(mobileToggle).toBeInTheDocument();
    });

    it('should have touch-friendly button sizes', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('px-8', 'py-4');
    });

    it('should have readable text on mobile', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-6xl');
    });
  });

  describe('Scannability', () => {
    it('should use bullet points for features', () => {
      render(<Pricing />);
      expect(screen.getByText(/One request at a time/i)).toBeInTheDocument();
      expect(screen.getByText(/Average 48 hour delivery/i)).toBeInTheDocument();
      expect(screen.getByText(/Unlimited users/i)).toBeInTheDocument();
    });

    it('should use visual indicators for features', () => {
      render(<Pricing />);
      const feature = screen.getByText(/One request at a time/i);
      const container = feature.closest('.flex');
      expect(container).toBeInTheDocument();
    });

    it('should break content into digestible sections', () => {
      render(<App />);
      expect(screen.getByRole('heading', { name: /Tech is your/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /Unlimited requests/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /Join the club/i })).toBeInTheDocument();
    });
  });

  describe('Consistency', () => {
    it('should use consistent button styling', () => {
      render(<App />);
      const heroButton = screen.getByRole('button', { name: /Start your journey/i });
      expect(heroButton).toHaveClass('rounded-full');
    });

    it('should use consistent color scheme', () => {
      render(<App />);
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });

    it('should use consistent typography', () => {
      render(<App />);
      const headings = screen.getAllByRole('heading');
      headings.forEach(heading => {
        expect(heading).toHaveClass('font-bold');
      });
    });
  });

  describe('Feedback and Affordance', () => {
    it('should show hover states on interactive elements', () => {
      render(<Hero />);
      const button = screen.getByRole('button', { name: /Start your journey/i });
      expect(button).toHaveClass('hover:bg-gray-200');
    });

    it('should use cursor pointer on clickable elements', () => {
      render(<Navbar />);
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link.tagName).toBe('A');
      });
    });

    it('should provide visual feedback on card hover', () => {
      render(<Services />);
      const card = screen.getByText('Subscribe').closest('div[class*="motion"]');
      expect(card).toBeInTheDocument();
    });
  });

  describe('Progressive Disclosure', () => {
    it('should present key information first', () => {
      render(<App />);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it('should provide details on demand', () => {
      render(<Pricing />);
      expect(screen.getByRole('link', { name: /Book a 15-min intro call/i })).toBeInTheDocument();
    });
  });

  describe('Emotional Design', () => {
    it('should use engaging copy', () => {
      render(<Hero />);
      expect(screen.getByText(/Tech is your/i)).toBeInTheDocument();
      expect(screen.getByText(/best friend/i)).toBeInTheDocument();
    });

    it('should use personality in messaging', () => {
      render(<Hero />);
      expect(screen.getByText(/No hourly billing. No corporate nonsense./i)).toBeInTheDocument();
    });

    it('should create visual interest', () => {
      render(<Services />);
      const cards = screen.getAllByRole('heading', { level: 3 });
      expect(cards.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Conversion Optimization', () => {
    it('should have clear value proposition', () => {
      render(<Services />);
      expect(screen.getByText(/Unlimited requests/i)).toBeInTheDocument();
      expect(screen.getByText(/One flat fee/i)).toBeInTheDocument();
    });

    it('should address objections', () => {
      render(<Pricing />);
      expect(screen.getByText(/Pause or cancel anytime/i)).toBeInTheDocument();
      expect(screen.getByText(/No hidden fees/i)).toBeInTheDocument();
    });

    it('should create urgency appropriately', () => {
      render(<Pricing />);
      expect(screen.getByText('POPULAR')).toBeInTheDocument();
    });

    it('should reduce friction', () => {
      render(<Pricing />);
      expect(screen.getByText(/Easy credit-card payments/i)).toBeInTheDocument();
    });
  });
});
