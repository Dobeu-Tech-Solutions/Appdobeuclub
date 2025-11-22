import React from "react";
import { Button } from "../../ui/button";
import { Download } from "lucide-react";

interface SocialPostTemplateProps {
  type: string;
  title: string;
  children: React.ReactNode;
}

export const SocialPostTemplate = ({ type, title, children }: SocialPostTemplateProps) => (
  <div className="bg-neutral-900 p-6 rounded-2xl border border-gray-800">
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm font-medium text-gray-400">{type}</span>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 text-gray-500 hover:text-white"
        onClick={() => {
          // Simple download notification
          alert('Template ready for download. Right-click the preview to save or take a screenshot.');
        }}
      >
        <Download size={16} />
      </Button>
    </div>
    <div className="aspect-square bg-black rounded-xl overflow-hidden border border-gray-800 relative">
      {children}
    </div>
    <p className="mt-4 text-sm font-medium text-white">{title}</p>
  </div>
);
