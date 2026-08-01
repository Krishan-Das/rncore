import React, { useState } from "react";
import {
  Key,
  Terminal,
  Copy,
  Check,
  CheckCircle2,
  Database,
  Link2,
  ShieldCheck,
  Code2
} from "lucide-react";

const V2PersonalApi = () => {
  const [copiedBaseUrl, setCopiedBaseUrl] = useState(false);
  const [copiedStructure, setCopiedStructure] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const baseUrl = "https://rncore.onrender.com/api/v2";
  const endpointStructure = "https://rncore.onrender.com/api/v2/{YOUR_API_KEY}/todos";

  const sampleRequestCode = `import axios from "axios";

const API_KEY = "YOUR_PERSONAL_API_KEY";
const API_URL = "https://rncore.onrender.com/api/v2/" + API_KEY + "/todos";

async function fetchTodos() {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
  } catch (error) {
    console.error("Failed to fetch todos:", error);
  }
}

fetchTodos();`;

  const copyToClipboard = (text, setCopiedState) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <section id="v2-api" className="max-w-4xl scroll-mt-24 font-sans text-slate-800 dark:text-zinc-100">
      
      {/* Top Badge & Section Header */}
      <div>
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <Key size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">Isolated Workspace</span>
        </div>
        
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          RNCore V2 — Personal API
        </h2>
        
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-base">
          RNCore V2 provides isolated, personal REST API endpoints designed for building real-world applications. Every developer gets their own private API space where all created data belongs exclusively to their account, allowing full CRUD application development.
        </p>
      </div>

      {/* Feature Badges */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        {[
          "Personal API Key Required",
          "Isolated Data Storage",
          "Full CRUD Operations",
          "Real-World Ready"
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

      {/* Base URL Section */}
      <div className="mt-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Base URL
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          All V2 personal API endpoints are prefixed with the following base path:
        </p>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 font-mono text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2 truncate pr-2 text-slate-800 dark:text-zinc-200">
            <Link2 size={15} className="text-slate-400 shrink-0" />
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">{baseUrl}</span>
          </div>
          <button
            onClick={() => copyToClipboard(baseUrl, setCopiedBaseUrl)}
            className="flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-slate-500 transition hover:bg-slate-200/60 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            aria-label="Copy base URL"
          >
            {copiedBaseUrl ? (
              <>
                <Check size={14} className="text-emerald-500" />
                <span className="text-emerald-500 font-sans text-[11px]">Copied</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span className="font-sans text-[11px]">Copy Base URL</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* API Endpoint Structure Section */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          API Endpoint Structure
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          Every request uses your personal API key directly inside the URL path to isolate your data.
        </p>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-indigo-200/80 bg-indigo-50/40 px-4 py-3 font-mono text-xs shadow-sm dark:border-indigo-900/40 dark:bg-indigo-950/20">
          <div className="flex items-center gap-2 truncate pr-2 text-slate-800 dark:text-zinc-200">
            <ShieldCheck size={16} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span className="text-slate-700 dark:text-zinc-300">
              /api/v2/<span className="font-bold text-indigo-600 dark:text-indigo-400">&#123;YOUR_API_KEY&#125;</span>/todos
            </span>
          </div>
          <button
            onClick={() => copyToClipboard(endpointStructure, setCopiedStructure)}
            className="flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-slate-500 transition hover:bg-indigo-100/60 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-indigo-900/40 dark:hover:text-white"
            aria-label="Copy endpoint structure"
          >
            {copiedStructure ? (
              <>
                <Check size={14} className="text-emerald-500" />
                <span className="text-emerald-500 font-sans text-[11px]">Copied</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span className="font-sans text-[11px]">Copy Structure</span>
              </>
            )}
          </button>
        </div>
        
        <p className="mt-2 text-[11px] text-slate-500 dark:text-zinc-400">
          Need a key? Refer to the <strong><a className="hover:text-blue-600" href="#api-key-auth">API Key Authentication</a></strong> section for instructions on getting your key.
        </p>
      </div>

      {/* Available Operations Table */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Available Operations
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          RNCore V2 provides full CRUD capabilities for your personal todo items:
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200/80 bg-slate-50/80 text-slate-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 font-mono">
                <tr>
                  <th className="py-3 px-4 font-semibold">Method</th>
                  <th className="py-3 px-4 font-semibold">Endpoint</th>
                  <th className="py-3 px-4 font-semibold">Description</th>
                  <th className="py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/80">
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">GET</td>
                  <td className="py-3 px-4 font-mono text-slate-900 dark:text-white">/todos</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">Get your personal todos</td>
                  <td className="px-4 py-3 text-slate-500 dark:text-zinc-500">200 OK</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">POST</td>
                  <td className="py-3 px-4 font-mono text-slate-900 dark:text-white">/todos</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">Create a new todo</td>
                  <td className="px-4 py-3 text-slate-500 dark:text-zinc-500">201 Created</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-amber-600 dark:text-amber-400">PATCH</td>
                  <td className="py-3 px-4 font-mono text-slate-900 dark:text-white">/todos/:id</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">Update an existing todo</td>
                  <td className="px-4 py-3 text-slate-500 dark:text-zinc-500">200 OK</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-rose-600 dark:text-rose-400">DELETE</td>
                  <td className="py-3 px-4 font-mono text-slate-900 dark:text-white">/todos/:id</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">Delete a todo</td>
                  <td className="px-4 py-3 text-slate-500 dark:text-zinc-500">204 No Content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Example Request Section */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Example Request
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          Here is how to fetch your personal todo data using Axios:
        </p>

        {/* Code Block Box */}
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Terminal size={14} />
              <span className="font-mono text-[11px]">fetch-v2-todos.js</span>
            </div>
            <button
              onClick={() => copyToClipboard(sampleRequestCode, setCopiedCode)}
              className="flex items-center gap-1.5 text-[11px] text-slate-400 transition hover:text-white"
            >
              {copiedCode ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-300">
            <code>{sampleRequestCode}</code>
          </pre>
        </div>
      </div>

    </section>
  );
};

export default V2PersonalApi;