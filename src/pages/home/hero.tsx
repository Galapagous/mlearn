// import Hero1 from "../../assets/image/hero1.jpeg";
// import Hero2 from "../../assets/image/hero2.jpeg";
// import Hero3 from "../../assets/image/hero5.jpeg";
// import ImageView from "../../component/home/imageView";

// const Hero = () => {
//   return (
//     <div className="px-10 p-3 w-full flex items-center justify-center gap-10 h-[80vh]">
//       <div className="flex flex-col items-end gap-2">
//         <h1 className="text-[4rem] font-semibold">Upload.</h1>
//         <h1 className="text-[4rem] font-semibold">Test.</h1>
//         <h1 className="text-[4rem] font-semibold">Grow.</h1>
//         <div className="flex items-center justify-center bg-neutral-100 font-medium text-[2rem]">
//           <p className="p-5">Find your reason to learn</p>
//           <button className="bg-neutral-600 text-white p-5">Go</button>
//         </div>
//       </div>
//       <div className="w-1/2 h-full flex items-center justify-center gap-5">
//         <ImageView
//           image={Hero1}
//           title="Upload"
//           description="upload file in pdf or docx"
//         />
//         <ImageView
//           image={Hero2}
//           title="Quiz"
//           description="take quiz on uploaded doc"
//         />
//         <ImageView
//           image={Hero3}
//           title="Grow"
//           description="Improve your knowledge"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;

// ====== version 2 ======
import Hero1 from "../../assets/image/hero1.jpeg";
import Hero2 from "../../assets/image/hero2.jpeg";
import Hero3 from "../../assets/image/hero5.jpeg";
import ImageView from "../../component/home/imageView";

const Hero = () => {
  return (
    <div className="px-5 sm:px-10 py-10 w-full flex flex-col sm:flex-row items-center justify-center gap-10 sm:h-[80vh]">
      {/* Left Text Section */}
      <div className="flex flex-col items-start sm:items-end gap-4 w-full sm:w-1/2 text-center sm:text-right">
        <h1 className="text-4xl sm:text-[4rem] font-semibold">Upload.</h1>
        <h1 className="text-4xl sm:text-[4rem] font-semibold">Test.</h1>
        <h1 className="text-4xl sm:text-[4rem] font-semibold">Grow.</h1>

        <div className="flex flex-col sm:flex-row items-center justify-center bg-neutral-100 font-medium text-lg sm:text-2xl w-fit rounded-md overflow-hidden mt-4">
          <p className="p-4 sm:p-5">Find your reason to learn</p>
          <button className="bg-neutral-600 text-white p-4 sm:p-5 w-full sm:w-auto">
            Go
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-5">
        <ImageView
          image={Hero1}
          title="Upload"
          description="upload file in pdf or docx"
        />
        <ImageView
          image={Hero2}
          title="Quiz"
          description="take quiz on uploaded doc"
        />
        <ImageView
          image={Hero3}
          title="Grow"
          description="Improve your knowledge"
        />
      </div>
    </div>
  );
};

export default Hero;
