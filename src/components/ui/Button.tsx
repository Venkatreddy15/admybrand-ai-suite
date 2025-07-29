import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "glass";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105 active:scale-95";
const variants = {
  primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 shadow-md hover:shadow-lg",
  glass: "backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-lg hover:shadow-xl",
};
const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, children, ...props }, ref) => (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      ref={ref}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <span className="animate-spin mr-2 w-4 h-4 border-2 border-t-transparent border-white rounded-full"></span>
      ) : null}
      {children}
    </button>
  )
);
Button.displayName = "Button"; 