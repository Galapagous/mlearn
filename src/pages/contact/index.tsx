// import Header from "../../layout/Header";
// import Background from "../../assets/image/contact.jpg";
// import Background2 from "../../assets/image/hero3.jpeg";
// import Background3 from "../../assets/image/hero1.jpeg";
// import { faqs, statistics } from "./data";
// import { TfiPlus } from "react-icons/tfi";
// import { useState } from "react";
// import { HiPlus } from "react-icons/hi";
// import Footer from "../../layout/Footer";

// const Contact = () => {
//   const [activeView, setActiveView] = useState<number | null>(null);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const handleToggle = (index: number) => {
//     setActiveIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <div
//         className="relative h-[300px] sm:h-[500px] bg-cover bg-center w-full"
//         style={{ backgroundImage: `url(${Background})` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
//         <div className="relative z-10 w-full">
//           <Header isDark={true} />
//           <div className="mt-5 sm:mt-10 px-5 sm:px-20 w-full sm:w-1/2 text-white mx-auto text-center">
//             <h1 className="underline text-2xl sm:text-4xl mb-3">Contact Us</h1>
//             <p className="text-base sm:text-xl">
//               At Mlearn, we believe that great learning experiences begin with
//               meaningful conversations. Whether you're a student, educator,
//               institution, or simply curious about what we do — we're here for
//               you.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="px-5 sm:px-20 py-10 flex flex-col sm:flex-row items-start justify-center gap-10 sm:gap-20">
//         <div className="w-full sm:w-[40%]">
//           <h2 className="text-2xl sm:text-[2rem]">We love to hear from you</h2>
//           <p className="text-base sm:text-xl mt-3">
//             Have a question about how Mlearn works? Need help getting started?
//             Want to collaborate or share feedback? Don’t hesitate to reach out.
//             Our team is always ready to support your learning journey.
//           </p>
//         </div>
//         <div className="w-full sm:w-[40%] bg-neutral-300 p-5 sm:p-10 rounded-md">
//           <form className="flex flex-col gap-6 sm:gap-10">
//             <div className="flex flex-col text-sm sm:text-lg gap-2 w-full">
//               <label className="font-semibold">Your Name</label>
//               <input
//                 className="p-3 w-full outline-none"
//                 type="text"
//                 placeholder="John Doe"
//               />
//             </div>
//             <div className="flex flex-col text-sm sm:text-lg gap-2 w-full">
//               <label className="font-semibold">Your Email</label>
//               <input
//                 className="p-3 w-full outline-none"
//                 type="email"
//                 placeholder="John.Doe@example.com"
//               />
//             </div>
//             <div className="flex flex-col text-sm sm:text-lg gap-2 w-full">
//               <label className="font-semibold">Your Message</label>
//               <textarea
//                 className="p-3 w-full outline-none"
//                 placeholder="Make it worthwhile"
//               />
//             </div>
//             <button className="bg-neutral-900 text-neutral-200 px-5 py-3">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Statistics Section */}
//       <div className="px-5 sm:px-20 py-10 sm:py-20 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 sm:gap-20">
//         <div className="w-full sm:w-[40%]">
//           <img
//             className="w-full h-[250px] sm:h-[500px] rounded-md object-cover"
//             src={Background2}
//             alt="Courses illustration"
//           />
//         </div>
//         <div className="w-full sm:w-[40%]">
//           <h1 className="text-2xl sm:text-[3rem]">Courses by their number</h1>
//           <p className="mt-2 text-base sm:text-xl text-neutral-600 mb-3">
//             With courses ranging from science and social science course. You
//             have access to test your knowledge across multiple domains.
//           </p>
//           <div className="flex flex-wrap gap-8">
//             {statistics?.map((stat, index) => (
//               <div key={index} className="w-fit">
//                 <div className="flex items-center text-green-500 text-2xl sm:text-[3rem] font-thin">
//                   <p>{stat.value}</p>
//                   <TfiPlus className="ml-2 w-6 h-6 sm:w-10 sm:h-10" />
//                 </div>
//                 <h1 className="text-base sm:text-xl text-neutral-500">
//                   {stat.title}
//                 </h1>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* FAQs Section */}
//       <div className="px-5 sm:px-20 py-10 flex flex-col sm:flex-row items-start justify-center gap-10 sm:gap-20">
//         <div className="w-full sm:w-[40%]">
//           <h1 className="text-2xl sm:text-[3rem]">Some of your questions</h1>
//           <div className="mt-5 flex flex-col gap-5">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border-b pb-3">
//                 <div
//                   onClick={() => handleToggle(index)}
//                   className={`font-semibold cursor-pointer text-lg sm:text-2xl flex justify-between items-center p-2 transition-all duration-300 ${
//                     activeIndex === index
//                       ? "bg-black text-white"
//                       : "hover:bg-neutral-200 text-neutral-800"
//                   }`}
//                 >
//                   <p>{faq.question}</p>
//                   <HiPlus
//                     className={`transform transition-transform duration-300 ${
//                       activeIndex === index ? "rotate-[225deg]" : ""
//                     }`}
//                   />
//                 </div>
//                 <div
//                   className={`overflow-hidden transition-all duration-500 ease-in-out text-neutral-600 text-sm sm:text-lg px-2 ${
//                     activeIndex === index
//                       ? "max-h-[300px] opacity-100 mt-2"
//                       : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   {faq.answer}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Image beside FAQs */}
//         <div className="w-full sm:w-[40%]">
//           <img
//             className="w-full h-[250px] sm:h-[500px] rounded-md object-cover"
//             src={Background3}
//             alt="FAQ illustration"
//           />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;

