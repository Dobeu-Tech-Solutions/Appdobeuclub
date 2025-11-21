import React from "react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        {/* Abstract Smiley D shape */}
        <path
          d="M10 10C10 4.47715 14.4772 0 20 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H20C14.4772 40 10 35.5228 10 30V10Z"
          fill="currentColor"
        />
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H16V30C16 35.5228 11.5228 40 6 40C2.68629 40 0 37.3137 0 34V12Z"
          fill="#EAB308" // Yellow accent
        />
        <circle cx="26" cy="14" r="3" fill="black" />
        <circle cx="26" cy="26" r="3" fill="black" />
        {/* Smile curve */}
        <path
          d="M32 20C32 22.2091 30.2091 24 28 24C25.7909 24 24 22.2091 24 20"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-bold tracking-tighter text-white">DOBEU</span>
    </div>
  );
};
