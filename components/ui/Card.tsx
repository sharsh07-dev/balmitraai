import React from "react";
import { cn } from "@/lib/utils"; // Ensure you have a utils file or remove 'cn' if simpler

// A reusable card component with a professional glass/shadow effect
export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, icon: Icon }: { title: string; subtitle?: string; icon?: any }) {
  return (
    <div className="p-6 pb-2 border-b border-slate-50 flex items-start justify-between">
      <div>
        <h3 className="font-semibold text-slate-800 text-lg">{title}</h3>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
      {Icon && <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><Icon size={20} /></div>}
    </div>
  );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}