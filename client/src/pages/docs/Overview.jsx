import React from "react";
import {
  Globe,
  Key,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass,
  Zap,
  Layers
} from "lucide-react";

const Overview = () => {
  return (
    <section id="overview" className="w-full scroll-mt-24 font-sans text-slate-800 dark:text-zinc-100">

      {/* 1. Header & Introduction */}
      <div>
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <Layers size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">Getting Started</span>
        </div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          RNCore REST API
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-zinc-300">
          Welcome to the RNCore API documentation. RNCore provides ready-to-use REST APIs designed specifically for frontend developers. Connect your React, Next.js, Flutter, or any client application to practice real HTTP requests, CRUD operations, and database integration without setting up or managing backend servers.
        </p>
      </div>

      {/* 2. Choose Your API Version */}
      <div className="mt-10">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Choose Your API Version
          </h2>
        </div>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          Select the version that matches your learning goals or project requirements.
        </p>

        {/* V1 vs V2 Comparison Cards Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">

          {/* Card 1: V1 Public API */}
          <div className="relative flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-slate-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400">
                  <Globe size={20} />
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  NO AUTH NEEDED
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                RNCore V1 — Public API
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-zinc-400">
                Designed for absolute beginners to test HTTP requests immediately.
              </p>

              {/* V1 Highlights */}
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600 dark:border-zinc-800/80 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
                  <span>No account required</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
                  <span>No API key required</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
                  <span>Simple public endpoints</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
                  <span>Perfect for learning basic API calls</span>
                </li>
              </ul>

              {/* V1 Use Cases */}
              <div className="mt-5 rounded-lg bg-slate-50 p-3 dark:bg-zinc-800/40">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  Best For:
                </span>
                <ul className="mt-1.5 space-y-1 text-xs font-medium text-slate-700 dark:text-zinc-300">
                  <li>• Simple Integration</li>
                  <li>• Learning Axios or Fetch API</li>
                  <li>• Building quick practice Todo apps</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: V2 Personal API */}
          <div className="relative flex flex-col justify-between rounded-xl border border-indigo-200/80 bg-white p-6 shadow-sm transition hover:border-indigo-300 dark:border-indigo-900/50 dark:bg-zinc-900/50 dark:hover:border-indigo-800">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
                  <Key size={20} />
                </div>
                <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[10px] font-bold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                  RECOMMENDED
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                RNCore V2 — Personal API
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-zinc-400">
                Designed for realistic app development with isolated, persistent storage.
              </p>

              {/* V2 Highlights */}
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600 dark:border-zinc-800/80 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-indigo-500" />
                  <span>Requires a free RNCore account</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-indigo-500" />
                  <span>Uses personal API keys</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-indigo-500" />
                  <span>User-specific private data storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-indigo-500" />
                  <span>Real-world application integration</span>
                </li>
              </ul>

              {/* V2 Use Cases */}
              <div className="mt-5 rounded-lg bg-indigo-50/50 p-3 dark:bg-indigo-950/30">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Best For:
                </span>
                <ul className="mt-1.5 space-y-1 text-xs font-medium text-slate-700 dark:text-zinc-300">
                  <li>Personal API key authentication</li>
                  <li>User-specific data storage</li>
                  <li>Real database integration</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Getting Started Guidance */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="flex items-start gap-3">
          <Compass size={18} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
          <div className="text-xs">
            <h4 className="font-bold text-slate-900 dark:text-white">
              Where should you start?
            </h4>
            <p className="mt-1 leading-relaxed text-slate-600 dark:text-zinc-300">
              If you are new to working with APIs, we recommend starting with <strong>V1 (Public API)</strong> to learn how frontend applications connect with APIs and fetch real data. When you are ready to build complete applications with your own data, move to <strong>V2 (Personal API)</strong> where you can perform full CRUD operations with secure, user-specific storage.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Overview;