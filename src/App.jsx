import React, { useEffect, useState } from "react";
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

    {/* OLLLLLDDDD STUFFF
    function updateRecommendation() {
        if (selectedGenre.length < 1) {
            console.log("Selected genre is missing");
            return;
        }

        console.log("Generating recommendation...");

        const newRecommendation = generateRecommendation({ selectedCategory, selectedGenre, length });
        console.log(newRecommendation);
        setRecommendation(newRecommendation);
    } 
*/}

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
                <Hero />
                <Generator
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                    length={length}
                    setLength={setLength}
                    updateRecommendation={updateRecommendation}
                />
                {recommendation && <Recommendation recommendation={recommendation} />}
            </div>
            <canvas
                id="gradient-canvas"
                className="fixed inset-0"
                data-transition-in
            />
        </main>
    );
}
