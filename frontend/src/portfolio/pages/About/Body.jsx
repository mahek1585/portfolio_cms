// import React from 'react'

// const Body = () => {
//   return (
//     <section className="-mt-12 py-28 px-4 sm:px-6 md:px-12 lg:px-24">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="font-medium text-2xl leading-9 text-[#2B2B2B] pb-16">
//             I’m a passionate web developer with a creative eye and a strong foundation in front-end technologies. 
//             I believe great design and functionality go hand-in-hand to create memorable digital experiences.
//         </h2>

//         <p className="font-semibold text-[1rem] leading-6 text-[#F6DCE9] bg-[#009379] px-2 py-1 inline-block mb-4">
//           Design with logic. Code with creativity.
//         </p>

//         <p className="text-[1rem] leading-6 text-[#2B2B2B] mb-4">
//           I specialize in crafting responsive websites using React, Tailwind CSS, JavaScript, and modern tools. 
//           My goal is to build user-friendly interfaces that not only look good but also function smoothly across all devices.
//         </p>

//         <p className="font-semibold text-[1rem] leading-6 text-[#F6DCE9] bg-[#009379] px-2 py-1 inline-block mb-4">
//           Every project is an opportunity to learn and innovate.
//         </p>

//         <p className="text-[1rem] leading-6 text-[#2B2B2B]">
//           I’m open to freelance projects, internships, and collaborations. Whether it’s a portfolio website, a startup idea, or a
//            redesign, I’m excited to contribute with passion and precision.
//           <br />
//            Let’s connect and bring your ideas to life!
//         </p>
//       </div>
//     </section>
//   )
// }

// export default Body





import React from 'react';

const Body = () => {
  return (
    <section className="-mt-10 py-24 px-6 md:px-24 bg-gradient-to-b from-[#fdfdfd] to-[#f3f4f6]">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2B2B2B] leading-relaxed mb-10">
          I’m a passionate web developer with a creative eye and a strong foundation in front-end technologies. 
          I believe great design and functionality go hand-in-hand to create memorable digital experiences.
        </h2>

        <div className="mb-6">
          <span className="text-white bg-[#009379] px-4 py-2 text-sm font-medium rounded-full inline-block shadow-sm">
            Design with logic. Code with creativity.
          </span>
        </div>

        <p className="text-base md:text-lg text-[#2B2B2B] leading-7 mb-6">
          I specialize in crafting responsive websites using <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, and modern tools. 
          My goal is to build user-friendly interfaces that not only look good but also function smoothly across all devices.
        </p>

        <div className="mb-6">
          <span className="text-white bg-[#009379] px-4 py-2 text-sm font-medium rounded-full inline-block shadow-sm">
            Every project is an opportunity to learn and innovate.
          </span>
        </div>

        <p className="text-base md:text-lg text-[#2B2B2B] leading-7">
          I’m open to <strong>freelance projects</strong>, <strong>internships</strong>, and <strong>collaborations</strong>. Whether it’s a portfolio website, a startup idea, or a
          redesign — I’m excited to contribute with passion and precision.
          <br /><br />
          <span className="font-semibold">Let’s connect and bring your ideas to life!</span>
        </p>
      </div>
    </section>
  );
};

export default Body;
