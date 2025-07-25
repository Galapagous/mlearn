// import { Link } from "react-router-dom";
// import { accessList } from "./data";

// const Access = () => {
//   return (
//     <div className="w-full h-[80vh] px-20 py-5 my-10">
//       <h1 className="text-[3rem] font-bold mb-4 text-center">
//         Access to 1000+ resources
//       </h1>

//       <div className="my-2 w-full flex items-center justify-center gap-10">
//         {accessList?.map((listing, index) => (
//           <div key={index}>
//             <Link to="#" className="text-blue-600 hover:underline">
//               {listing?.title}
//             </Link>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4">
//         <ul className="w-full grid grid-cols-5 gap-5">
//           {accessList?.map((list: any, index: number) => (
//             <li
//               key={index}
//               className="col-span-1 group overflow-hidden rounded-lg relative h-[400px]"
//             >
//               {/* Image Wrapper */}
//               <div className="relative w-full h-full overflow-hidden">
//                 <img
//                   src={list.image}
//                   alt={list.title}
//                   className="absolute bottom-0 w-full object-cover h-2/3 group-hover:h-full transition-all duration-500 ease-in-out z-0"
//                 />

//                 {/* Black Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 ease-in-out z-10"></div>

//                 {/* Text Content */}
//                 <div className="absolute bottom-2 left-2 z-20 text-white">
//                   <h2 className="font-semibold text-lg">{list.title}</h2>
//                   <p className="text-sm">{list.duration}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Access;

// ------ version 2 ----------
import { Link } from "react-router-dom";
import { accessList } from "./data";

const Access = () => {
  return (
    <div className="w-full h-auto px-4 sm:px-10 lg:px-20 py-10 my-10">
      <h1 className="text-2xl sm:text-3xl lg:text-[3rem] font-bold mb-6 text-center">
        Access to 1000+ resources
      </h1>

      {/* Link List */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 my-4">
        {accessList?.map((listing, index) => (
          <Link
            to="#"
            key={index}
            className="text-blue-600 hover:underline text-sm sm:text-base"
          >
            {listing?.title}
          </Link>
        ))}
      </div>

      {/* Resource Grid */}
      <div className="mt-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {accessList?.map((list: any, index: number) => (
            <li
              key={index}
              className="group overflow-hidden rounded-lg relative h-[300px] sm:h-[400px] w-full"
            >
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={list.image}
                  alt={list.title}
                  className="absolute bottom-0 w-full object-cover h-2/3 group-hover:h-full transition-all duration-500 ease-in-out z-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 ease-in-out z-10" />

                {/* Text */}
                <div className="absolute bottom-3 left-3 z-20 text-white">
                  <h2 className="font-semibold text-base sm:text-lg">
                    {list.title}
                  </h2>
                  <p className="text-xs sm:text-sm">{list.duration}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Access;
