
// import React from 'react';
// import photo from "../../../assets/Images/mahek.jpeg";

// const AboutHeader = () => {
//   return (
//     <section className="h-auto bg-[#F9E6F0] flex items-center justify-center py-10 px-4">
//       <div className=" max-w-5xl flex flex-col md:flex-row md:justify-between md:h-[18.5rem]">
        
//         <div className="flex flex-col items-center  md:items-start pr-[70px]">
//           <div className="w-[12.1rem] h-[12.1rem] rounded-full overflow-hidden shadow-md border-2 border-[#d49dbb]">
//             <img src={photo} className="w-full h-full object-cover" alt="my-image" />
//           </div>
//           <p className="text-[1.1rem] font-bold leading-7 pt-5 text-center md:text-left">
//             Mahek Shaikh
//           </p>
//           <p className="text-center md:text-left">Web Developer & Tech Enthusiast</p>
//         </div>

//         <div className="mt-8 md:mt-0 md:w-[28rem] text-left">
//           <p className="text-[1.1rem] font-bold mb-2">Bio:</p>
//           <p className="text-[1rem] font-normal leading-6">
//             Hi, I’m a web developer who loves crafting smooth, responsive websites that not only look good but feel great to use.
//              I specialize in building interactive experiences with React and Tailwind CSS — tools I genuinely enjoy working with. 
//              Whether it’s transforming a rough idea into a polished product or diving into a new tech challenge, I’m all in.
//               When I’m not coding, you’ll probably find me exploring the latest in tech or figuring out smarter ways to solve 
//               real-life problems with code.
//           </p>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default AboutHeader;





// import React from 'react';
// import photo from "../../../assets/Images/mahek.jpeg";

// const AboutHeader = () => {
//   return (
//     <section className="bg-gradient-to-br from-[#F9E6F0] to-[#fdfbfb] py-16 px-6 md:px-24">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
//         {/* Profile Image & Title */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#d49dbb]">
//             <img
//               src={photo}
//               className="w-full h-full object-cover"
//               alt="Mahek Shaikh"
//             />
//           </div>
//           <h2 className="mt-6 text-2xl font-bold text-[#2d2d2d]">Mahek Shaikh</h2>
//           <p className="text-[#6b7280] font-medium mt-1">Web Developer & Tech Enthusiast</p>
//         </div>

//         {/* Bio */}
//         <div className="text-[#333] max-w-2xl">
//           <h3 className="text-xl font-semibold mb-4 text-[#2d2d2d]">About Me</h3>
//           <p className="text-base leading-relaxed">
//             Hi, I’m a web developer who loves crafting smooth, responsive websites that not only look great but feel intuitive to use.
//             I specialize in building interactive experiences with <strong>React</strong> and <strong>Tailwind CSS</strong> — tools I genuinely enjoy.
//             <br /><br />
//             Whether transforming rough ideas into polished products or tackling new tech challenges, I’m all in. When I’m not coding,
//             I’m exploring the latest in tech or solving real-world problems through elegant solutions.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHeader;



import React from "react";
import useProfile from "../../../hooks/useProfile";

const AboutHeader = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <section className="py-20 px-6 md:px-24 text-center">
        <p className="text-lg text-gray-600">Loading profile...</p>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="py-20 px-6 md:px-24 text-center">
        <p className="text-red-500 text-lg">Failed to load profile data.</p>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-[#F9E6F0] to-[#fdfbfb] py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image & Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#d49dbb]">
            <img
              src={profile.img_url}
              className="w-full h-full object-cover"
              alt={profile.role || "Profile"}
            />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-[#2d2d2d]">Mahek Shaikh</h2>
          <p className="text-[#6b7280] font-medium mt-1">
            {profile.role || "Web Developer"}
          </p>
        </div>

        {/* Bio */}
        <div className="text-[#333] max-w-2xl">
          <h3 className="text-xl font-semibold mb-4 text-[#2d2d2d]">About Me</h3>
          <p className="text-base leading-relaxed whitespace-pre-line">
            {profile.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
