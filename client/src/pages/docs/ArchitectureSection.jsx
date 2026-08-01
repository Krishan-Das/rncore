import React from "react";
import {
  Cpu,
  Monitor,
  Server,
  KeyRound,
  Database,
  ArrowDown,
  Globe,
  Lock,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Code
} from "lucide-react";

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="max-w-4xl scroll-mt-24 font-sans text-slate-800 dark:text-zinc-100">
      
      {/* Top Badge & Section Header */}
      <div>
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <Cpu size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">System Design</span>
        </div>
        
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Architecture
        </h2>
        
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-base">
          RNCore follows a modern client-server architecture designed for reliability and simplicity. Frontend client applications communicate with RNCore using standard RESTful HTTP requests, and RNCore securely processes, routes, and returns structured JSON responses.
        </p>
      </div>

      {/* Feature Badges */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        {[
          "Stateless REST API",
          "Isolated Account Data",
          "JSON Data Exchange",
          "High Performance"
        ].map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50/50 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300"
          >
            <CheckCircle2 size={14} className="text-indigo-500 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Section 1: How RNCore Works (Flow Diagram) */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          How RNCore Works
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          Visualizing the request execution path for V1 (Public) vs V2 (Personal) APIs:
        </p>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          
          {/* V1 Flow Card */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-emerald-500" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">V1 — Public Flow</h4>
              </div>
              <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                No Auth
              </span>
            </div>

            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200">
                Frontend Application
              </div>
              <ArrowDown size={14} className="text-slate-400" />
              <div className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200">
                RNCore REST API
              </div>
              <ArrowDown size={14} className="text-slate-400" />
              <div className="w-full rounded-lg border border-emerald-200 bg-emerald-50/50 p-2.5 text-center text-xs font-semibold text-emerald-800 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
                Public Data Response
              </div>
            </div>
          </div>

          {/* V2 Flow Card */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-indigo-500" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">V2 — Personal Flow</h4>
              </div>
              <span className="rounded-md bg-indigo-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                API Key Protected
              </span>
            </div>

            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200">
                Frontend Application
              </div>
              <ArrowDown size={14} className="text-slate-400" />
              <div className="w-full rounded-lg border border-indigo-200 bg-indigo-50/50 p-2 text-center text-xs font-semibold text-indigo-800 dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-300">
                API Key Authentication
              </div>
              <ArrowDown size={14} className="text-slate-400" />
              <div className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200">
                RNCore REST API
              </div>
              <ArrowDown size={14} className="text-slate-400" />
              <div className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200">
                User-Specific Database
              </div>
              <ArrowDown size={14} className="text-slate-400" />
              <div className="w-full rounded-lg border border-indigo-200 bg-indigo-50/50 p-2.5 text-center text-xs font-semibold text-indigo-800 dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-300">
                JSON Response
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Section 2: Core Components */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Core Components
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          The structural modules responsible for serving client requests:
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          
          {/* Client Application */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
              <Monitor size={18} />
            </div>
            <h4 className="mt-3 text-xs font-bold text-slate-900 dark:text-white">
              Client Application
            </h4>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-zinc-400">
              React, Next.js, Flutter, or any frontend web/mobile client framework that initiates REST API requests.
            </p>
          </div>

          {/* REST API Layer */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
              <Server size={18} />
            </div>
            <h4 className="mt-3 text-xs font-bold text-slate-900 dark:text-white">
              REST API Layer
            </h4>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-zinc-400">
              Handles incoming HTTP endpoints, request data validation, payload formatting, and response generation.
            </p>
          </div>

          {/* Authentication Layer */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
              <KeyRound size={18} />
            </div>
            <h4 className="mt-3 text-xs font-bold text-slate-900 dark:text-white">
              Authentication Layer
            </h4>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-zinc-400">
              Validates personal API keys in the URL path to protect and authorize access to V2 personal resources.
            </p>
          </div>

          {/* Database Layer */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
              <Database size={18} />
            </div>
            <h4 className="mt-3 text-xs font-bold text-slate-900 dark:text-white">
              Database Layer
            </h4>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-zinc-400">
              Stores persistent application data, ensuring data integrity and fast document retrieval.
            </p>
          </div>

        </div>
      </div>

      {/* Section 3: Data Isolation in V2 */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Data Isolation in V2
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          How RNCore guarantees privacy and isolation across personal developer environments:
        </p>

        <div className="mt-3 rounded-xl border border-indigo-200/80 bg-indigo-50/40 p-4 dark:border-indigo-900/40 dark:bg-indigo-950/20">
          <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <Lock size={15} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
              <span><strong>Key-to-Account Binding:</strong> Every generated API key is uniquely bound to exactly one registered developer account.</span>
            </li>
            <li className="flex items-start gap-2">
              <Lock size={15} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
              <span><strong>Automatic Route Scoping:</strong> All requests received under <code className="rounded bg-indigo-100/60 px-1 py-0.5 font-mono text-[11px] text-indigo-900 dark:bg-indigo-900/50 dark:text-indigo-200">/api/v2/&#123;KEY&#125;</code> automatically query resources filtered strictly by that key owner.</span>
            </li>
            <li className="flex items-start gap-2">
              <Lock size={15} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
              <span><strong>Resource Privacy:</strong> Developers can perform full CRUD operations on their own dataset without risk of overwriting or viewing another user's data.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 4: Technology Overview */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Technology Overview
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          The tech stack underlying RNCore platform operations:
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200/80 bg-slate-50/80 text-slate-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 font-mono">
                <tr>
                  <th className="py-3 px-4 font-semibold">Layer</th>
                  <th className="py-3 px-4 font-semibold">Technology Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/80">
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">Frontend Client</td>
                  <td className="py-3 px-4 text-slate-700 dark:text-zinc-300">React / Next.js / Flutter / Axios / Fetch API</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">Backend API</td>
                  <td className="py-3 px-4 text-slate-700 dark:text-zinc-300">Node.js + Express REST Server</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">Database</td>
                  <td className="py-3 px-4 text-slate-700 dark:text-zinc-300">MongoDB Document Store</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">Communication</td>
                  <td className="py-3 px-4 text-slate-700 dark:text-zinc-300">HTTPS + JSON Data Payload Format</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ArchitectureSection;