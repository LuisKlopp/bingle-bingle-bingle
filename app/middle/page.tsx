// app/junior/page.tsx
"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const WORDS = [
  // 장소 및 상황
  "건물",
  "운동회",
  "병원",
  "시장",
  "집",
  "해외",
  "길거리",
  "시골",
  "자동차",
  "텔레비전",
  "미용실",
  "데이트",
  "시험",
  "화장실",
  "침대",

  // 시간 표현
  "그리고",
  "오랜만에",
  "갑작스럽게",
  "어쩌다",
  "이따가",
  "아까",
  "오늘",
  "방금",
  "내일",
  "어제",
  "저번주",
  "아침",
  "점심",

  // 개체 및 사물
  "강아지",
  "날씨",
  "감기",
  "휴가",
  "노래",
  "신문",
  "핸드폰",
  "유튜브",
  "카카오톡",
  "옷",
  "가방",
  "사물함",

  // 동사 / 형용사
  "사다",
  "가지다",
  "주다",
  "받다",
  "팔다",
  "없다",
  "잡다",
  "만들다",
  "발견하다",
  "비싸다",
  "쓰다",
  "모르다",
  "좋다",
  "오다",
  "보다",

  // 기타 표현
  "많이",
];
export default function MiddlePage() {
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
      <Link href="/" className="absolute left-5 top-5 font-bold text-[#525252]">
        뒤로가기
      </Link>
      <button
        onClick={handleClick}
        className="mb-10 button-base rounded-full bg-[#6741d9] px-6 py-3 text-lg font-bold text-white shadow-md transition-all"
      >
        중급 단어 뽑기 🎲
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
