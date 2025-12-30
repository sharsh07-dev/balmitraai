import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Smartphone } from "lucide-react";

type AppUsage = {
  name: string;
  minutes: number;
  icon: string; // url or simplified string
  color: string;
};

// Mock data for now (In real app, this comes from Prisma)
const APPS_DATA: AppUsage[] = [
  { name: "Instagram", minutes: 145, icon: "📸", color: "bg-pink-500" },
  { name: "Discord", minutes: 90, icon: "💬", color: "bg-indigo-500" },
  { name: "YouTube", minutes: 60, icon: "▶️", color: "bg-red-500" },
  { name: "Chrome", minutes: 45, icon: "🌐", color: "bg-blue-500" },
  { name: "WhatsApp", minutes: 30, icon: "📞", color: "bg-green-500" },
];

export default function TopApps() {
  const maxVal = Math.max(...APPS_DATA.map(a => a.minutes));

  return (
    <Card className="h-full">
      <CardHeader title="Most Used Apps" subtitle="Top 5 consumed platforms today" icon={Smartphone} />
      <CardContent className="space-y-6">
        {APPS_DATA.map((app) => (
          <div key={app.name} className="group">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-semibold text-slate-700 flex items-center gap-2">
                <span>{app.icon}</span> {app.name}
              </span>
              <span className="text-slate-500">{Math.floor(app.minutes / 60)}h {app.minutes % 60}m</span>
            </div>
            {/* Animated Progress Bar */}
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${app.color} rounded-full transition-all duration-1000 ease-out`} 
                style={{ width: `${(app.minutes / maxVal) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}