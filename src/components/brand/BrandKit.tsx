import React from "react";
import { Logo } from "../layout/Logo";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Download, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const ColorSwatch = ({ color, name, hex }: { color: string; name: string; hex: string }) => (
  <div className="space-y-2">
    <div className={`w-full h-32 rounded-xl ${color} shadow-lg border border-gray-800`} />
    <div>
      <p className="font-bold text-white">{name}</p>
      <p className="text-sm text-gray-500">{hex}</p>
    </div>
  </div>
);

const TypographySpecimen = ({ role, size, weight, sample }: { role: string; size: string; weight: string; sample: string }) => (
  <div className="py-6 border-b border-gray-800 last:border-0">
    <div className="flex items-baseline justify-between mb-2">
      <span className="text-sm text-gray-500 uppercase tracking-wider">{role}</span>
      <span className="text-xs text-gray-600 font-mono">{size} / {weight}</span>
    </div>
    <p className={`${size} ${weight} text-white`}>{sample}</p>
  </div>
);

const SocialHeaderPreview = ({ platform, width, height, color }: { platform: string; width: string; height: string; color: string }) => (
  <div className="space-y-4">
    <h4 className="text-sm text-gray-500 uppercase tracking-wider flex items-center gap-2">
      {platform === "Twitter" && <Twitter size={16} />}
      {platform === "LinkedIn" && <Linkedin size={16} />}
      {platform === "Facebook" && <Facebook size={16} />}
      {platform} Header
    </h4>
    <div 
      className={`relative overflow-hidden rounded-lg ${color} flex items-center justify-center`}
      style={{ aspectRatio: width }}
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="relative z-10 text-center transform scale-75 md:scale-100">
        <Logo className="mb-4 justify-center scale-150" />
        <p className="text-white font-bold text-xl tracking-tight">Tech is your best friend.</p>
      </div>
    </div>
  </div>
);

