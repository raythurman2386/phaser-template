"use client";
import dynamic from "next/dynamic";

const GameWithoutSSR = dynamic(() => import("./Game"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <GameWithoutSSR />
    </main>
  );
}
