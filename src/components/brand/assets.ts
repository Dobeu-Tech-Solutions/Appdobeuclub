// Dobeu Brand Assets - Data URIs
// These can be used as 'src' for img tags or for download links

// Primary Logo: White Body, Yellow Accent, Black Face (Best on Dark Backgrounds)
const LOGO_PRIMARY_SVG = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10C10 4.47715 14.4772 0 20 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H20C14.4772 40 10 35.5228 10 30V10Z" fill="#FFFFFF"/><path d="M0 12C0 5.37258 5.37258 0 12 0H16V30C16 35.5228 11.5228 40 6 40C2.68629 40 0 37.3137 0 34V12Z" fill="#FACC15"/><circle cx="26" cy="14" r="3" fill="#000000"/><circle cx="26" cy="26" r="3" fill="#000000"/><path d="M32 20C32 22.2091 30.2091 24 28 24C25.7909 24 24 22.2091 24 20" stroke="#000000" stroke-width="3" stroke-linecap="round"/></svg>`;

// Reverse Logo: Black Body, Yellow Accent, White Face (Best on Light Backgrounds)
const LOGO_REVERSE_SVG = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10C10 4.47715 14.4772 0 20 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H20C14.4772 40 10 35.5228 10 30V10Z" fill="#000000"/><path d="M0 12C0 5.37258 5.37258 0 12 0H16V30C16 35.5228 11.5228 40 6 40C2.68629 40 0 37.3137 0 34V12Z" fill="#FACC15"/><circle cx="26" cy="14" r="3" fill="#FFFFFF"/><circle cx="26" cy="26" r="3" fill="#FFFFFF"/><path d="M32 20C32 22.2091 30.2091 24 28 24C25.7909 24 24 22.2091 24 20" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/></svg>`;

// Helper to convert SVG string to Data URI
const svgToDataUri = (svg: string) => `data:image/svg+xml;base64,${btoa(svg)}`;

export const BRAND_ASSETS = {
  logo: {
    primary: svgToDataUri(LOGO_PRIMARY_SVG),
    reverse: svgToDataUri(LOGO_REVERSE_SVG),
  }
};
