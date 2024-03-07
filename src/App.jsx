import React, { useEffect, useState, useRef } from "react";
import { Gradient } from "./assets/gradient";
import Hero from './components/Hero';
import Generator from "./components/Generator";
import Recommendation from "./components/Recommendation";
import { GENRES, BOOKS, LENGTH } from './utils/books';
import { generateRecommendation } from "./utils/functions";

export default function App() {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []);

    // Refs for scrolling
    const generatorRef = useRef(null);
    const recRef = useRef(null);
    
    const scrollToGenerator = () => {
        generatorRef.current.scrollIntoView({ behavior: "smooth" });
    };
    
    const scrollToRecommendation = () => {
        recRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Generator Information
    const [recommendation, setRecommendation] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('fiction');
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [length, setLength] = useState('short');

    function updateRecommendation() {
        if (selectedGenre.length < 1) {
            console.log("Selected genre is missing");
            return;
        }
    
        console.log("Generating recommendation...");
    
        const newRecommendation = generateRecommendation({ selectedCategory, selectedGenre, selectedLength: length });
        console.log(newRecommendation);
        setRecommendation([newRecommendation]);
    }

    useEffect(() => {
        if (recommendation) {
            console.log("Recommendation generated:", recommendation);
        } else {
            console.log("No recommendation found");
        }
    }, [recommendation]);

    return (
        <main className="min-h-screen flex flex-col relative bg-slate-900">
            <div className="relative z-10 flex flex-col flex-1 justify-center max-w-6xl p-10">
                <Hero scrollToGenerator={scrollToGenerator}/>
                <div ref={generatorRef}>
                    <Generator
                        scrollToRecommendation={scrollToRecommendation}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedGenre={selectedGenre}
                        setSelectedGenre={setSelectedGenre}
                        length={length}
                        setLength={setLength}
                        updateRecommendation={updateRecommendation}

                    />
                    {recommendation &&
                        <div ref={recRef}>
                        <Recommendation recommendation={recommendation} />
                    </div>
                    }
                </div>
            </div>
            <canvas
                id="gradient-canvas"
                className="fixed inset-0"
                data-transition-in
            />
        </main>
    );
}
