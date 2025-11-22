import React from "react";

export const ColorSwatch = ({ color, name, hex }: { color: string; name: string; hex: string }) => (
  <div className="space-y-2">
    <div className={`w-full h-32 rounded-xl ${color} shadow-lg border border-gray-800`} />
    <div>
      <p className="font-bold text-white">{name}</p>
      <p className="text-sm text-gray-500">{hex}</p>
    </div>
  </div>
);
