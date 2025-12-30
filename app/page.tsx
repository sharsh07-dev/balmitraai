import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import RiskChart from "@/components/charts/RiskChart";
import { ShieldAlert, Clock, Smartphone, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* 1. Sidebar */}
      <Sidebar />

      {/* 2. Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* Top Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Dashboard Overview</h2>
            <p className="text-slate-500">Welcome back, Mr. Shinde</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 shadow-sm">
                Device: <span className="text-indigo-600">Rohan's iPhone</span>
             </div>
             <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
                HS
             </div>
          </div>
        </header>

        {/* 3. Key Metrics (Bento Grid Top Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Safety Score */}
          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader title="Safety Score" icon={ShieldAlert} />
            <CardContent>
              <div className="flex items-end gap-2">
                <h3 className="text-4xl font-bold text-slate-800">92</h3>
                <span className="text-sm text-emerald-600 font-medium mb-1">/ 100</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">Environment is stable.</p>
            </CardContent>
          </Card>

          {/* Screen Time */}
          <Card className="border-l-4 border-l-indigo-500">
            <CardHeader title="Screen Time" icon={Clock} />
            <CardContent>
              <div className="flex items-end gap-2">
                <h3 className="text-4xl font-bold text-slate-800">4h 12m</h3>
              </div>
              <p className="text-sm text-slate-500 mt-2">+15m vs yesterday average</p>
            </CardContent>
          </Card>

          {/* Active Apps */}
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader title="Risk Alerts" icon={Smartphone} />
            <CardContent>
              <div className="flex items-end gap-2">
                <h3 className="text-4xl font-bold text-slate-800">1</h3>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full mb-1">Low Severity</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">1 flagged keyword on Discord</p>
            </CardContent>
          </Card>
        </div>

        {/* 4. Main Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: The Big Graph (Takes up 2/3 space) */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader 
                title="Behavioral Risk Analysis" 
                subtitle="Real-time emotional drift and sentiment monitoring (Last 24h)" 
              />
              <CardContent>
                <RiskChart />
              </CardContent>
            </Card>

            {/* Recent Alerts List */}
            <Card>
              <CardHeader title="Recent Flagged Activity" />
              <CardContent className="p-0">
                {[
                  { app: "Discord", risk: "Grooming Indicator", time: "2h ago", color: "bg-amber-100 text-amber-700" },
                  { app: "Chrome", risk: "Restricted Search", time: "5h ago", color: "bg-red-100 text-red-700" },
                  { app: "Instagram", risk: "Sentiment Drop", time: "8h ago", color: "bg-slate-100 text-slate-600" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.app === 'Discord' ? 'bg-indigo-500' : 'bg-slate-400'}`}></div>
                      <div>
                        <p className="font-semibold text-sm text-slate-800">{item.risk}</p>
                        <p className="text-xs text-slate-500">Source: {item.app}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-slate-400">{item.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right: Insights & Actions */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white border-none">
              <CardContent>
                <h3 className="text-lg font-bold mb-2">Upgrade Protection</h3>
                <p className="text-indigo-100 text-sm mb-4">Enable deep-scan AI for better accuracy in gaming chats.</p>
                <button className="w-full py-2 bg-white text-indigo-700 font-semibold rounded-lg text-sm hover:bg-indigo-50 transition-colors">
                  Enable Pro Features
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader title="Quick Actions" />
              <CardContent className="space-y-2">
                {['Lock Device Now', 'View Daily Report', 'Edit Safe Words'].map((action) => (
                  <button key={action} className="w-full flex items-center justify-between p-3 text-sm text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all group">
                    {action}
                    <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
}