"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail } from "lucide-react";

type Status =
  | { kind: "idle"; message: string }
  | { kind: "error"; message: string }
  | { kind: "success"; message: string };

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({
    kind: "idle",
    message: "",
  });

  const isValid = useMemo(() => email.trim().includes("@"), [email]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ kind: "idle", message: "" });

    if (!isValid) {
      setStatus({
        kind: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 850));
    setSubmitting(false);

    setStatus({
      kind: "success",
      message: "If your email exists, a reset link has been sent.",
    });
  }

  return (
    <div className="min-h-[60dvh] bg-gray-50 font-inter px-4 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="hidden lg:flex">
            <div className="w-full rounded-2xl border border-gray-200 bg-snow shadow-sm overflow-hidden depth">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-white to-white" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(163,22,33,0.20),transparent_40%),radial-gradient(circle_at_90%_0%,rgba(163,22,33,0.10),transparent_45%)]" />

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
                        Password reset
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-gray-900">
                      Forgot your password?
                    </h2>
                    <p className="text-xs text-gray-600 mt-2 leading-5">
                      No worries. Enter your account email and we&apos;ll send
                      a reset link.
                    </p>
                  </div>

                  <div className="text-xs text-gray-600">
                    Regain access quickly and securely.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 depth">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to login
              </Link>

              <div className="mt-4">
                <h2 className="font-semibold text-gray-900 text-lg">
                  Reset password
                </h2>
                <p className="text-xs text-gray-600 mt-1">
                  Enter your email to receive a reset link.
                </p>
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

                <button
                  type="submit"
                  disabled={submitting}
                  className="cursor-pointer w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-2 font-inter disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send reset link"}
                </button>

                <div className="text-center text-xs text-gray-600 pt-1">
                  Remembered your password?{" "}
                  <Link href="/login" className="text-primary font-semibold">
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

