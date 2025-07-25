// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="bg-neutral-200 px-10 py-20">
//       <div className="flex items-start justify-between">
//         <h1>M-Learn</h1>
//         <div>
//           <ul>
//             <li>
//               <Link to="#">Home</Link>
//             </li>
//             <li>
//               <Link to="#">About</Link>
//             </li>
//             <li>
//               <Link to="#">Contact</Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="">Join our Newsletter</h2>
//           <div className="flex items-center justify-center">
//             <input
//               className="p-2 outline-none"
//               placeholder="example.com"
//               type="text"
//             />
//             <button className="p-2 bg-neutral-600 text-white">Join</button>
//           </div>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default Footer;

// ====== version 2 ==========

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-neutral-200 px-5 sm:px-10 py-10">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-xl font-bold text-neutral-800 mb-2">M-Learn</h1>
          <p className="text-sm text-neutral-600 max-w-xs">
            Unlock smarter learning with AI-generated quizzes tailored to your
            academic materials.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold text-neutral-800 mb-2">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-neutral-700">
            <li>
              <Link to="#" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full sm:w-auto">
          <h2 className="text-lg font-semibold text-neutral-800 mb-2">
            Join our Newsletter
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
            <input
              className="p-2 w-full sm:w-60 rounded-md border border-neutral-400 outline-none text-sm"
              placeholder="you@example.com"
              type="text"
            />
            <button className="p-2 px-4 bg-neutral-600 text-white rounded-md text-sm">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} M-Learn. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
