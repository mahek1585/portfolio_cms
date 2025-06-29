import React from "react";

const Logo = ({ skillList }) => {
  console.log("Skill List:", skillList);

  const skills = Array.isArray(skillList?.data)
    ? skillList.data.map((skill) => (
        <img
          key={skill.id}
          src={skill.img_url}
          alt={skill.title}
          className="h-24 w-auto border border-green-400"
        />
      ))
    : <p className="text-red-500">No skills found</p>;

  return (
    <div className="w-full flex justify-center py-14">
      <div className="hidden md:flex w-[80rem] justify-center gap-12 items-center border-y-2 border-[#000000] py-14 px-10">
        {skills}
      </div>

      <div className="md:hidden grid grid-cols-2 gap-y-14 gap-x-14 justify-items-center w-full max-w-xs border-y-2 border-[#000000]">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_92x30dp.png" alt="google" className="h-[2rem] w-auto pt-2" />
        {/* your icons go here */}
      </div>
    </div>
  );
};

export default Logo;












// import React from "react";
// import Behance from "../../../assets/Images/Behance.png";
// import Google from "../../../assets/Images/Google.png";
// import Apple from "../../../assets/Images/Apple.png";
// import Dribble from "../../../assets/Images/Dribbble.png";
// import Awwward from "../../../assets/Images/Awwwards.png";

// const Logo = ({ skillList }) => {



//   // const skills = skillList.map((skill) => (
//   //   <img
//   //     src={skill.img_url}
//   //     key={skill.id}
//   //     alt={skill.title}
//   //     className="h-24 w-auto"
//   //   />
//   // ));
// console.log("Skill List:", skillList);

//   const skills = Array.isArray(skillList)
//   ? skillList.map((skill) => (
//       <img
//         key={skill.id}
//         src={skill.img_url}
//         alt={skill.title}
//         className="h-24 w-auto border border-green-400"
//       />
//     ))
//   : null;

 
//   return (
//     <div className="w-full flex justify-center py-14">
//       <div className="hidden md:flex w-[80rem] justify-center gap-12 items-center border-y-2 border-[#000000] py-14 px-10">
//        {skills}
//         {/* <img src={Google} alt="google" className="h-[2rem] w-auto" />
//         <img src={Behance} alt="behance" className="h-[2rem] w-auto" />
//         <img src={Dribble} alt="dribble" className="h-[2rem] w-auto" />
//         <img src={Apple} alt="apple" className="h-[2rem] w-auto" />
//         <img src={Awwward} alt="awwward" className="h-[2rem] w-auto" /> */}
        
//       </div>

//       <div className="md:hidden grid grid-cols-2 gap-y-14 gap-x-14 justify-items-center w-full max-w-xs border-y-2 border-[#000000]">
//         <img src={Google} alt="google" className="h-[2rem] w-auto pt-2" />
//         <img src={Behance} alt="behance" className="h-[2rem] w-auto pt-2" />
//         <img src={Dribble} alt="dribble" className="h-[2rem] w-auto" />
//         <img src={Apple} alt="apple" className="h-[2rem] w-auto" />
//         <div className="col-span-2 flex justify-center">
//           <img src={Awwward} alt="awwward" className="h-[2rem] w-auto pb-2" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Logo;




// import React from "react";
// import Behance from "../../../assets/Images/Behance.png";
// import Google from "../../../assets/Images/Google.png";
// import Apple from "../../../assets/Images/Apple.png";
// import Dribble from "../../../assets/Images/Dribbble.png";
// import Awwward from "../../../assets/Images/Awwwards.png";

// const Logo = () => {
//   return (
//     <div className="w-full flex justify-center py-14">

//       <div className="hidden md:flex w-[80rem] justify-between items-center border-y-2 border-[#000000] py-14 px-10">

//         <img src={Google} alt="google" className="h-[2rem] w-auto" />
//         <img src={Behance} alt="behance" className="h-[2rem] w-auto" />
//         <img src={Dribble} alt="dribble" className="h-[2rem] w-auto" />
//         <img src={Apple} alt="apple" className="h-[2rem] w-auto" />
//         <img src={Awwward} alt="awwward" className="h-[2rem] w-auto" />
//       </div>

//       <div className="md:hidden grid grid-cols-2 gap-y-14 gap-x-14 justify-items-center w-full max-w-xs border-y-2 border-[#000000]">

//         <img src={Google} alt="google" className="h-[2rem] w-auto pt-2" />
//         <img src={Behance} alt="behance" className="h-[2rem] w-auto pt-2" />
//         <img src={Dribble} alt="dribble" className="h-[2rem] w-auto" />
//         <img src={Apple} alt="apple" className="h-[2rem] w-auto" />
//         <div className="col-span-2 flex justify-center">
//           <img src={Awwward} alt="awwward" className="h-[2rem] w-auto pb-2" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Logo;
