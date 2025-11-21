import React, { useState, useEffect } from "react";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { Mission } from "./components/home/Mission";
import { Services } from "./components/home/Services";
import { Work } from "./components/home/Work";
import { Pricing } from "./components/home/Pricing";
import { Footer } from "./components/layout/Footer";
import { BrandKit } from "./components/brand/BrandKit";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Simple client-side routing
  const isBrandKit = currentPath === "/brand";

  return (
    <div className="bg-black min-h-screen selection:bg-yellow-400 selection:text-black font-sans">
      <CustomCursor />
      
      {isBrandKit ? (
        <>
          <div className="fixed top-6 right-6 z-50">
            <button 
              onClick={() => navigate("/")}
              className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              Back to Site
            </button>
          </div>
          <BrandKit />
        </>
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Mission />
            <Services />
            <Work />
            <Pricing />
          </main>
          <Footer onNavigate={navigate} />
        </>
      )}
    </div>
  );
}

export default App;
