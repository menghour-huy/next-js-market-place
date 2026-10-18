import Link from "next/link";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f5f2] px-6 py-12">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
        <Link
          href="/"
          className="text-sm font-semibold text-orange-700 hover:text-orange-800"
        >
          &larr; Back to MarketHub
        </Link>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
            Welcome back
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
            Sign in to your account
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Enter your email and password to continue to MarketHub.
          </p>
        </div>

        <LoginForm />
      </section>
    </main>
  );
}
