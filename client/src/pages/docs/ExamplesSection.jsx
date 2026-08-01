import React, { useState } from "react";
import {
  Code2,
  Terminal,
  Copy,
  Check,
  Globe,
  Key,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowRight
} from "lucide-react";

const ExamplesSection = () => {
  const [copiedV1Axios, setCopiedV1Axios] = useState(false);
  const [copiedV1Fetch, setCopiedV1Fetch] = useState(false);
  const [copiedV2Axios, setCopiedV2Axios] = useState(false);
  const [copiedV2Fetch, setCopiedV2Fetch] = useState(false);

  const [v1Tab, setV1Tab] = useState("axios"); // "axios" | "fetch"
  const [v2Tab, setV2Tab] = useState("axios"); // "axios" | "fetch"

  // V1 Snippets
  const v1AxiosCode = `import axios from "axios";

const API_URL = "https://rncore.onrender.com/api/v1/todos";

axios.get(API_URL)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error fetching todos:", error);
  });`;

  const v1FetchCode = `const API_URL = "https://rncore.onrender.com/api/v1/todos";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching todos:", error);
  });`;

  // V2 Snippets
  const v2AxiosCode = `import axios from "axios";

// Replace with your real API key from the RNCore Dashboard
const API_KEY = "YOUR_PERSONAL_API_KEY";
const API_URL = \`https://rncore.onrender.com/api/v2/\${API_KEY}/todos\`;

// 1. Get your personal todos
axios.get(API_URL)
  .then(response => {
    console.log("My Todos:", response.data);
  });

// 2. Add a new todo item
axios.post(API_URL, {
  title: "Learn API integration with RNCore",
  isCompleted: false
})
  .then(response => {
    console.log("Created Todo:", response.data);
  });`;

  const v2FetchCode = `// Replace with your real API key from the RNCore Dashboard
const API_KEY = "YOUR_PERSONAL_API_KEY";
const API_URL = \`https://rncore.onrender.com/api/v2/\${API_KEY}/todos\`;

// 1. Get your personal todos
fetch(API_URL)
  .then(response => response.json())
  .then(data => console.log("My Todos:", data));

// 2. Add a new todo item
fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Learn API integration with RNCore",
    isCompleted: false
  })
})
  .then(response => response.json())
  .then(data => console.log("Created Todo:", data));`;

  const copyToClipboard = (text, setCopiedState) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <section id="examples" className="max-w-4xl scroll-mt-24 font-sans text-slate-800 dark:text-zinc-100">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <Code2 size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">Quickstart Code</span>
        </div>
        
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Examples
        </h2>
        
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-base">
          These examples show how to connect RNCore with your frontend application. You can use <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-800 dark:bg-zinc-800 dark:text-zinc-200">Axios</code> or the browser's native <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-800 dark:bg-zinc-800 dark:text-zinc-200">Fetch API</code> to get and save data instantly.
        </p>
      </div>

      {/* Quick Tips Box */}
      <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 dark:border-indigo-950/60 dark:bg-indigo-950/20">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400" />
          <div className="text-xs leading-relaxed text-slate-700 dark:text-zinc-300">
            <span className="font-semibold text-indigo-900 dark:text-indigo-200">How to use these snippets:</span> Copy any code block below into your React component or standard JavaScript file. Open your browser console (<kbd className="rounded border border-slate-300 bg-white px-1 font-mono text-[10px] text-slate-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">F12</kbd> or <kbd className="rounded border border-slate-300 bg-white px-1 font-mono text-[10px] text-slate-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">Cmd+Option+I</kbd>) to inspect the live response!
          </div>
        </div>
      </div>

      {/* Section 1: V1 Public API Example */}
      <div className="mt-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Globe size={16} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                V1 — Get Public Todos
              </h3>
            </div>
          </div>
          <span className="w-fit rounded-md bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            No Account Needed
          </span>
        </div>

        <p className="mt-2 text-xs text-slate-600 dark:text-zinc-400">
          Perfect for absolute beginners. Works right away in any browser without signing up or setting headers.
        </p>

        {/* Code Block with Tabs */}
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-md">
          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setV1Tab("axios")}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                  v1Tab === "axios"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Axios
              </button>
              <button
                onClick={() => setV1Tab("fetch")}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                  v1Tab === "fetch"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Fetch API
              </button>
            </div>

            <button
              onClick={() =>
                v1Tab === "axios"
                  ? copyToClipboard(v1AxiosCode, setCopiedV1Axios)
                  : copyToClipboard(v1FetchCode, setCopiedV1Fetch)
              }
              className="flex items-center gap-1.5 text-[11px] text-slate-400 transition hover:text-white"
            >
              {(v1Tab === "axios" ? copiedV1Axios : copiedV1Fetch) ? (
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

          {/* Code Content */}
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-300">
            <code>{v1Tab === "axios" ? v1AxiosCode : v1FetchCode}</code>
          </pre>
        </div>
      </div>

      {/* Section 2: V2 Personal API Example */}
      <div className="mt-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Key size={16} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                V2 — Personal API (Read & Write)
              </h3>
            </div>
          </div>
          <span className="w-fit rounded-md bg-indigo-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
            API Key Required
          </span>
        </div>

        <p className="mt-2 text-xs text-slate-600 dark:text-zinc-400">
          Use your unique API key to save personal items to your database instance and perform complete CRUD actions.
        </p>

        {/* Code Block with Tabs */}
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-md">
          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setV2Tab("axios")}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                  v2Tab === "axios"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Axios
              </button>
              <button
                onClick={() => setV2Tab("fetch")}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                  v2Tab === "fetch"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Fetch API
              </button>
            </div>

            <button
              onClick={() =>
                v2Tab === "axios"
                  ? copyToClipboard(v2AxiosCode, setCopiedV2Axios)
                  : copyToClipboard(v2FetchCode, setCopiedV2Fetch)
              }
              className="flex items-center gap-1.5 text-[11px] text-slate-400 transition hover:text-white"
            >
              {(v2Tab === "axios" ? copiedV2Axios : copiedV2Fetch) ? (
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

          {/* Code Content */}
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-300">
            <code>{v2Tab === "axios" ? v2AxiosCode : v2FetchCode}</code>
          </pre>
        </div>
      </div>

      {/* Summary Steps */}
      <div className="mt-10 rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          3 Steps to Get Started
        </h4>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-mono text-[11px] font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              1
            </span>
            <p className="text-xs text-slate-600 dark:text-zinc-400">
              Copy either the <strong>Axios</strong> or <strong>Fetch</strong> snippet above.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-mono text-[11px] font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              2
            </span>
            <p className="text-xs text-slate-600 dark:text-zinc-400">
              Paste it into your project or code sandbox file.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-mono text-[11px] font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              3
            </span>
            <p className="text-xs text-slate-600 dark:text-zinc-400">
              Run your script and check your browser dev console!
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ExamplesSection;