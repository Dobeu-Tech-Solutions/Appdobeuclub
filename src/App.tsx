import React from "react";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { Mission } from "./components/home/Mission";
import { Services } from "./components/home/Services";
import { Work } from "./components/home/Work";
import { Pricing } from "./components/home/Pricing";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-yellow-400 selection:text-black font-sans">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Mission />
        <Services />
        <Work />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
