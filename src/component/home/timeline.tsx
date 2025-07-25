// import { CgMoreVertical } from "react-icons/cg";

// const Timeline = ({
//   icon: Icon,
//   title,
//   desc,
// }: {
//   icon: React.ElementType;
//   title: string;
//   desc: string;
// }) => {
//   return (
//     <div className="flex items-start justify-center gap-10">
//       <div className="flex items-center justify-center flex-col gap-3">
//         <div className="p-5 rounded-full bg-white text-black">
//           <Icon />
//         </div>
//         <CgMoreVertical className="text-white" />
//       </div>
//       <div>
//         <h2 className="mb-1 text-2xl">{title}</h2>
//         <p className="text-lg">{desc}</p>
//       </div>
//     </div>
//   );
// };

// export default Timeline;

// ======= version 2 =========
import { CgMoreVertical } from "react-icons/cg";

const Timeline = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-start justify-start gap-4 sm:gap-10">
      {/* Icon + Connector */}
      <div className="flex items-center justify-center flex-col gap-2 sm:gap-3">
        <div className="p-3 sm:p-5 rounded-full bg-white text-black">
          <Icon className="text-xl sm:text-2xl" />
        </div>
        <CgMoreVertical className="text-white text-sm sm:text-base" />
      </div>

      {/* Text */}
      <div>
        <h2 className="mb-1 text-lg sm:text-2xl font-semibold">{title}</h2>
        <p className="text-sm sm:text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default Timeline;
