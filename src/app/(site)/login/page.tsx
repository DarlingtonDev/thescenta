"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

type Status =
  | { kind: "idle"; message: string }
  | { kind: "error"; message: string }
  | { kind: "success"; message: string };

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({
    kind: "idle",
    message: "",
  });

  const isValid = useMemo(() => {
    if (!email.trim()) return false;
    if (!password) return false;
    // Simple client-side check; you can swap with real backend validation later.
    if (!email.includes("@")) return false;
    return true;
  }, [email, password]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ kind: "idle", message: "" });

    if (!isValid) {
      setStatus({
        kind: "error",
        message: "Please enter a valid email and password.",
      });
      return;
    }

    setSubmitting(true);
    // Front-end only: simulate a request.
    await new Promise((r) => setTimeout(r, 900));

    setSubmitting(false);
    setStatus({
      kind: "success",
      message: "You’re signed in (demo). Hook this up to your auth API next.",
    });

    // Keep values if "Remember me" is enabled; otherwise clear password.
    if (!rememberMe) setPassword("");
  }

  return (
    <div className="min-h-[60dvh] bg-gray-50 font-inter px-4 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left / Brand panel */}
          <div className="hidden lg:flex">
            <div className="w-full rounded-2xl border border-gray-200 bg-snow shadow-sm overflow-hidden depth">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-white to-white" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(163,22,33,0.20),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(163,22,33,0.12),transparent_45%)]" />
                <div className="relative h-full p-10 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/logo (2).png"
                        alt="thescenta logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h1 className="font-poppins font-bold text-xl text-gray-900">
                        Thescenta
                      </h1>
                      <p className="text-xs font-medium text-gray-600">
                        Welcome back
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div>
                      <h2 className="font-semibold text-sm text-gray-900">
                        Sign in to manage your orders
                      </h2>
                      <p className="mt-2 text-xs text-gray-600 leading-5">
                        Save your address, track delivery, and keep your
                        favorites ready.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div className="rounded-xl border border-gray-200 bg-white/70 p-4">
                        <p className="text-xs font-semibold text-gray-900">
                          Secure checkout
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Smooth payments with trusted flow.
                        </p>
                      </div>
                      <div className="rounded-xl border border-gray-200 bg-white/70 p-4">
                        <p className="text-xs font-semibold text-gray-900">
                          Fast delivery
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Quick updates from order to doorstep.
                        </p>
                      </div>
                      <div className="rounded-xl border border-gray-200 bg-white/70 p-4">
                        <p className="text-xs font-semibold text-gray-900">
                          Authentic fragrances
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Premium scents, always.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-600">
                    Tip: This page is front-end only for now.
                    <span className="block mt-1">
                      Wire it to your auth API whenever you’re ready.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Form panel */}
          <div className="flex">
            <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 depth">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-gray-900 text-lg">Login</h2>
                  <p className="text-xs text-gray-600 mt-1">
                    Enter your details to continue.
                  </p>
                </div>
              </div>

              {status.kind !== "idle" && (
                <div
                  className={[
                    "mt-6 rounded-xl border p-4 text-sm",
                    status.kind === "error"
                      ? "bg-red-50 border-red-200 text-red-700"
                      : "bg-green-50 border-green-200 text-green-700",
                  ].join(" ")}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your password"
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <label className="flex items-center gap-2 text-xs text-gray-700 select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    Remember me
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-primary hover:underline"
                    aria-label="Forgot password"
                  >
                    Forgot?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="cursor-pointer w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-2 font-inter disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? "Signing in..." : "Sign in"}
                </button>

                <div className="text-center text-xs text-gray-600 pt-2">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="text-primary font-semibold">
                    Create one
                  </Link>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-[11px] text-gray-500 font-semibold">
                    OR
                  </span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                <button
                  type="button"
                  className="w-full border border-gray-300 rounded-lg py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors font-inter flex items-center justify-center gap-2"
                  disabled={submitting}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path
                      fill="#EA4335"
                      d="M12 10.2v3.9h5.4c-.2 1.2-1.4 3.6-5.4 3.6-3.2 0-5.9-2.7-5.9-6s2.7-6 5.9-6c1.8 0 3.1.8 3.8 1.4l2.6-2.5C16.8 3.2 14.6 2.3 12 2.3 6.7 2.3 2.4 6.6 2.4 12s4.3 9.7 9.6 9.7c5.6 0 9.3-3.9 9.3-9.4 0-.6-.1-1.1-.1-1.6H12z"
                    />
                    <path
                      fill="#34A853"
                      d="M3.5 7.5l3.2 2.3c.9-2.7 3.5-4.7 6.3-4.7 1.8 0 3.1.8 3.8 1.4l2.6-2.5C16.8 3.2 14.6 2.3 12 2.3 8 2.3 4.5 4.5 3.5 7.5z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M12 21.7c2.5 0 4.6-.8 6.2-2.2l-3-2.4c-.8.6-1.9 1-3.3 1-2.8 0-5.2-1.9-6.1-4.4L2.5 16c1.7 3.4 5.3 5.7 9.5 5.7z"
                    />
                    <path
                      fill="#4285F4"
                      d="M3.9 12c0-.8.1-1.6.4-2.2L1 7.5C.4 8.8 0 10.4 0 12s.4 3.2 1 4.5l3.3-2.3c-.3-.7-.4-1.4-.4-2.2z"
                    />
                  </svg>
                  Continue with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
