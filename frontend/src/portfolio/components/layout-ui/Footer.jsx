// import React from "react";

// import vector1 from "../../../assets/Images/vector1.png";
// import vector2 from "../../../assets/Images/vector2.png";
// import vector3 from "../../../assets/Images/Vector3.png";
// import vector4 from "../../../assets/Images/vector4.png";
// import Be from "../../../assets/Images/Behance.png";
// import useQueries from "../../../hooks/useQueries";

// const Footer = () => {
//   const { submitQuery, loading } = useQueries();

//   const onSubmitHandler = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target); // e.target refers to the form

//     // Convert FormData to a plain object
//     const data = Object.fromEntries(formData.entries());

//     submitQuery(data);
//   };

//   return (
//     <footer className="px-14 pb-2 ">
      
//       <div
//         id="contact"
//         className=" flex flex-col md:flex-row gap-20 md:gap-[15rem] justify-between border-t border-t-black pt-16"
//       >
//         <div className="">
//           <h2 className="font-semibold text-3xl mb-10">Let’s work together</h2>
//           <p className="mb-14">
//             I'm always excited to collaborate on interesting projects or
//             internships. Whether it's web development or design, feel free to
//             reach out and let's build something great together.
//           </p>
//           <div className="flex gap-4">
//             <img
//               src={vector1}
//               className="w-9 h-9 cursor-pointer"
//               alt="vector1"
//             />
//             <img
//               src={vector2}
//               className="w-9 h-9 cursor-pointer"
//               alt="vector2"
//             />
//             <img
//               src={vector3}
//               className="w-9 h-9 cursor-pointer"
//               alt="vector3"
//             />
//             <img
//               src={vector4}
//               className="w-9 h-9 cursor-pointer"
//               alt="vector4"
//             />
//             <img src={Be} className="w-9 h-9 cursor-pointer" alt="vector5" />
//           </div>
//         </div>
//         <form
//           className="flex flex-1 items-start md:min-w-[32rem]"
//           onSubmit={onSubmitHandler}
//         >
//           <div className="flex flex-1 flex-col gap-5 ">
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Type your message here"
//               rows={8}
//               className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
//               required
//               id=""
//             ></textarea>
//             <button
//               disabled={loading}
//               type="submit"
//               className="font-semibold p-6 min-w-[13rem] self-start bg-black disabled:bg-gray-400 disabled:text-gray-100 text-white cursor-pointer disabled:cursor-not-allowed"
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import useQueries from "../../../hooks/useQueries";
import useLinks from "../../../hooks/useLinks";

const Footer = () => {
  const { submitQuery, loading } = useQueries();
  const { links } = useLinks();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    submitQuery(data);
  };

  return (
    <footer className="bg-gradient-to-t from-[#fefefe] to-[#f2f4f7] border-t border-gray-300 px-6 md:px-24 pt-16 pb-6">
      <div className="flex flex-col md:flex-row justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-[#2D2D2D]">
            Let’s work together
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            I'm always excited to collaborate on meaningful projects or internships.
            Whether it's frontend development or UI/UX design, feel free to reach out.
          </p>

          {/* Dynamic Social Icons */}
          <div className="flex gap-4 mt-2">
            {Array.isArray(links) && links.length > 0 &&
              links.map((item) => (
                <a
                  href={item.link}
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.title}
                  title={item.title}
                >
                  <img
                    src={item.img_url}
                    alt={item.title}
                    className="w-9 h-9 hover:scale-110 transition-all duration-200"
                  />
                </a>
              ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex-1 max-w-xl w-full bg-white rounded-xl shadow-lg p-6 border border-gray-200"
        >
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-[#F3F3F3] py-4 px-6 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#009379]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-[#F3F3F3] py-4 px-6 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#009379]"
            />
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows={6}
              required
              className="bg-[#F3F3F3] py-4 px-6 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#009379]"
            ></textarea>
            <button
              disabled={loading}
              type="submit"
              className="bg-[#009379] hover:bg-[#007c64] text-white font-semibold py-3 px-6 rounded-md transition disabled:bg-gray-400 disabled:cursor-not-allowed w-fit"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
