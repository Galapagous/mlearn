// import { useState } from "react";
// import About1 from "../../assets/image/about1.jpeg";
// import About2 from "../../assets/image/about2.jpeg";
// import About3 from "../../assets/image/about4.jpeg";
// import { recipe, teamMembers, userData } from "./data";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import { HiOutlineArrowRight } from "react-icons/hi";

// const About = () => {
//   const [activeHover, setActiveHover] = useState<Number>(0);
//   return (
//     <div className="w-full px-20 py-24">
//       <div className="mt-10">
//         <h1 className="text-[2rem]">Smarter way to learn</h1>
//         <p className="text-xl">That's mlearn</p>
//       </div>
//       <div className="mt-2 flex items-center h-[400px] justify-center">
//         <img
//           className="h-full w-1/5 object-cover"
//           src={About1}
//           alt="about image"
//         />
//         <img
//           className="h-full w-1/5 object-cover"
//           src={About2}
//           alt="about image"
//         />
//         <img
//           className="h-full w-1/5 object-cover"
//           src={About3}
//           alt="about image"
//         />
//       </div>
//       {/* inspiration */}
//       <div className="my-10 px-40">
//         <p className="w-1/3 font-medium text-lg text-neutral-600">
//           "Education is not preparation for life; education is life itself. The
//           process of learning is not a means to an end, but a continuous, living
//           experience. It shapes how we think, how we act, and ultimately, who we
//           become. True education doesn't just fill our minds with facts, but
//           teaches us how to think critically, feel deeply, and contribute
//           meaningfully to the world around us."
//         </p>
//         <h3 className="mt-3 text-2xl">-- dewey dune</h3>
//       </div>
//       <div className="my-10 flex items-start justify-center gap-20 px-20 bg-neutral-700 text-neutral-100 py-10">
//         <div className="w-1/3">
//           <h1 className="text-[2rem]">The Team</h1>
//           <ul className="mt-4 flex flex-col items-start justify-center gap-3">
//             {teamMembers.map((user, index) => {
//               const isCurrent = activeHover === index;
//               return (
//                 <li
//                   key={user}
//                   className={`${
//                     isCurrent
//                       ? "text-blue-300 transform translate-x-2"
//                       : "text-neutral-200 hover:text-neutral-100"
//                   } text-xl lg:text-2xl flex items-center cursor-pointer justify-center lg:justify-start gap-3 transition-all duration-300 ease-in-out group`}
//                   onMouseEnter={() => setActiveHover(index)}
//                   onMouseLeave={() => setActiveHover(0)}
//                 >
//                   {" "}
//                   <span className="relative">
//                     {" "}
//                     {user}{" "}
//                     <span
//                       className={`${
//                         isCurrent ? "w-full" : "w-0 group-hover:w-full"
//                       } absolute bottom-0 left-0 h-0.5 bg-blue-300 transition-all duration-300`}
//                     ></span>{" "}
//                   </span>{" "}
//                   <HiOutlineArrowRight
//                     className={`${
//                       isCurrent
//                         ? "opacity-100 translate-x-0"
//                         : "opacity-0 -translate-x-2"
//                     } transition-all duration-300 text-blue-300`}
//                   />{" "}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         <div className="w-2/3">
//           <img
//             className="w-2/3 h-[600px] rounded-sm object-cover"
//             src={userData[activeHover as number]}
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="my-10 bg-neutral-900 text-neutral-100 p-28">
//         <h1 className="text-[3rem] font-semibold mb-10">
//           Our recipe for success is simple
//         </h1>
//         <div className="flex items-start justify-start gap-10">
//           {recipe?.map((recip) => {
//             return (
//               <div className="w-1/5">
//                 <h1 className="text-[2rem]">{recip.title}</h1>
//                 <p className="text-[1rem]">{recip?.desc}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="relative">
//         <img
//           className="absolute -top-24 w-[600px] h-[500px] object-cover"
//           src={About3}
//           alt=""
//         />
//         <div className="grid grid-cols-3">
//           <div className="col-span-1 col-start-3">
//             <div className="flex items-center gap-3 mb-3 justify-start w-2/3">
//               <img
//                 className="w-14 h-14 rounded-full top/center"
//                 src={About2}
//                 alt="profile"
//               />
//               <h1 className="font-thin text-xl">Musa Muhammed</h1>
//             </div>

