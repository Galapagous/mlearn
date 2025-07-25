// import { BiShare, BiUpload } from "react-icons/bi";
// import Timeline from "../../component/home/timeline";
// import { MdQuiz } from "react-icons/md";
// import Video from "../../assets/video/sample.mp4";

// const Benefit = () => {
//   return (
//     <div className="w-full my-10 py-10 px-20 bg-neutral-200">
//       <div className="w-full flex items-start justify-between">
//         <h1 className="text-[3rem] font-semibold w-[35%]">
//           Get the best question tailored to your academic papers
//         </h1>
//         <p className="w-[50%] text-[1.5rem]">
//           Modern learning model and AI tool tailored to bring out the best
//           verion of you. This isnt just learning hard, it is learning the smart
//           way.
//         </p>
//       </div>
//       <div className="flex items-center justify-between mt-10">
//         <div className="w-1/3 flex items-start justify-center flex-col gap-10">
//           <Timeline
//             title="Upload"
//             desc="upload any academic papers"
//             icon={BiUpload}
//           />
//           <Timeline title="Quiz" desc="take quiz on papers" icon={MdQuiz} />
//           <Timeline
//             title="Grow"
//             desc="Share with other colleagues"
//             icon={BiShare}
//           />
//         </div>
//         <div className="w-2/3">
//           <video autoPlay muted loop className="w-full h-[600px] rounded-md">
//             <source src={Video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Benefit;

// ------- version 2 ---------
import { BiShare, BiUpload } from "react-icons/bi";
import Timeline from "../../component/home/timeline";
import { MdQuiz } from "react-icons/md";
import Video from "../../assets/video/sample.mp4";

const Benefit = () => {
  return (
    <div className="w-full my-10 py-10 px-5 sm:px-10 lg:px-20 bg-neutral-200">
      {/* Heading and Description */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
        <h1 className="text-2xl sm:text-3xl lg:text-[3rem] font-semibold sm:w-[45%] w-full">
          Get the best question tailored to your academic papers
        </h1>
        <p className="text-base sm:text-lg lg:text-[1.5rem] sm:w-[50%] w-full">
          Modern learning model and AI tool tailored to bring out the best
          version of you. This isn't just learning hard, it's learning the smart
          way.
        </p>
      </div>

      {/* Timeline + Video */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-10">
        <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col gap-10">
          <Timeline
            title="Upload"
            desc="Upload any academic papers"
            icon={BiUpload}
          />
          <Timeline title="Quiz" desc="Take quiz on papers" icon={MdQuiz} />
          <Timeline
            title="Grow"
            desc="Share with other colleagues"
            icon={BiShare}
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/3">
          <video
            autoPlay
            muted
            loop
            className="w-full h-[250px] sm:h-[400px] lg:h-[600px] rounded-md object-cover"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
