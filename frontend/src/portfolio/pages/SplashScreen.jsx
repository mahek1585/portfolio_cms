// import React from "react";
// import LoadingGif from "../../assets/loading.gif";

// const SplashScreen = ({ splashLoading }) => {
//   return (
//     <div
//       className="grid place-content-center bg-blue-800 text-white z-9999 fixed w-screen h-screen"
//       style={{
//         visibility: splashLoading ? "visible" : "hidden",
//         transition: "opacity 0.5s ease",
//       }}
//     >
//       <img src={LoadingGif} className="w-48" alt="" />
//     </div>
//   );
// };

// export default SplashScreen;




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
