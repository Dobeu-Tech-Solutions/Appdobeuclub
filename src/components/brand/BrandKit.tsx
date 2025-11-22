import React from "react";
import { LogoSection } from "./sections/LogoSection";
import { TypographySection } from "./sections/TypographySection";
import { ColorSection } from "./sections/ColorSection";
import { SocialHeadersSection } from "./sections/SocialHeadersSection";
import { SocialTemplatesSection } from "./sections/SocialTemplatesSection";
import { VoiceToneSection } from "./sections/VoiceToneSection";
import { UsageSection } from "./sections/UsageSection";

export const BrandKit = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Brand Identity<br />System
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            The core elements of the Dobeu brand. Use these guidelines to ensure consistency across all touchpoints.
            Keep it bold. Keep it friendly. Keep it edgy.
          </p>
        </div>

        <LogoSection />
        <TypographySection />
        <ColorSection />
        <SocialHeadersSection />
        <SocialTemplatesSection />
        <VoiceToneSection />
        <UsageSection />

      </div>
    </div>
  );
};
