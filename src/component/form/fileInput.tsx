import React, { useRef, useState } from "react";
import { Upload, X, File } from "lucide-react";

interface IFileInput {
  name?: string;
  errors?: any;
  register?: any;
  label?: string;
  accept?: string;
  multiple?: boolean;
}

const FileInput = ({
  name,
  errors,
  register,
  label,
  accept,
  multiple = false,
}: IFileInput) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const fieldError = errors?.[name as string];

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileNames = Array.from(files).map((f) => f.name);
    setSelectedFiles(fileNames);
  };

  const registerProps =
    register && name
      ? register(name, {
          setValueAs: (v: any) => v,
        })
      : {};

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div
        onClick={handleClick}
        className={`
          relative border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all duration-200
          ${
            fieldError
              ? "border-red-500 bg-red-50 hover:border-red-600"
              : "border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100"
          }
        `}
      >
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          {...registerProps}
          onChange={(e) => {
            registerProps.onChange?.(e); // notify react-hook-form
            handleChange(e); // update local file names
          }}
          ref={(el) => {
            registerProps.ref(el);
            inputRef.current = el;
          }}
        />

        <div className="text-center">
          <Upload size={32} className="mx-auto text-gray-400 mb-3" />
          <p className="text-sm font-medium text-gray-700 mb-1">
            Click to select files
          </p>
          <p className="text-xs text-gray-500">
            {accept &&
              `Accepted formats: ${accept.replace(/\./g, "").toUpperCase()}`}
          </p>
        </div>
      </div>

      {/* Show selected file names */}
      {selectedFiles.length > 0 && (
        <ul className="text-sm text-gray-700 list-disc pl-5">
          {selectedFiles.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
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

export default FileInput;
