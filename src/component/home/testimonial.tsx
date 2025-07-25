// import React from "react";

// const TestimonialCard = ({
//   img,
//   name,
//   position,
//   content,
// }: {
//   img: string;
//   name: string;
//   position: string;
//   content: string;
// }) => {
//   return (
//     <div className="w-full h-[400px] bg-neutral-300 rounded-2xl p-10">
//       <p className="mb-3 text-neutral-800 text-lg">{content}</p>
//       <div className="flex items-center justify-start gap-10">
//         <img
//           className="w-20 h-20 rounded-full object-cover"
//           src={img}
//           alt="testimonial user"
//         />
//         <div>
//           <h2 className="text-lg text-neutral-900 font-semibold">{name}</h2>
//           <p className="mt-2 text-neutral-700">{position}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;

// ========= version 2 ===========
import React from "react";

const TestimonialCard = ({
  img,
  name,
  position,
  content,
}: {
  img: string;
  name: string;
  position: string;
  content: string;
}) => {
  return (
    <div className="w-full bg-neutral-300 rounded-2xl p-5 sm:p-8 lg:p-10 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-between">
      <p className="mb-4 text-sm sm:text-base lg:text-lg text-neutral-800">
        {content}
      </p>
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
        <img
          className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
          src={img}
          alt="testimonial user"
        />
        <div>
          <h2 className="text-base sm:text-lg lg:text-xl text-neutral-900 font-semibold">
            {name}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 mt-1">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
