


import React from "react";

const SplashScreen = ({ splashLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        splashLoading ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{
        background: "linear-gradient(to bottom right, #fce4ec, #e0f7fa)",
      }}
    >
      {/* Animated Dots */}
      <div className="flex gap-3 mb-4">
        <div className="w-4 h-4 bg-[#009379] rounded-full animate-bounce [animation-delay:0.1s]"></div>
        <div className="w-4 h-4 bg-[#ff69b4] rounded-full animate-bounce [animation-delay:0.3s]"></div>
        <div className="w-4 h-4 bg-[#ff9800] rounded-full animate-bounce [animation-delay:0.5s]"></div>
      </div>

      {/* Welcome Text */}
      <p className="text-xl text-[#2D2D2D] font-semibold animate-fade-in">
         Welcome to my portfolio 👋
      </p>
    </div>
  );
};

export default SplashScreen;
