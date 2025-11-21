import React from "react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Logo />
          <p className="text-sm text-gray-500">
            © 2025 Dobeu Tech Solutions. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
