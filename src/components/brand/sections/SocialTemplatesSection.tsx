import React from "react";
import { SocialPostTemplate } from "../kit/SocialPostTemplate";

export const SocialTemplatesSection = () => (
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
);
