import React, { useState } from 'react';
import {
  Activity,
  Database,
  CheckCircle2,
  Calendar,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Code2
} from 'lucide-react';

export default function DevOverview({ username = 'Developer', apiKey = 'rn_live_8f92a10b4c73d29e' }) {
  const [copiedEndpoint, setCopiedEndpoint] = useState(false);
  const sampleEndpoint = `https://rncore.onrender.com/api/v2/${apiKey}/todos`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleEndpoint);
    setCopiedEndpoint(true);
    setTimeout(() => setCopiedEndpoint(false), 2000);
  };

  const stats = [
    {
      label: 'Total API Requests',
      value: '12,840',
      icon: Activity,
      badge: '+12%',
      badgeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-800/40',
    },
    {
      label: 'Total Records',
      value: '1,420',
      icon: Database,
      badge: 'Active',
      badgeColor: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200/60 dark:border-blue-800/40',
    },
    {
      label: 'API Status',
      value: 'Operational',
      icon: CheckCircle2,
      badge: '99.9%',
      badgeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-800/40',
    },
    {
      label: 'Account Created',
      value: 'Aug 2026',
      icon: Calendar,
      badge: 'Free Tier',
      badgeColor: 'text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700',
    },
  ];

  const recentLogs = [
    { method: 'GET', endpoint: '/todos', status: 200, statusText: 'Success', time: '2 mins ago' },
    { method: 'POST', endpoint: '/todos', status: 201, statusText: 'Created', time: '14 mins ago' },
    { method: 'PATCH', endpoint: '/todos/12', status: 200, statusText: 'Success', time: '1 hour ago' },
    { method: 'DELETE', endpoint: '/todos/4', status: 204, statusText: 'No Content', time: '3 hours ago' },
  ];

  const getMethodBadgeClass = (method) => {
    switch (method) {
      case 'GET':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-400 border-blue-200/80 dark:border-blue-900/50';
      case 'POST':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-400 border-emerald-200/80 dark:border-emerald-900/50';
      case 'PATCH':
      case 'PUT':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/70 dark:text-amber-400 border-amber-200/80 dark:border-amber-900/50';
      case 'DELETE':
        return 'bg-rose-50 text-rose-700 dark:bg-rose-950/70 dark:text-rose-400 border-rose-200/80 dark:border-rose-900/50';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300 border-slate-200 dark:border-zinc-700';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6 font-sans text-slate-800 dark:text-zinc-100 bg-white dark:bg-zinc-950 min-h-screen">
      
      {/* 1. Top Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80 dark:border-zinc-800/80">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Welcome back, {username} 👋
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-0.5">
            Manage your API, monitor usage, and build faster with RNCore.
          </p>
        </div>

        <div className="self-start sm:self-center">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-emerald-200/80 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/60 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            API Active
          </span>
        </div>
      </div>

      {/* 2. Quick Integration Card */}
      <div className="p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-slate-50/50 dark:bg-zinc-900/50 dark:border-zinc-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
              Quick Integration Endpoint
            </span>
          </div>
          <a
            href="/docs"
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            View Documentation <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-slate-200 bg-white font-mono text-xs text-slate-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 overflow-x-auto whitespace-nowrap">
            {sampleEndpoint}
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer shrink-0 shadow-sm shadow-blue-500/20"
          >
            {copiedEndpoint ? <Check size={14} className="text-blue-200" /> : <Copy size={14} />}
            <span>{copiedEndpoint ? 'Copied' : 'Copy Endpoint'}</span>
          </button>
        </div>
      </div>

      {/* 3. Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200/80 bg-white dark:bg-zinc-900/50 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between text-slate-500 dark:text-zinc-400">
                <span className="text-xs font-medium">{stat.label}</span>
                <div className="p-1.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  <IconComponent size={14} />
                </div>
              </div>

              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {stat.value}
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${stat.badgeColor}`}>
                  {stat.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid Layout for Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 4. Recent API Activity (Spans 2 columns) */}
        <div className="lg:col-span-2 p-5 rounded-xl border border-slate-200/80 bg-white dark:bg-zinc-900/50 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity size={16} className="text-blue-600 dark:text-blue-400" />
              Recent API Activity
            </h2>
            <span className="text-[11px] font-medium text-slate-500 dark:text-zinc-400">Live Traffic</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-zinc-800/80 text-[11px] font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                  <th className="pb-2.5 pl-1">Method</th>
                  <th className="pb-2.5">Endpoint</th>
                  <th className="pb-2.5">Status</th>
                  <th className="pb-2.5 pr-1 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60 text-xs font-mono">
                {recentLogs.map((log, index) => (
                  <tr key={index} className="hover:bg-slate-50/80 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="py-2.5 pl-1">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${getMethodBadgeClass(log.method)}`}>
                        {log.method}
                      </span>
                    </td>
                    <td className="py-2.5 text-slate-700 dark:text-zinc-300 font-semibold">{log.endpoint}</td>
                    <td className="py-2.5">
                      <span className="inline-flex items-center gap-1.5 font-sans font-medium text-slate-700 dark:text-zinc-300">
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">{log.status}</span>
                        <span className="text-slate-400 dark:text-zinc-500 text-[11px]">({log.statusText})</span>
                      </span>
                    </td>
                    <td className="py-2.5 pr-1 text-right font-sans text-slate-400 dark:text-zinc-500 text-[11px]">
                      {log.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar: Getting Started & Documentation CTA */}
        <div className="space-y-6">

          {/* 5. Getting Started Section */}
          <div className="p-5 rounded-xl border border-slate-200/80 bg-white dark:bg-zinc-900/50 dark:border-zinc-800 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Zap size={16} className="text-amber-500" />
                Start Building Your Application
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                Follow these steps to complete your integration.
              </p>
            </div>

            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5 text-slate-700 dark:text-zinc-300">
                <div className="mt-0.5 rounded-full p-0.5 bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 shrink-0">
                  <CheckCircle2 size={13} />
                </div>
                <div className="leading-tight">
                  <span className="font-semibold block text-slate-900 dark:text-white">Create your API key</span>
                  <span className="text-[11px] text-slate-500 dark:text-zinc-400">Generated automatically for V2</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 text-slate-700 dark:text-zinc-300">
                <div className="mt-0.5 rounded-full p-0.5 bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400 shrink-0">
                  <Code2 size={13} />
                </div>
                <div className="leading-tight">
                  <span className="font-semibold block text-slate-900 dark:text-white">Connect your frontend</span>
                  <span className="text-[11px] text-slate-500 dark:text-zinc-400">Paste base endpoint into Axios/Fetch</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 text-slate-700 dark:text-zinc-300">
                <div className="mt-0.5 rounded-full p-0.5 bg-slate-100 text-slate-500 dark:bg-zinc-800 dark:text-zinc-400 shrink-0">
                  <Activity size={13} />
                </div>
                <div className="leading-tight">
                  <span className="font-semibold block text-slate-900 dark:text-white">Make your first API request</span>
                  <span className="text-[11px] text-slate-500 dark:text-zinc-400">Perform CRUD on `/todos` or `/users`</span>
                </div>
              </li>
            </ul>
          </div>

          {/* 6. Documentation CTA */}
          <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50 dark:border-blue-900/40 dark:bg-blue-950/20 shadow-sm flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-600 dark:text-blue-400" />
                Need help integrating RNCore?
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400">
                Explore guides, code examples, and REST endpoints.
              </p>
            </div>
            <a
              href="/docs"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0 shadow-sm"
            >
              <span>Read Docs</span>
              <ExternalLink size={12} />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}