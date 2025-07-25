import React, { useState } from "react";

const ImageView = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`
        w-full max-w-[300px] h-64 sm:h-80 md:h-96 lg:h-full 
        relative rounded-xl overflow-hidden transition-all ease-in-out duration-300 
        cursor-pointer group
        ${isActive ? "sm:w-[600px]" : "sm:w-[300px]"}
        md:hover:w-[600px] md:w-[300px]
      `}
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <img className="h-full w-full object-cover" src={image} alt="hero" />

      {/* Overlay */}
      <div
        className={`
        absolute inset-0 bg-black transition-all duration-300 ease-in-out
        ${isActive ? "bg-opacity-60" : "bg-opacity-0"}
        md:bg-opacity-0 md:group-hover:bg-opacity-60
      `}
      />

      {/* Text content */}
      <div
        className={`
        absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out
        font-semibold text-white
        ${isActive ? "right-4 scale-110" : "right-2 sm:right-0"}
        md:right-0 md:group-hover:scale-110 md:group-hover:right-4
      `}
      >
        <h1
          className={`
          transition-all duration-300 ease-in-out
          ${isActive ? "text-2xl sm:text-4xl mb-2" : "text-xl sm:text-3xl"}
          md:text-3xl md:group-hover:text-4xl md:group-hover:mb-2
        `}
        >
          {title}
        </h1>
        <div className="flex items-center justify-center">
          <p
            className={`
            transition-all duration-300 ease-in-out
            ${
              isActive
                ? "text-base sm:text-lg opacity-100"
                : "text-sm opacity-70"
            }
            md:opacity-70 md:group-hover:text-lg md:group-hover:opacity-100
          `}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
