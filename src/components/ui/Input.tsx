import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => (
    <div className="w-full">
      {label && <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>}
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white dark:bg-gray-900",
          error ? "border-red-500" : "",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
);
Input.displayName = "Input"; 