// ====== version 2 =========
import Header from "../../layout/Header";
import Background from "../../assets/image/contact.jpg";
import Background2 from "../../assets/image/hero3.jpeg";
import Background3 from "../../assets/image/hero1.jpeg";
import { faqs, statistics } from "./data";
import { TfiPlus } from "react-icons/tfi";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import Footer from "../../layout/Footer";

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-[300px] sm:h-[500px] bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
        <div className="relative z-10 w-full">
          <Header isDark={true} />
          <div className="mt-5 sm:mt-10 px-5 sm:px-20 max-w-3xl text-white mx-auto text-center">
            <h1 className="underline text-2xl sm:text-4xl mb-3">Contact Us</h1>
            <p className="text-base sm:text-xl">
              At Mlearn, we believe that great learning experiences begin with
              meaningful conversations. Whether you're a student, educator,
              institution, or simply curious about what we do — we're here for
              you.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-5 sm:px-20 py-10 flex flex-col sm:flex-row items-start justify-center gap-10 sm:gap-20">
        <div className="w-full sm:w-[40%]">
          <h2 className="text-2xl sm:text-[2rem] font-bold">
            We love to hear from you
          </h2>
          <p className="text-base sm:text-xl mt-3 text-neutral-700">
            Have a question about how Mlearn works? Need help getting started?
            Want to collaborate or share feedback? Don’t hesitate to reach out.
            Our team is always ready to support your learning journey.
          </p>
        </div>
        <div className="w-full sm:w-[40%] bg-neutral-300 p-5 sm:p-10 rounded-md">
          <form className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-2 text-sm sm:text-base">
              <label className="font-semibold">Your Name</label>
              <input
                className="p-3 w-full outline-none rounded"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
              <label className="font-semibold">Your Email</label>
              <input
                className="p-3 w-full outline-none rounded"
                type="email"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
              <label className="font-semibold">Your Message</label>
              <textarea
                className="p-3 w-full outline-none rounded"
                placeholder="Make it worthwhile..."
              />
            </div>
            <button className="bg-neutral-900 text-white px-5 py-3 rounded hover:bg-neutral-800 transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="px-5 sm:px-20 py-10 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 sm:gap-20">
        <div className="w-full sm:w-[40%]">
          <img
            className="w-full h-[250px] sm:h-[500px] object-cover rounded"
            src={Background2}
            alt="Stats Illustration"
          />
        </div>
        <div className="w-full sm:w-[40%]">
          <h1 className="text-2xl sm:text-[2.5rem] font-semibold">
            Courses by their number
          </h1>
          <p className="mt-2 text-base sm:text-xl text-neutral-600 mb-4">
            With courses ranging from science to social sciences, you can test
            your knowledge across multiple domains.
          </p>
          <div className="flex flex-wrap gap-6">
            {statistics.map((stat, idx) => (
              <div key={idx} className="w-fit">
                <div className="flex items-center text-green-500 text-2xl sm:text-[3rem] font-thin">
                  {stat.value}
                  <TfiPlus className="ml-2 w-6 h-6 sm:w-10 sm:h-10" />
                </div>
                <h1 className="text-base sm:text-lg text-neutral-500">
                  {stat.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="px-5 sm:px-20 py-10 flex flex-col sm:flex-row items-start justify-center gap-10 sm:gap-20">
        <div className="w-full sm:w-[40%]">
          <h1 className="text-2xl sm:text-[2.5rem] font-semibold mb-5">
            Some of your questions
          </h1>
          <div className="flex flex-col gap-5">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-3">
                <div
                  onClick={() => handleToggle(index)}
                  className={`font-semibold cursor-pointer text-lg sm:text-xl flex justify-between items-center p-2 transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-black text-white"
                      : "hover:bg-neutral-200 text-neutral-800"
                  }`}
                >
                  <p>{faq.question}</p>
                  <HiPlus
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-[225deg]" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out text-neutral-600 text-sm sm:text-base px-2 ${
                    activeIndex === index
                      ? "max-h-[300px] opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Image */}
        <div className="w-full sm:w-[40%]">
          <img
            className="w-full h-[250px] sm:h-[500px] object-cover rounded"
            src={Background3}
            alt="FAQ"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
