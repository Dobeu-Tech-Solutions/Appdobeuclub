import React from "react";

interface TypographySpecimenProps {
  role: string;
  size: string;
  weight: string;
  sample: string;
}

export const TypographySpecimen = ({ role, size, weight, sample }: TypographySpecimenProps) => (
  <div className="py-6 border-b border-gray-800 last:border-0">
    <div className="flex items-baseline justify-between mb-2">
      <span className="text-sm text-gray-500 uppercase tracking-wider">{role}</span>
      <span className="text-xs text-gray-600 font-mono">{size} / {weight}</span>
    </div>
    <p className={`${size} ${weight} text-white`}>{sample}</p>
  </div>
);
