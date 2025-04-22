// app/junior/page.tsx
"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const WORDS = [
  // 음식
  "사과",
  "빵",
  "김치",
  "콜라",
  "냉면",
  "케이크",
  "과자",
  "커피",
  "만두",
  "떡볶이",
  "수박",

  // 동사
  "먹어요",
  "포장해요",
  "사요",
  "꺼내요",
  "줘요",
  "받아요",
  "버려요",
  "맛있어요",

  // 장소 / 사람
  "냉장고",
  "마트",
  "시장",
  "식탁",
  "바닥",
  "상자",
  "동생",
  "형",
  "할머니",
  "이웃",
  "친구",
  "선생님",

  // 시간
  "아까",
  "오늘",
  "방금",
  "내일",
  "어제",
  "아침",
  "점심",
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
    <div className="flex h-[100dvh] flex-col items-center justify-center bg-[#f9f7f1]">
      <Link href="/" className="absolute left-5 top-5 font-bold text-[#525252]">
        뒤로가기
      </Link>
      <div className="w-full flex justify-center gap-8 flex-col items-center">
        {currentWord && (
          <div
            className={`text-[52px] font-bold text-[#3b3b3b] ${
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

        <button
          onClick={handleClick}
          className="button-base rounded-full bg-[#417ed9] px-6 py-3 text-lg font-bold text-white shadow-md transition-all"
        >
          초급 단어 뽑기 🎲
        </button>
      </div>
    </div>
  );
}
