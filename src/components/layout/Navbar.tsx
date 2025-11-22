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
      style={{ backgroundColor: `rgba(255,255,255,${bgOpacity.get()})`, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 md:px-12 transition-all duration-300 border-b border-gray-200/50"
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
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="default"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full px-6 shadow-md shadow-blue-500/30"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="default"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full px-8 py-6 text-lg mt-4 shadow-lg shadow-blue-500/30"
            >
              Get Started
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