const SocialPostTemplate = ({ type, title, children }: { type: string; title: string; children: React.ReactNode }) => (
  <div className="bg-neutral-900 p-6 rounded-2xl border border-gray-800">
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm font-medium text-gray-400">{type}</span>
      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-white">
        <Download size={16} />
      </Button>
    </div>
    <div className="aspect-square bg-black rounded-xl overflow-hidden border border-gray-800 relative">
      {children}
    </div>
    <p className="mt-4 text-sm font-medium text-white">{title}</p>
  </div>
);

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

        {/* Logos */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold border-l-4 border-yellow-400 pl-4">Logotype & Mark</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-12 bg-black border-gray-800 flex items-center justify-center">
              <Logo />
            </Card>
            <Card className="p-12 bg-white border-gray-200 flex items-center justify-center">
               {/* Dark Logo Variant for Light Backgrounds */}
               <div className="flex items-center gap-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                    <path d="M10 10C10 4.47715 14.4772 0 20 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H20C14.4772 40 10 35.5228 10 30V10Z" fill="currentColor"/>
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H16V30C16 35.5228 11.5228 40 6 40C2.68629 40 0 37.3137 0 34V12Z" fill="#EAB308"/>
                    <circle cx="26" cy="14" r="3" fill="white"/>
                    <circle cx="26" cy="26" r="3" fill="white"/>
                    <path d="M32 20C32 22.2091 30.2091 24 28 24C25.7909 24 24 22.2091 24 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                  <span className="text-xl font-bold tracking-tighter text-black">DOBEU</span>
               </div>
            </Card>
            <Card className="p-12 bg-yellow-400 border-yellow-500 flex items-center justify-center">
              <div className="flex items-center gap-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                    <path d="M10 10C10 4.47715 14.4772 0 20 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H20C14.4772 40 10 35.5228 10 30V10Z" fill="currentColor"/>
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H16V30C16 35.5228 11.5228 40 6 40C2.68629 40 0 37.3137 0 34V12Z" fill="white"/>
                    <circle cx="26" cy="14" r="3" fill="white"/>
                    <circle cx="26" cy="26" r="3" fill="white"/>
                    <path d="M32 20C32 22.2091 30.2091 24 28 24C25.7909 24 24 22.2091 24 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                  <span className="text-xl font-bold tracking-tighter text-black">DOBEU</span>
               </div>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold border-l-4 border-blue-500 pl-4">Typography</h2>
          <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 border border-gray-800">
             <TypographySpecimen role="Display Heading" size="text-7xl" weight="font-bold tracking-tighter" sample="Tech is your best friend." />
             <TypographySpecimen role="Section Heading" size="text-4xl" weight="font-bold" sample="We reject the corporate drift." />
             <TypographySpecimen role="Body Large" size="text-2xl" weight="font-light" sample="Empowering small to medium businesses with premium tech solutions." />
             <TypographySpecimen role="Body Standard" size="text-base" weight="font-normal" sample="We operate with the agility of a startup and the precision of an enterprise. No bloat, just impact." />
             <TypographySpecimen role="UI Button" size="text-sm" weight="font-bold uppercase tracking-wider" sample="Start Your Journey" />
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold border-l-4 border-pink-500 pl-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorSwatch color="bg-yellow-400" name="Electric Lemon" hex="#FACC15" />
            <ColorSwatch color="bg-black" name="Void Black" hex="#000000" />
            <ColorSwatch color="bg-white" name="Stark White" hex="#FFFFFF" />
            <ColorSwatch color="bg-blue-500" name="Azure Tech" hex="#3B82F6" />
            <ColorSwatch color="bg-pink-500" name="Neon Rose" hex="#EC4899" />
            <ColorSwatch color="bg-purple-500" name="Deep Violet" hex="#A855F7" />
            <ColorSwatch color="bg-neutral-900" name="Graphite" hex="#171717" />
            <ColorSwatch color="bg-gray-500" name="Muted Metal" hex="#6B7280" />
          </div>
        </section>

        {/* Social Media Headers */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold border-l-4 border-green-500 pl-4">Social Media Headers</h2>
          <div className="grid grid-cols-1 gap-12">
            <SocialHeaderPreview platform="Twitter" width="3/1" height="h-48" color="bg-gradient-to-r from-blue-900 to-black" />
            <SocialHeaderPreview platform="LinkedIn" width="4/1" height="h-40" color="bg-gradient-to-r from-black to-neutral-800" />
            <SocialHeaderPreview platform="Facebook" width="16/9" height="h-64" color="bg-gradient-to-br from-yellow-400 to-orange-500" />
          </div>
        </section>

        {/* Social Posts */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold border-l-4 border-purple-500 pl-4">Social Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Quote Post */}
            <SocialPostTemplate type="Instagram Post" title="Thought Leadership Quote">
              <div className="absolute inset-0 bg-black p-6 flex flex-col justify-center">
                <span className="text-6xl text-yellow-400 font-serif mb-4">"</span>
                <p className="text-2xl font-bold leading-tight text-white mb-6">
                  Stop paying hourly. Start paying for results.
                </p>
                <div className="flex items-center gap-2 mt-auto">
                   <div className="w-8 h-8 rounded-full bg-gray-700" />
                   <span className="text-xs text-gray-400">@dobeu.tech</span>
                </div>
              </div>
            </SocialPostTemplate>

            {/* New Client Post */}
            <SocialPostTemplate type="LinkedIn Update" title="New Partner Announcement">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 p-6 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-bold tracking-widest uppercase text-white/70 mb-4">New Partner</span>
                <div className="w-24 h-24 bg-white rounded-full mb-4 flex items-center justify-center shadow-xl">
                  <span className="text-black font-bold">LOGO</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Acme Corp <br/> x Dobeu</h3>
              </div>
            </SocialPostTemplate>

            {/* Hiring / Culture */}
            <SocialPostTemplate type="Story" title="Culture / Hiring">
               <div className="absolute inset-0 bg-yellow-400 p-6 flex flex-col justify-between text-black">
                  <h3 className="text-4xl font-bold tracking-tighter leading-none">
                    WE ARE<br/>HIRING<br/>BUILDERS
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-black text-white p-2 text-sm font-bold inline-block">React Devs</div>
                    <div className="bg-black text-white p-2 text-sm font-bold inline-block">UI Designers</div>
                  </div>
                  <div className="text-right font-bold">&rarr; Link in bio</div>
               </div>
            </SocialPostTemplate>

          </div>
        </section>

      </div>
    </div>
  );
};
