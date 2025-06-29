// import React from "react";
// import Heroimage from "../../../assets/Images/hero-image.jpg";
// import data from "../../../utils/data.json";
//  import { motion } from "framer-motion";

// const HeroSection = () => {
//   const { headline, lead, title } = data.home.hero;

//   return (
//     <section className="py-12 md:py-24 flex flex-col md:flex-row gap-16 md:gap-7 justify-center items-center ">
//       <motion.div
//         className="text-center md:text-left flex-1 max-w-[34rem] hero-content flex flex-col gap-5 md:gap-10"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <motion.p
//           className="title text-xl font-semibold"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           {title}
//         </motion.p>

//         <motion.h1
//           className="font-semibold text-[2.5rem] md:text-[5rem] leading-[100%] md:leading-[5rem]"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           {headline}
//         </motion.h1>

//         <motion.p
//           className="lead"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//         >
//           {lead}
//         </motion.p>
//       </motion.div>

//       <motion.div
//         className="hero-image"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7, delay: 0.5 }}
//       >
//         <img src={Heroimage} alt="Hero" className="w-[30rem]" />
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;




import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../../assets/Images/hero-image2.jpg";
import data from "../../../utils/data.json";

const HeroSection = () => {
  const { title, headline, lead } = data.home.hero;

  return (
    <section className="py-16 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
      {/* Left Text Content */}
      <motion.div
        className="max-w-xl text-center md:text-left flex flex-col gap-5"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#009379] text-base md:text-lg font-semibold tracking-wider uppercase">
          {title}
        </p>

       <h1 className="font-poppins font-extrabold text-[2.5rem] md:text-[5rem] leading-tight tracking-wide bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-400 text-transparent bg-clip-text">
          Hey, I'm Mahek
      </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {lead}
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="shadow-2xl rounded-xl overflow-hidden"
      >
        <img
          src={HeroImage}
          alt="Web developer"
          className="w-[20rem] md:w-[28rem] object-cover rounded-xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
