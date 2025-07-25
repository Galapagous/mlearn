interface ITextarea {
  name?: string;
  errors?: any;
  register?: any;
  placeholder?: string;
  label?: string;
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const Textarea = ({
  name,
  errors,
  register,
  placeholder,
  label,
  rows = 4,
  maxLength,
  showCharCount = false,
  resize = "vertical",
}: ITextarea) => {
  const fieldError = errors?.[name as string];
  const registerProps = register ? register(name) : {};
  const currentValue = registerProps.value || "";

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
        <textarea
          id={name}
          rows={rows}
          placeholder={placeholder}
          maxLength={maxLength}
          {...registerProps}
          className={`
            w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
            ${
              fieldError
                ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-300"
            }
            focus:outline-none bg-white text-gray-900 placeholder-gray-500
            resize-${resize}
          `}
          style={{ resize }}
          aria-invalid={fieldError ? "true" : "false"}
        />
      </div>

      {showCharCount && maxLength && (
        <div className="text-right">
          <span
            className={`text-sm ${
              currentValue.length > maxLength * 0.9
                ? "text-red-600"
                : "text-gray-500"
            }`}
          >
            {currentValue.length}/{maxLength}
          </span>
        </div>
      )}

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

export default Textarea;