//             <p className="text-xl text-neutral-600">
//               Education is the passport to the future, for tomorrow belongs to
//               those who prepare for it today. Without education, you're not
//               going anywhere in this world. It is the foundation upon which
//               individuals build understanding, independence, and strength. A man
//               who stands for nothing will fall for anything — and without the
//               ability to question, to learn, and to grow, society cannot
//               progress. The classroom is not just a space for information, but a
//               battlefield for empowerment, where minds are armed with knowledge
//               that liberates and uplifts entire communities."
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// ====== version 2 ========
import { useState } from "react";
import About1 from "../../assets/image/about1.jpeg";
import About2 from "../../assets/image/about2.jpeg";
import About3 from "../../assets/image/about4.jpeg";
import { recipe, teamMembers, userData } from "./data";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  const [activeHover, setActiveHover] = useState<number>(0);

  return (
    <div className="w-full px-5 sm:px-10 lg:px-20 py-10 sm:py-20">
      {/* Intro */}
      <div className="mt-6 sm:mt-10">
        <h1 className="text-xl sm:text-3xl font-semibold">
          Smarter way to learn
        </h1>
        <p className="text-sm sm:text-xl text-neutral-600">That's mlearn</p>
      </div>

      {/* Hero Images */}
      <div className="mt-5 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:h-[400px]">
        {[About1, About2, About3].map((img, idx) => (
          <img
            key={idx}
            className="h-60 sm:h-full w-full sm:w-1/3 object-cover"
            src={img}
            alt="about"
          />
        ))}
      </div>

      {/* Quote */}
      <div className="my-10 sm:px-10 lg:px-40">
        <p className="sm:w-2/3 text-base sm:text-lg text-neutral-700 font-medium">
          "Education is not preparation for life; education is life itself..."
        </p>
        <h3 className="mt-3 text-lg sm:text-2xl text-neutral-800">
          -- dewey dune
        </h3>
      </div>

      {/* Team Section */}
      <div className="my-10 flex flex-col lg:flex-row gap-10 px-5 sm:px-10 lg:px-20 bg-neutral-700 text-neutral-100 py-10">
        <div className="w-full lg:w-1/3">
          <h1 className="text-xl sm:text-2xl mb-4">The Team</h1>
          <ul className="flex flex-col gap-3">
            {teamMembers.map((user, index) => {
              const isCurrent = activeHover === index;
              return (
                <li
                  key={user}
                  className={`${
                    isCurrent
                      ? "text-blue-300 translate-x-2"
                      : "hover:text-neutral-300"
                  } text-base sm:text-xl flex items-center gap-2 transition-all duration-300 cursor-pointer`}
                  onMouseEnter={() => setActiveHover(index)}
                  onMouseLeave={() => setActiveHover(0)}
                >
                  <span className="relative">
                    {user}
                    <span
                      className={`${
                        isCurrent ? "w-full" : "w-0 group-hover:w-full"
                      } absolute bottom-0 left-0 h-0.5 bg-blue-300 transition-all duration-300`}
                    />
                  </span>
                  <HiOutlineArrowRight
                    className={`${
                      isCurrent ? "opacity-100" : "opacity-0"
                    } transition-all duration-300 text-blue-300`}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full lg:w-2/3">
          <img
            className="w-full sm:w-2/3 h-96 sm:h-[600px] object-cover rounded-md mx-auto"
            src={userData[activeHover]}
            alt="team member"
          />
        </div>
      </div>

      {/* Recipe Section */}
      <div className="my-10 bg-neutral-900 text-white px-5 sm:px-10 lg:px-28 py-10">
        <h1 className="text-xl sm:text-3xl font-bold mb-8">
          Our recipe for success is simple
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {recipe.map((recip, index) => (
            <div key={index}>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                {recip.title}
              </h2>
              <p className="text-sm sm:text-base">{recip.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Testimonial */}
      <div className="relative px-5 sm:px-10 lg:px-20">
        <img
          className="hidden lg:block absolute -top-24 w-[300px] h-[250px] object-cover rounded-md"
          src={About3}
          alt="floating-img"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 lg:col-start-3">
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                src={About2}
                alt="profile"
              />
              <h1 className="font-medium text-base sm:text-xl text-neutral-800">
                Musa Muhammed
              </h1>
            </div>
            <p className="text-sm sm:text-base text-neutral-600">
              Education is the passport to the future... It is the foundation
              upon which individuals build understanding, independence, and
              strength...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
