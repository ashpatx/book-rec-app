import React, { useEffect } from "react";
import { Gradient } from "./assets/gradient";
import Hero from './components/Hero'
import Generator from "./components/Generator";
import Recommendation from "./components/Recommendation";

export default function MyComponent() {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []);

    return (
      <main className="min-h-screen flex flex-col relative bg-slate-900">
      <div className="relative z-10 flex flex-col flex-1 justify-center max-w-6xl p-10">
         <Hero />
         <Generator />
         <Recommendation />
      </div>
      <canvas
         id="gradient-canvas"
         className="fixed inset-0"
         data-transition-in
         />
      </main>
    );
}
