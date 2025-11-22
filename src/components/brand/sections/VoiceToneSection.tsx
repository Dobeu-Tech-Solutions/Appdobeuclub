import React from "react";

export const VoiceToneSection = () => (
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
);
