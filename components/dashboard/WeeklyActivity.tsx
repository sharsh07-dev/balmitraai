"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { CalendarDays } from "lucide-react";

const data = [
  { day: 'Mon', hours: 4.5 },
  { day: 'Tue', hours: 3.2 },
  { day: 'Wed', hours: 5.8 }, // Spike
  { day: 'Thu', hours: 4.0 },
  { day: 'Fri', hours: 6.5 }, // Weekend start
  { day: 'Sat', hours: 7.2 },
  { day: 'Sun', hours: 5.5 },
];

export default function WeeklyActivity() {
  return (
    <Card>
      <CardHeader title="Weekly Screen Timeline" subtitle="Total digital footprint (Hours)" icon={CalendarDays} />
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={32}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <YAxis hide />
            <Tooltip 
               cursor={{fill: '#f1f5f9'}}
               contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="hours" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.hours > 6 ? '#f59e0b' : '#6366f1'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}