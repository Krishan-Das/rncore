import React, { useState } from 'react';
import {
  Key, BookOpen, Settings, LayoutDashboard, Copy, Check,
  RefreshCw, ExternalLink, ShieldAlert, CheckCircle2, Database, LogOut
} from 'lucide-react';

export default function DeveloperDashboard() {
  const [copied, setCopied] = useState(false);
  const apiKey = "rn_live_8f92a10b4c73d29e";

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
        <div className="logo flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-indigo-600 font-mono font-bold text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
            <img className="h-full w-full object-cover" src="/RNCore.svg" alt="RN" />
          </div>
          <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
            RNCore <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">v2</span>
          </span>

          <span className="hidden h-4 w-px bg-slate-200 sm:inline-block dark:bg-zinc-800"></span>

          {/* Status Badge */}
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 md:inline-flex dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
            Developer Console
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-sm border-r border-slate-200 pr-4">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-700">
              DEV
            </div>
            <span className="font-medium text-slate-700">developer@rncore.com</span>
          </div>
          <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-white border-r border-slate-200 p-4 space-y-1">
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-slate-100 text-slate-900">
              <LayoutDashboard className="w-4 h-4 text-slate-700" /> Overview
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <Key className="w-4 h-4 text-slate-400" /> API Keys
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <BookOpen className="w-4 h-4 text-slate-400" /> Documentation
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <Settings className="w-4 h-4 text-slate-400" /> Settings
            </a>
          </nav>
        </aside>

        {/* Dashboard Content */}
        <main className="flex-1 p-8 max-w-6xl space-y-8">
          {/* Welcome Header */}
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome back, Developer 👋</h1>
            <p className="text-sm text-slate-500 mt-1">Manage your RNCore API and start building faster.</p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* API Key Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                  <Key className="w-4 h-4 text-slate-500" /> Your API Key
                </h3>
                <div className="mt-4 flex items-center gap-2">
                  <input
                    type="password"
                    readOnly
                    value={apiKey}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 font-mono text-sm text-slate-700 focus:outline-none"
                  />
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-all"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-700 border border-slate-200 rounded-lg">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200/60 rounded-lg p-2.5 mt-4 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600" />
                Never expose your API key in client-side code repositories.
              </p>
            </div>

            {/* Quick Start Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-900">Quick Start</h3>
                <a href="#" className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1">
                  View Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="bg-slate-950 text-slate-200 p-3.5 rounded-lg font-mono text-xs overflow-x-auto">
                <p className="text-slate-500">// Example request in Axios</p>
                <p className="mt-1"><span className="text-purple-400">axios</span>.get(<span className="text-emerald-300">'https://rncore.com/api/v2/YOUR_API_KEY/todos'</span>)</p>
              </div>
            </div>

            {/* System Status Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-semibold text-slate-900">API Status</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-xs text-slate-500 block">API Status</span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Operational
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-xs text-slate-500 block">Database</span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                    <Database className="w-3.5 h-3.5" /> Connected
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-xs text-slate-500 block">Version</span>
                  <span className="text-xs font-semibold text-slate-900 block mt-1">V2</span>
                </div>
              </div>
            </div>

            {/* Recent Activity Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-semibold text-slate-900">Recent Activity</h3>
              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2 flex items-center justify-between">
                  <span className="font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold">GET</span>
                  <span className="font-mono text-slate-600">/api/v2/todos</span>
                  <span className="text-emerald-600 font-medium">200 OK</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">POST</span>
                  <span className="font-mono text-slate-600">/api/v2/todos</span>
                  <span className="text-emerald-600 font-medium">201 Created</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold">GET</span>
                  <span className="font-mono text-slate-600">/api/v2/users</span>
                  <span className="text-emerald-600 font-medium">200 OK</span>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}