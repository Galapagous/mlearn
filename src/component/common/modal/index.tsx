import React, { ReactNode } from "react";

interface ModalProps {
  title?: string;
  message?: string;
  clickOutsideToClose?: boolean;
  children?: ReactNode;
  open: boolean;
  handleClose: () => void;
  width?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";
  showClose?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  clickOutsideToClose = true,
  children,
  open,
  handleClose,
  width = "md",
  showClose = true,
}) => {
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (clickOutsideToClose && e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!open) return null;

  const widthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    full: "max-w-[95vw]", // 95% of viewport width
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-200"
      onClick={handleOutsideClick}
    >
      <div
        className={`
          ${widthClasses[width]} 
          w-full m-4 
          bg-white 
          rounded-lg 
          shadow-lg 
          border border-gray-200 
          max-h-[90vh] 
          overflow-y-auto 
          transform 
          transition-all 
          duration-200 
          scale-100
        `}
      >
        {/* Header */}
        {title && (
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">{title}</h2>
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-4 text-gray-700">
          {message && <p className="mb-4 text-sm">{message}</p>}
          {children}
        </div>

        {/* Footer */}
        {showClose ? (
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-2">
            <button
              onClick={handleClose}
              className="
              px-4 py-2 
              bg-gray-100 
              text-gray-700 
              rounded-md 
              font-medium 
              text-sm 
              hover:bg-gray-200 
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-500 
              focus:ring-offset-2 
              transition-colors 
              duration-150
            "
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
