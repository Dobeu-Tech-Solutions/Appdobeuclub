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

        <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">Privacy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">Terms</a>
            {onNavigate && (
              <button
                onClick={() => onNavigate("/brand")}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Brand Kit
              </button>
            )}
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">Twitter</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
