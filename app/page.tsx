"use client";

import { useState } from "react";
import { questions, personalityTypes } from "./data";

export default function Home() {
  const [gameState, setGameState] = useState<"start" | "quiz" | "results">("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    "Bold Explorer": 0,
    "Smooth Operator": 0,
    "Cozy Classic": 0,
    "Wild Card": 0,
  });

  const handleStart = () => {
    setGameState("quiz");
  };

  const handleOptionClick = (type: string) => {
    setScores((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameState("results");
    }
  };

  const handleRetake = () => {
    setScores({
      "Bold Explorer": 0,
      "Smooth Operator": 0,
      "Cozy Classic": 0,
      "Wild Card": 0,
    });
    setCurrentQuestionIndex(0);
    setGameState("start");
  };

  const calculateResult = () => {
    let topPersonality = "Bold Explorer";
    let maxScore = 0;
    for (const [type, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        topPersonality = type;
      }
    }
    return personalityTypes[topPersonality as keyof typeof personalityTypes];
  };

  return (
    <main className="min-h-screen bg-stone-100 text-stone-800 flex items-center justify-center p-6 font-sans border-t-8 border-amber-800 relative z-0">
      <div className="max-w-xl w-full bg-[#FAF7F2] p-8 md:p-12 shadow-xl shadow-stone-300/50 rounded-2xl text-center transition-all border border-stone-200 relative overflow-hidden">
        
        {/* Subtle decorative coffee aesthetics */}
        <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 z-[-1]"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 z-[-1]"></div>

        {gameState === "start" && (
          <div className="relative animate-in fade-in zoom-in duration-500 z-10">
            <div className="mb-6 flex justify-center">
              <span className="text-5xl drop-shadow-sm">☕</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-amber-900">NovaBrew Taste Quiz</h1>
            <p className="text-stone-600 mb-8 leading-relaxed md:text-lg">
              Find your unique coffee personality and get a perfectly matched bean recommendation for your morning cup.
            </p>
            <button 
              onClick={handleStart}
              className="px-8 py-3 bg-amber-800 text-white rounded-full font-medium tracking-wide hover:bg-amber-900 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 shadow-lg shadow-amber-900/20 cursor-pointer"
            >
              Start the Quiz
            </button>
          </div>
        )}

        {gameState === "quiz" && (
          <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-500 text-left z-10">
            <div className="flex justify-between items-center mb-6">
              <div className="text-xs font-bold text-amber-900/70 tracking-widest uppercase">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
              <div className="text-2xl drop-shadow-sm">🌿</div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-amber-900 leading-snug">
              {questions[currentQuestionIndex].question}
            </h2>
            <div className="space-y-4">
              {questions[currentQuestionIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option.type)}
                  className="w-full text-left p-4 border-2 border-stone-200 rounded-xl text-stone-700 bg-white/80 backdrop-blur-sm hover:border-amber-700 hover:bg-amber-50 hover:text-amber-900 hover:shadow-md transition-all cursor-pointer font-medium"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {gameState === "results" && (
          <div className="relative animate-in fade-in zoom-in duration-700 text-left z-10">
             <div className="text-center mb-6 text-4xl drop-shadow-sm">✨☕✨</div>
            <p className="text-xs text-center font-bold text-amber-900/70 tracking-widest uppercase mb-2">Your Personality Is</p>
            <h2 className="text-3xl text-center md:text-4xl font-bold mb-4 text-amber-900">{calculateResult().name}</h2>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-stone-200 mb-6">
               <h3 className="text-sm uppercase font-bold text-stone-500 mb-2 tracking-wider">What this means:</h3>
               <p className="text-stone-700 leading-relaxed italic font-medium">"{calculateResult().description}"</p>
            </div>
            
            <div className="bg-amber-900 p-6 md:p-8 rounded-xl mb-8 text-white shadow-xl">
              <p className="text-xs font-bold text-amber-300 tracking-widest uppercase mb-2">Your Perfect Coffee Match</p>
              <h3 className="text-2xl font-bold mb-2">{calculateResult().coffee}</h3>
              <p className="text-amber-50 leading-relaxed opacity-95">{calculateResult().coffeeDescription}</p>
            </div>

            <button 
              onClick={handleRetake}
              className="w-full py-3 bg-stone-200 text-stone-800 rounded-full font-bold tracking-wide hover:bg-stone-300 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-stone-400 cursor-pointer shadow-sm"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
