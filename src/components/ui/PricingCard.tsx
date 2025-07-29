import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
  onCtaClick?: () => void;
  children?: ReactNode;
  className?: string;
};

export function PricingCard({ title, price, features, highlighted, cta, onCtaClick, children, className }: PricingCardProps) {
  return (
    <div className={cn(
      "flex flex-col rounded-2xl p-8 border transition-all",
      highlighted ? "border-blue-600 bg-blue-50 shadow-2xl scale-105 z-10" : "border-gray-200 bg-white dark:bg-gray-900",
      className
    )}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-extrabold mb-4">{price}</div>
      <ul className="mb-6 space-y-2 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
            <span className="mr-2 text-blue-600">✔</span> {f}
          </li>
        ))}
      </ul>
      {children}
      {cta && <Button variant={highlighted ? "primary" : "secondary"} size="md" onClick={onCtaClick}>{cta}</Button>}
    </div>
  );
} 