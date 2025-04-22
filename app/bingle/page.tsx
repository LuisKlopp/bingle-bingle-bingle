"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Wheel = dynamic(
  () => import("react-custom-roulette").then((mod) => mod.Wheel),
  {
    ssr: false,
  }
);

const words = [
  { option: "우정" },
  { option: "소망" },
  { option: "사랑" },
  { option: "행복" },
  { option: "기쁨" },
  { option: "희망" },
  { option: "평화" },
  { option: "믿음" },
  { option: "용기" },
  { option: "감사" },
  { option: "온기" },
  { option: "조화" },
  { option: "배려" },
  { option: "설렘" },
];

export default function Bingle() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * words.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="w-full h-[100dvh] flex flex-col justify-center items-center">
      <p className="text-xl font-bold mb-4">단어로 문장 만들기!</p>

      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={words}
        backgroundColors={[
          "#b21414",
          "#197ea9",
          "#20b47b",
          "#a29e1c",
          "#4e2bae",
        ]}
        fontSize={22}
        textColors={["#ffffff"]}
        onStopSpinning={() => setMustSpin(false)}
      />

      <button onClick={handleSpinClick} className="button-base custom-button">
        돌려 돌려 돌림판
      </button>
    </div>
  );
}
