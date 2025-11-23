import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Logo } from "./Logo";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform header background opacity based on scroll
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Mission", href: "#mission" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.header
      style={{ backgroundColor: `rgba(0,0,0,${bgOpacity.get()})`, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 md:px-12 transition-all duration-300"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="relative z-50">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="default" 
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full px-6"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full px-8 py-6 text-lg mt-4"
            >
              Get Started
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
