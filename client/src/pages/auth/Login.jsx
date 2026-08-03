import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiArrowRight, FiCode, FiZap, FiShield } from "react-icons/fi";
import {login} from "../../features/auth/authService.js"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    const response = await login(formData);
    console.log(response);
    

    setLoading(true);
  };

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-slate-50 dark:bg-zinc-950">
      
      {/* 🌌 Background Grid Lines & Glow */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-indigo-500/30 blur-[120px]"></div>
        <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:flex-row">
        
        {/* 👈 Left Side: Features & Live Code Preview */}
        <div className="flex flex-1 flex-col justify-between p-8 lg:p-12 hidden md:flex">
          <div>
            

            <div className="mt-12 space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
                Welcome back to <br />
                <span className="text-indigo-600 dark:text-indigo-400">RNCore Developer Console.</span>
              </h1>
              <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md">
                Access your API keys, manage mock databases, and monitor endpoint activity from one place.
              </p>
            </div>

            {/* Feature Perks */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-xs font-medium text-slate-700 dark:text-zinc-300">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                  <FiZap size={14} />
                </div>
                <span>Instant API Key access & regeneration</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-slate-700 dark:text-zinc-300">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                  <FiCode size={14} />
                </div>
                <span>Fast response times under 50ms</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-slate-700 dark:text-zinc-300">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                  <FiShield size={14} />
                </div>
                <span>End-to-end data isolation</span>
              </div>
            </div>
          </div>

          {/* Mini Code Preview Card */}
          <div className="mt-8 rounded-xl border border-slate-200/80 bg-slate-900 p-4 shadow-xl dark:border-zinc-800">
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2">status-check.js</span>
            </div>
            <pre className="mt-3 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
              <code>
                <span className="text-purple-400">const</span> status = <span className="text-purple-400">await</span> axios.get(<span className="text-emerald-400">"https://rncore.com/api/v2/health"</span>);
              </code>
            </pre>
          </div>
        </div>

        {/* 👉 Right Side: Login Form Area */}
        <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md space-y-6">
            
            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-sm backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/90">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Sign In
                </h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400">
                  Enter your credentials to access your dashboard.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 dark:border-rose-900/30 dark:bg-rose-950/30 dark:text-rose-400">
                  {error}
                </div>
              )}

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="dev@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 transition focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-500"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300">
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-[11px] font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative mt-1.5">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 transition focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-500"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-zinc-500 dark:hover:text-zinc-300 cursor-pointer"
                    >
                      {showPassword ? <FiEyeOff size={14} /> : <FiEye size={14} />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Signing in..." : "Sign In"}
                  {!loading && <FiArrowRight size={14} />}
                </button>
              </form>

              {/* Bottom Register Link */}
              <p className="mt-6 text-center text-xs text-slate-600 dark:text-zinc-400">
                Don't have an account?{" "}
                <Link to="/register" className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
                  Create account
                </Link>
              </p>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Login;