import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface PasswordFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  variant?: "box" | "line"; 
}

export default function PasswordField({
  label = "Password",
  placeholder = "••••••••",
  value,
  onChange,
  required = false,
  variant = "box",
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-2">
      {label && (
        <label className={`font-semibold font-inter text-sm ${variant === 'line' ? 'text-gray-700 leading-5' : 'text-zinc-800'}`}>
          {label}
        </label>
      )}
      <div className="self-stretch relative flex flex-col justify-start items-start w-full">
        <div className={`w-full flex justify-start items-center overflow-hidden transition duration-200 
          ${variant === "line" 
            ? "py-2.5 border-b-2 border-zinc-200 focus-within:border-blue-600" 
            : "border border-gray-200 rounded-xl focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          }`}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className={`w-full bg-transparent border-none outline-hidden text-base font-normal font-inter text-zinc-800 placeholder:text-gray-300 pr-12
              ${variant === "line" ? "pl-0 py-0" : "pl-5 py-3.5"}`}
          />
        </div>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute text-gray-400 hover:text-blue-600 transition-colors duration-200 cursor-pointer text-sm
            ${variant === "line" ? "right-2 top-1/2 -translate-y-1/2" : "right-5 top-1/2 -translate-y-1/2"}`}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </div>
    </div>
  );
}