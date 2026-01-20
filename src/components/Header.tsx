"use client";

import { ceremonyInfo } from "@/data/nominees";

export default function Header() {
  return (
    <header className="relative py-8 px-4 text-center sparkle-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 text-6xl trophy-float">🏆</div>
        <div className="absolute top-8 right-8 text-4xl trophy-float" style={{ animationDelay: "0.5s" }}>✨</div>
        <div className="absolute bottom-4 left-1/4 text-3xl trophy-float" style={{ animationDelay: "1s" }}>⭐</div>
        <div className="absolute bottom-8 right-1/4 text-5xl trophy-float" style={{ animationDelay: "1.5s" }}>🎬</div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="text-6xl mb-4 trophy-float inline-block">🏆</div>
        <h1 className="text-3xl font-black shimmer-text mb-2">
          {ceremonyInfo.name}
        </h1>
        <p className="text-[#FFD700] text-lg font-semibold mb-4">
          {ceremonyInfo.date}
        </p>
        
        <div className="flex flex-col gap-2 text-sm text-gray-300">
          <p>
            <span className="text-[#B8860B]">Hosted by</span>{" "}
            <span className="text-white font-medium">{ceremonyInfo.host}</span>
          </p>
          <p>
            <span className="text-[#B8860B]">Venue:</span>{" "}
            <span className="text-white">{ceremonyInfo.venue}</span>
          </p>
        </div>

        {/* Countdown badge */}
        <div className="mt-6 inline-block gradient-border p-[2px] rounded-full">
          <div className="bg-[#1a1a1a] px-4 py-2 rounded-full">
            <p className="text-xs text-gray-400">
              Full nominations announced
            </p>
            <p className="text-[#FFD700] font-bold">
              {ceremonyInfo.nominationsAnnouncement}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
