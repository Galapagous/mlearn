// import { Link } from "react-router-dom";
// import type { ILink } from "../../types/home";
// import { navigationLinks } from "./data";
// import { useContext } from "react";
// import { AppContext } from "../../context/AppContext";
// import { BiUser } from "react-icons/bi";

// const Header = ({ isDark }: { isDark?: boolean }) => {
//   const isLoggedIn = false;
//   const { userInfo, loginStatus } = useContext(AppContext);
//   return (
//     <div
//       className={`px-10 grid grid-cols-5 py-5 ${isDark ? "text-white" : ""}`}
//     >
//       <div className="col-span-1 mx-auto">
//         <h1 className="font-bold">M-Learn</h1>
//       </div>
//       <nav className="col-span-3 w-2/3 mx-auto">
//         <ul className="flex items-center justify-between">
//           {navigationLinks?.map((link: ILink, index: number) => {
//             return (
//               <div
//                 className="w-full flex items-center justify-evenly"
//                 key={index}
//               >
//                 <Link
//                   className={`font-semibold ${
//                     isDark ? "text-neutral-300" : "text-neutral-600"
//                   }`}
//                   to={link.link}
//                 >
//                   {link.title}
//                 </Link>
//               </div>
//             );
//           })}
//         </ul>
//       </nav>
//       <div className="col-span-1 mx-auto">
//         {loginStatus ? (
//           <div className="flex items-center gap-2">
//             <BiUser />
//             <Link className="" to="/dashboard">
//               {userInfo?.fullName}
//             </Link>
//           </div>
//         ) : (
//           <Link to="/signin">Sign in</Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

// ------ version 2 --------
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { ILink } from "../../types/home";
import { navigationLinks } from "./data";
import { AppContext } from "../../context/AppContext";
import { BiUser } from "react-icons/bi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = ({ isDark }: { isDark?: boolean }) => {
  const { userInfo, loginStatus } = useContext(AppContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  return (
    <header
      className={`px-4 sm:px-6 lg:px-10 py-4 ${
        isDark ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-lg">M-Learn</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navigationLinks.map((link: ILink, index: number) => (
            <Link
              key={index}
              to={link.link}
              className={`font-semibold ${
                isDark ? "text-neutral-300" : "text-neutral-600"
              } hover:text-blue-500`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Auth Section */}
        <div className="hidden md:flex items-center gap-2">
          {loginStatus ? (
            <Link to="/dashboard" className="flex items-center gap-2">
              <BiUser />
              {userInfo?.fullName}
            </Link>
          ) : (
            <Link to="/signin" className="font-medium hover:text-blue-500">
              Sign in
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        style={{
          maxHeight: isMobileMenuOpen
            ? `${mobileMenuRef.current?.scrollHeight}px`
            : "0px",
        }}
        className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
        `}
      >
        <div className="mt-4 space-y-4 px-1">
          {navigationLinks.map((link: ILink, index: number) => (
            <Link
              key={index}
              to={link.link}
              className={`block font-semibold ${
                isDark ? "text-neutral-300" : "text-neutral-700"
              } hover:text-blue-500`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          <div className="mt-2 border-t pt-4">
            {loginStatus ? (
              <Link to="/dashboard" className="flex items-center gap-2">
                <BiUser />
                {userInfo?.fullName}
              </Link>
            ) : (
              <Link to="/signin" className="font-medium hover:text-blue-500">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
