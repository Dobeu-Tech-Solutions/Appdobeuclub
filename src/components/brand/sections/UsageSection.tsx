import React from "react";
import { UsageExample } from "../kit/UsageExample";

export const UsageSection = () => (
  <section className="space-y-8">
    <h2 className="text-3xl font-bold border-l-4 border-red-500 pl-4">Brand Usage Guidelines</h2>
    
    <div className="space-y-12">
      {/* Logo Usage */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Logo Usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UsageExample 
            type="logo"
            example="Use the primary logo on dark backgrounds with proper spacing around it"
            correct={true}
          />
          <UsageExample 
            type="logo"
            example="Don't stretch, rotate, or apply effects to the logo"
            correct={false}
          />
          <UsageExample 
            type="logo"
            example="Use the reversed logo on light backgrounds for maximum contrast"
            correct={true}
          />
          <UsageExample 
            type="logo"
            example="Don't place the logo on busy backgrounds or low-contrast colors"
            correct={false}
          />
        </div>
      </div>

      {/* Color Usage */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Color Application</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UsageExample 
            type="color"
            example="Use Electric Lemon as the primary accent for buttons and CTAs"
            correct={true}
          />
          <UsageExample 
            type="color"
            example="Don't use more than 3 accent colors in a single composition"
            correct={false}
          />
          <UsageExample 
            type="color"
            example="Combine gradients with our secondary accents (Blue, Pink, Violet) for dynamic visuals"
            correct={true}
          />
          <UsageExample 
            type="color"
            example="Don't use pastels or muted tones - we're bold and high-contrast"
            correct={false}
          />
        </div>
      </div>

      {/* Typography Usage */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Typography Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UsageExample 
            type="typography"
            example="Use bold, tight tracking for display headlines to create impact"
            correct={true}
          />
          <UsageExample 
            type="typography"
            example="Don't use script fonts or overly decorative typefaces"
            correct={false}
          />
          <UsageExample 
            type="typography"
            example="Keep body text light to regular weight with good line-height for readability"
            correct={true}
          />
          <UsageExample 
            type="typography"
            example="Don't set long paragraphs in all caps or extra bold weights"
            correct={false}
          />
        </div>
      </div>
    </div>
  </section>
);
