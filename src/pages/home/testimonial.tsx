// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import TestimonialCard from "../../component/home/testimonial";
// import { testimonials } from "./data";

// const Testimonial = () => {
//   return (
//     <div className="w-full my-10">
//       <h1 className="text-[2rem] text-center font-bold">
//         What our customers have to say
//       </h1>

//       <div className="mt-10 px-10">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {testimonials.map((test, index) => (
//             <SwiperSlide key={index}>
//               <div className="w-full px-10">
//                 <TestimonialCard {...test} />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

// ======== version 2 ==========
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialCard from "../../component/home/testimonial";
import { testimonials } from "./data";

const Testimonial = () => {
  return (
    <div className="w-full my-10">
      <h1 className="text-xl sm:text-2xl lg:text-[2rem] text-center font-bold px-4">
        What our customers have to say
      </h1>

      <div className="mt-6 sm:mt-10 px-4 sm:px-6 lg:px-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((test, index) => (
            <SwiperSlide key={index}>
              <div className="w-full">
                <TestimonialCard {...test} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
