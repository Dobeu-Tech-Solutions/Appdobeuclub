import React from "react";
import { TypographySpecimen } from "../kit/TypographySpecimen";

export const TypographySection = () => (
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
);
