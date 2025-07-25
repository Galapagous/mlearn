import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface IInput {
  name?: string;
  errors?: any;
  register?: any;
  placeholder?: string;
  label?: string;
  type: string;
}

const Input = ({
  name,
  errors,
  register,
  placeholder,
  label,
  type,
}: IInput) => {
  const fieldError = errors?.[name as string];
  const isPasswordType = type === "password" || type === "confirmPassword";

  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPasswordType && showPassword ? "text" : type;

  return (
    <div className="space-y-2 relative">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          type={inputType}
          placeholder={placeholder}
          {...register(name)}
          className={`
            w-full px-4 py-3 rounded-lg border-2 pr-12 transition-all duration-200
            ${
              fieldError
                ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
            }
            focus:outline-none bg-white text-gray-900 placeholder-gray-500
          `}
          aria-invalid={fieldError ? "true" : "false"}
        />

        {isPasswordType && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
          </button>
        )}
      </div>

      {fieldError && (
        <p className="text-sm text-red-600 font-medium flex items-center gap-2">
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {fieldError.message}
        </p>
      )}
    </div>
  );
};

export default Input;
