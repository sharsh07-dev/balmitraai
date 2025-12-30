import { SignUp } from "@clerk/nextjs";
import { ShieldCheck } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <div className="hidden lg:flex w-1/2 bg-slate-900 items-center justify-center relative">
        <div className="z-10 text-center text-white p-12">
            <h1 className="text-4xl font-bold mb-4">Join the Network</h1>
            <p className="text-slate-400">Create your parent guardian account today.</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
        <SignUp />
      </div>
    </div>
  );
}