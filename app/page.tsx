import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#f9f7f1]">
      <div className="p-4 text-2xl font-extrabold">단어뽑기</div>
      <div className="flex justify-center w-full gap-4">
        <Link
          href="/junior"
          className="mb-10 rounded-full bg-[#417ed9] px-6 py-3 text-lg font-bold text-white shadow-md transition-all"
        >
          초급 🎲
        </Link>
        <Link
          href="/middle"
          className="mb-10 rounded-full bg-[#6741d9] px-6 py-3 text-lg font-bold text-white shadow-md transition-all"
        >
          중급 🎲
        </Link>
      </div>
    </div>
  );
}
