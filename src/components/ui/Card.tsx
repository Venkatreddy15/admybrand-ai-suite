import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  shadow?: boolean;
};

export function Card({ children, className, glass, shadow }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6",
        glass ? "bg-white/20 backdrop-blur-md border border-white/30" : "bg-white dark:bg-gray-900",
        shadow ? "shadow-xl" : "",
        className
      )}
    >
      {children}
    </div>
  );
} 