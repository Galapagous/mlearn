import React from "react";

interface IOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface ISelect {
  name?: string;
  errors?: any;
  register?: any;
  placeholder?: string;
  label?: string;
  options: IOption[];
  multiple?: boolean;
  size?: number;
}

const Select = ({
  name,
  errors,
  register,
  placeholder,
  label,
  options,
  multiple = false,
  size,
}: ISelect) => {
  const fieldError = errors?.[name as string];

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
        <select
          id={name}
          multiple={multiple}
          size={size}
          {...register(name)}
          className={`
            w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 appearance-none
            ${
              fieldError
                ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
            }
            focus:outline-none bg-white text-gray-900
            ${multiple ? "pr-4" : "pr-12"}
            ${placeholder && !multiple ? "text-gray-500" : ""}
          `}
          aria-invalid={fieldError ? "true" : "false"}
        >
          {placeholder && !multiple && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options?.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className="text-gray-900"
            >
              {option.label}
            </option>
          ))}
        </select>

        {!multiple && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
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

export default Select;
