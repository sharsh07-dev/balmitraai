import { SignIn } from "@clerk/nextjs";
import { ShieldCheck } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      
      {/* Left Side: Visual Branding */}
      <div className="hidden lg:flex w-1/2 bg-indigo-600 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay"></div>
        <div className="z-10 text-center text-white p-12">
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={40} className="text-indigo-600" />
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 tracking-tight">BalMitra AI</h1>
            <p className="text-indigo-100 text-lg max-w-md mx-auto">
                Next-generation proactive child safety monitoring. secure, private, and intelligent.
            </p>
        </div>
      </div>

      {/* Right Side: The Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
        <SignIn />
      </div>

    </div>
  );
}