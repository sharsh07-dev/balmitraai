import { ShieldCheck, LayoutDashboard, Settings, Activity, Users, Bell } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Activity, label: "Live Monitoring", active: false },
  { icon: Bell, label: "Alerts", active: false },
  { icon: Users, label: "Child Profile", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export default function Sidebar() {
  return (
    // FIX: Added 'relative' class below so the absolute elements stay inside the sidebar
    <div className="w-64 bg-slate-900 min-h-screen text-white p-6 hidden md:block relative">
      
      {/* Logo Area */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center">
          <ShieldCheck size={24} className="text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight">BalMitra AI</h1>
          <p className="text-xs text-slate-400">Parent Guardian</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div 
            key={item.label}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
              item.active 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/50" 
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
      
      {/* Bottom User Section */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3 shadow-lg">
            {/* This is the Magic Button: Handles Logout & Profile */}
            <div className="bg-white rounded-full p-1">
                <UserButton afterSignOutUrl="/sign-in" />
            </div>
            
            <div className="overflow-hidden">
                <p className="text-sm font-semibold text-white truncate">Parent Account</p>
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-emerald-400">Online</span>
                </div>
            </div>
        </div>
      </div>
      
    </div> 
  );
}