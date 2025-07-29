import { ReactNode } from "react";

export function FeatureIcon({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/30 backdrop-blur-md shadow-md">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="font-semibold text-lg mb-1">{title}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  );
} 