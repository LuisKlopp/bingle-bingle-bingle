// app/junior/page.tsx
"use client";

import { useState, useRef } from "react";

const WORDS = [
  "사과",
  "빵",
  "김치",
  "콜라",
  "냉면",
  "먹어요",
  "마셔요",
  "사요",
  "꺼내요",
  "줘요",
  "받아요",
  "냉장고",
  "슈퍼",
  "식탁",
  "동생",
  "형",
  "아까",
  "오늘",
  "방금",
  "내일",
  "어제",
];

export default function JuniorPage() {
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [animate, setAnimate] = useState(false);
  const usedWords = useRef<Set<string>>(new Set());

  const handleClick = () => {
    const available = WORDS.filter((w) => !usedWords.current.has(w));
    if (available.length === 0) {
      alert("모든 단어를 다 사용했어요!");
      return;
    }

    const next = available[Math.floor(Math.random() * available.length)];
    usedWords.current.add(next);

    setAnimate(false);
    requestAnimationFrame(() => {
      setCurrentWord(next);
      setAnimate(true);
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#f9f7f1]">
      <button
        onClick={handleClick}
        className="mb-10 rounded-full bg-[#417ed9] px-6 py-3 text-lg font-bold text-white shadow-md transition-all"
      >
        단어 뽑기 🎲
      </button>

      {currentWord && (
        <div
          className={`text-3xl font-bold text-[#3b3b3b] ${
            animate ? "animate-pop" : ""
          }`}
        >
          {currentWord}
        </div>
      )}

      <style jsx>{`
        .animate-pop {
          animation: pop 0.5s ease-out;
        }

        @keyframes pop {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          70% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
