import React from "react";
import { Logo } from "./Logo";

export const Footer = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 py-12 border-t-2 border-blue-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Logo />
          <p className="text-sm text-gray-500">
            © 2025 Dobeu Tech Solutions. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            <a href="https://designs.dobeu.net" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
              Design Services
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            {onNavigate && (
              <button
                onClick={() => onNavigate("/brand")}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Brand Kit
              </button>
            )}
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">Privacy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">Terms</a>
            <a href="https://twitter.com/dobeutech" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">Twitter</a>
            <a href="https://linkedin.com/company/dobeu" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
