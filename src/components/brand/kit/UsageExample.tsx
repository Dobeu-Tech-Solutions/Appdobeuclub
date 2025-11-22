import React from "react";
import { Check, X } from "lucide-react";

interface UsageExampleProps {
  type: string;
  example: string;
  correct: boolean;
}

export const UsageExample = ({ type, example, correct }: UsageExampleProps) => (
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
