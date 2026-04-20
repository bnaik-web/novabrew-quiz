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
    <main className="min-h-screen bg-[#fcfcfc] text-[#333] flex items-center justify-center p-6 font-sans">
      <div className="max-w-xl w-full bg-white p-8 md:p-12 border border-[#eaeaea] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] text-center transition-all">
        {gameState === "start" && (
          <div className="animate-in fade-in zoom-in duration-500">
            <h1 className="text-3xl font-medium tracking-tight mb-4 text-[#111]">NovaBrew Coffee Taste Profile</h1>
            <p className="text-[#555] mb-8 leading-relaxed">
              Find your coffee personality and get a perfectly matched bean recommendation for your morning cup.
            </p>
            <button 
              onClick={handleStart}
              className="px-8 py-3 bg-[#111] text-white rounded-md font-medium tracking-wide hover:bg-[#333] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#111] cursor-pointer"
            >
              Start the Quiz
            </button>
          </div>
        )}

        {gameState === "quiz" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
            <div className="text-xs font-semibold text-[#888] tracking-widest uppercase mb-4">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-[#111] leading-snug">
              {questions[currentQuestionIndex].question}
            </h2>
            <div className="space-y-4">
              {questions[currentQuestionIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option.type)}
                  className="w-full text-left p-4 border border-[#eaeaea] rounded-lg text-[#555] bg-transparent hover:border-[#888] hover:text-[#111] hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:-translate-y-[1px] transition-all cursor-pointer"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {gameState === "results" && (
          <div className="animate-in fade-in zoom-in duration-700 text-left">
            <p className="text-xs font-semibold text-[#888] tracking-widest uppercase mb-2">Your Personality Is</p>
            <h2 className="text-3xl font-medium mb-4 text-[#111]">{calculateResult().name}</h2>
            <p className="text-[#555] mb-8 leading-relaxed">{calculateResult().description}</p>
            
            <div className="bg-[#fcfcfc] border border-[#eaeaea] p-6 rounded-lg mb-8">
              <p className="text-xs font-semibold text-[#888] tracking-widest uppercase mb-2">Your Coffee Match</p>
              <h3 className="text-xl font-medium mb-2 text-[#111]">{calculateResult().coffee}</h3>
              <p className="text-[#555] leading-relaxed">{calculateResult().coffeeDescription}</p>
            </div>

            <button 
              onClick={handleRetake}
              className="w-full py-3 bg-[#111] text-white rounded-md font-medium tracking-wide hover:bg-[#333] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#111] cursor-pointer"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
