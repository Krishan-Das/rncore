import React, { useState } from "react";
import {
  Globe,
  Terminal,
  Copy,
  Check,
  CheckCircle2,
  Sparkles,
  Link2,
  ListTodo
} from "lucide-react";

const V1PublicApi = () => {
  const [copiedBaseUrl, setCopiedBaseUrl] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const baseUrl = "https://rncore.onrender.com/api/v1";

  const sampleRequestCode = `import axios from "axios";

const API_URL = "https://rncore.onrender.com/api/v1/todos";

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
    <section id="v1-api" className="max-w-4xl scroll-mt-24 font-sans text-slate-800 dark:text-zinc-100">
      
      {/* Top Badge & Section Header */}
      <div>
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
          <Globe size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">Public Access</span>
        </div>
        
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          RNCore V1 — Public API
        </h2>
        
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-base">
          RNCore V1 provides a simple, open-access REST API for frontend developers. Connect your React, Next.js, Vue, or Flutter application directly to practice data fetching and HTTP requests without creating an account or managing authentication.
        </p>
      </div>

      {/* Feature Badges */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        {[
          "No Account Required",
          "No API Key Needed",
          "Instant Public Access",
          "Beginner Friendly"
        ].map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50/50 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300"
          >
            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
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
          All V1 public endpoints are prefixed with the following base path:
        </p>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 font-mono text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2 truncate pr-2 text-slate-800 dark:text-zinc-200">
            <Link2 size={15} className="text-slate-400 shrink-0" />
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{baseUrl}</span>
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

      {/* Available Endpoints Section */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Available Endpoint
        </h3>

        <div className="mt-3 rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="rounded-md bg-emerald-100 px-2.5 py-1 font-mono text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                GET
              </span>
              <code className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                /todos
              </code>
            </div>
            <div className="flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">
              <ListTodo size={13} />
              <span>Collection</span>
            </div>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
            Fetch all available todo data from the public API. Returns an array of sample todo items suitable for rendering lists and practicing client-side data handling.
          </p>
        </div>
      </div>

      {/* Example Request Section */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Example Request
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          Here is how to request public todo data using Axios in JavaScript:
        </p>

        {/* Code Block Box */}
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Terminal size={14} />
              <span className="font-mono text-[11px]">fetch-v1-todos.js</span>
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

export default V1PublicApi;