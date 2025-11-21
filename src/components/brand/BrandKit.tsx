import React from "react";
import { Logo } from "../layout/Logo";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Download, Twitter, Linkedin, Facebook, Instagram, Check, X } from "lucide-react";

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

const UsageExample = ({ type, example, correct }: { type: string; example: string; correct: boolean }) => (
  <div className={`p-6 rounded-xl border-2 ${correct ? 'border-green-500 bg-green-950/20' : 'border-red-500 bg-red-950/20'}`}>
    <div className="flex items-center gap-2 mb-3">
      {correct ? (
        <Check className="text-green-500" size={20} />
      ) : (
        <X className="text-red-500" size={20} />
      )}
      <span className={`font-bold ${correct ? 'text-green-500' : 'text-red-500'}`}>
        {correct ? 'DO' : "DON'T"}
      </span>
    </div>
    <p className="text-sm text-gray-300">{example}</p>
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

            {/* Case Study */}
            <SocialPostTemplate type="LinkedIn Post" title="Case Study / Results">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-blue-900 p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">Case Study</span>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    How we helped FitTech scale to 50k users
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/10 backdrop-blur p-3 rounded">
                      <div className="text-3xl font-bold text-yellow-400">3x</div>
                      <div className="text-xs text-gray-300">Growth</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-3 rounded">
                      <div className="text-3xl font-bold text-yellow-400">2mo</div>
                      <div className="text-xs text-gray-300">Timeline</div>
                    </div>
                  </div>
                </div>
              </div>
            </SocialPostTemplate>

            {/* Testimonial */}
            <SocialPostTemplate type="Instagram Story" title="Client Testimonial">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-pink-600 p-8 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <p className="text-lg font-bold text-white mb-4 leading-relaxed">
                  "Dobeu delivered in 6 weeks what our previous agency couldn't do in 6 months."
                </p>
                <div className="text-sm text-white/80">
                  <div className="font-bold">Sarah Chen</div>
                  <div>CEO, TechStart Inc</div>
                </div>
              </div>
            </SocialPostTemplate>

            {/* Tech Tip */}
            <SocialPostTemplate type="Twitter Post" title="Quick Tech Tip">
              <div className="absolute inset-0 bg-black p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Pro Tip</span>
                  </div>
                  <p className="text-xl font-bold text-white leading-tight">
                    Your website should load in under 2 seconds. Every second after that, you lose 7% of conversions.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded" />
                  <span className="text-xs text-gray-400 font-bold">@dobeu.tech</span>
                </div>
              </div>
            </SocialPostTemplate>

            {/* Product Launch */}
            <SocialPostTemplate type="LinkedIn Carousel" title="Product Launch">
              <div className="absolute inset-0 bg-yellow-400 p-8 flex flex-col justify-center items-center text-center text-black">
                <div className="space-y-6">
                  <div className="inline-block bg-black text-yellow-400 px-4 py-2 text-xs font-bold rounded-full">
                    NOW LIVE
                  </div>
                  <h3 className="text-4xl font-bold tracking-tighter leading-none">
                    INTRODUCING<br/>SPRINT<br/>PACKAGES
                  </h3>
                  <p className="text-sm font-medium">
                    From idea to launch in 4 weeks
                  </p>
                </div>
              </div>
            </SocialPostTemplate>

            {/* Behind the Scenes */}
            <SocialPostTemplate type="Instagram Reel" title="Behind the Scenes">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-pink-500 rounded-full" />
                  <span className="text-xs font-bold text-white">@dobeu.tech</span>
                </div>
                <div className="text-center py-8">
                  <h3 className="text-3xl font-bold text-white tracking-tighter leading-tight">
                    A day in the life<br/>at Dobeu HQ
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-yellow-400/20 rounded" />
                  <div className="aspect-square bg-blue-500/20 rounded" />
                  <div className="aspect-square bg-pink-500/20 rounded" />
                </div>
              </div>
            </SocialPostTemplate>

          </div>
        </section>

        {/* Brand Voice & Tone */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold border-l-4 border-orange-500 pl-4">Voice & Tone</h2>
          <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 border border-gray-800 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">Our Voice: Edgy but Friendly</h3>
              <p className="text-gray-300 text-lg">
                We're the anti-corporate partner. Direct, confident, and human. We speak like a trusted advisor who actually gets it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-green-500 uppercase tracking-wider">✓ We Are</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Bold:</strong> We say what others won't</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Direct:</strong> Short sentences. Clear points.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Human:</strong> Like talking to a smart friend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span><strong className="text-white">Fun:</strong> Work is serious, but we're not stuffy</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-red-500 uppercase tracking-wider">✗ We're Not</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Corporate:</strong> No "synergy" or "circle back"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Overpromising:</strong> We deliver, not dream</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Formal:</strong> Save the suit-speak for others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Generic:</strong> Every word has a purpose</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h4 className="text-lg font-bold text-white mb-4">Example Messaging</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-black p-4 rounded-lg border border-gray-800">
                  <span className="text-xs text-gray-500 mb-2 block">HERO HEADLINE</span>
                  <p className="text-xl font-bold text-white">"We build tech that doesn't suck."</p>
                </div>
                <div className="bg-black p-4 rounded-lg border border-gray-800">
                  <span className="text-xs text-gray-500 mb-2 block">CTA BUTTON</span>
                  <p className="text-lg font-bold text-yellow-400">"Let's Build Something"</p>
                </div>
                <div className="bg-black p-4 rounded-lg border border-gray-800">
                  <span className="text-xs text-gray-500 mb-2 block">ERROR MESSAGE</span>
                  <p className="text-base text-white">"Oops, something broke. We're on it."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
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

      </div>
    </div>
  );
};