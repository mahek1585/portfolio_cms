// import React from "react";

// const LatestWork = ({ workList }) => {
//   return (
//     <section className=" min-h-[455px] px-4">
//       <h2 className="font-semibold text-[2rem] leading-12 text-center">
//         What I've Been Building
//       </h2>

//       <div className="flex flex-col gap-10 pt-[3.8rem] sm:flex-row sm:flex-wrap sm:justify-center lg:justify-between">
//         {workList.map((item, index) => (
//           <div key={index} className="w-[19rem] h-[25.4rem] mx-auto">
//             <img
//               src={item.img_url}
//               alt={item.title}
//               className="h-[315px] mx-auto w-full object-contain rounded-lg bg-slate-100 p-2"
//             />
//             <p className="text-[1.3rem] font-semibold pt-6 leading-8 text-center">
//               {item.title}
//             </p>
//             <a
//               href={item.link}
//               target="_blank"
//               className="text-[1.1rem] leading-[1.7rem] pt-2.5 text-center block text-blue-600 no-underline hover:underline"
//             >
//               See Project →
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LatestWork;



// import React from "react";

// const LatestWork = ({ workList = [] }) => {
//   return (
//     <section className=" min-h-[455px] px-4">
//       <h2 className="font-semibold text-[2rem] leading-12 text-center">
//         What I've Been Building
//       </h2>

//       <div className="flex flex-col gap-10 pt-[3.8rem] sm:flex-row sm:flex-wrap sm:justify-center lg:justify-between">
//         {workList.map((item, index) => (
//           <div key={index} className="w-[19rem] h-[25.4rem] mx-auto">
//             <img
//               src={item.img_url}
//               alt={item.title}
//               className="h-[315px] mx-auto w-full object-contain rounded-lg bg-slate-100 p-2"
//             />
//             <p className="text-[1.3rem] font-semibold pt-6 leading-8 text-center">
//               {item.title}
//             </p>
//             <a
//               href={item.link}
//               target="_blank"
//               className="text-[1.1rem] leading-[1.7rem] pt-2.5 text-center block text-blue-600 no-underline hover:underline"
//             >
//              {item.reponame}
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LatestWork;






import React from "react";

const LatestWork = ({ workList = [] }) => {
  return (
    <section className="py-20 px-6 md:px-24 bg-gradient-to-b from-[#fdfbfb] to-[#f3f4f6]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D] mb-14">
        What I've Been Building
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {workList.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 p-4 flex flex-col"
          >
            <img
              src={item.img_url}
              alt={item.title}
              className="h-52 w-full object-contain rounded-lg bg-gray-50 mb-6"
            />
            <p className="text-xl font-semibold text-center text-[#2D2D2D]">
              {item.title}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-[#009379] font-medium hover:underline"
            >
              {item.reponame || "View Project →"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
