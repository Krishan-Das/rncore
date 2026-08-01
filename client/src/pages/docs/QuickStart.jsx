import React, { useState } from "react";
import {
  Rocket,
  Globe,
  Key,
  Check,
  Copy,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Code2,
  Sparkles
} from "lucide-react";

const QuickStart = () => {
  const [activeTab, setActiveTab] = useState("v1");
  const [copied, setCopied] = useState(false);

  const codeExamples = {
  v1: `import axios from "axios";

// RNCore V1 — Public API (No API Key Required)
const API_URL = "https://rncore.onrender.com/api/v1/todos";

async function fetchTodos() {
  try {
    const response = await axios.get(API_URL);

    console.log(response.data);

  } catch (error) {
    console.error("Failed to fetch todos:", error);
  }
}

fetchTodos();`,

  v2: `import axios from "axios";

// RNCore V2 — Personal API (Requires API Key)
const API_KEY = "YOUR_PERSONAL_API_KEY";

const API_URL = "https://rncore.onrender.com/api/v2/" + API_KEY + "/todos";
// API_URL = "https://rncore.onrender.com/api/v2/API_KEY/todos"

const createTodo = async () => {
  try {

    const response = await axios.get(API_URL);
    console.log(response.data);

  } catch (error) {
    console.error("Failed to create todo:", error);
  }
};

createTodo();`
};

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="quickstart" className="max-w-4xl scroll-mt-24 font-sans text-slate-800 dark:text-zinc-100">
      
      {/* Top Header */}
      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
        <Rocket size={18} />
        <span className="text-xs font-bold uppercase tracking-wider">Fast Integration</span>
      </div>

      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        Quick Start
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-base">
        Connect your frontend code directly to RNCore REST API endpoints without writing backend code or configuring database drivers.
      </p>

      {/* Tab Selector Area */}
      <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
        <div className="grid grid-cols-2 gap-2">
          
          {/* Tab 1 Button */}
          <button
            onClick={() => setActiveTab("v1")}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-bold transition-all cursor-pointer ${
              activeTab === "v1"
                ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-950"
                : "text-slate-600 hover:bg-slate-300 dark:text-zinc-400 dark:hover:bg-zinc-800/90 bg-slate-200/60 dark:bg-zinc-800/60"
            }`}
          >
            <Globe size={16} className={activeTab === "v1" ? "text-emerald-400 dark:text-emerald-600" : ""} />
            <span>V1 — Public API</span>
            <span className="hidden rounded-md bg-emerald-500/20 px-1.5 py-0.5 text-[10px] text-emerald-400 dark:text-emerald-600 sm:inline-block">
              No Auth
            </span>
          </button>

          {/* Tab 2 Button */}
          <button
            onClick={() => setActiveTab("v2")}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-bold transition-all cursor-pointer ${
              activeTab === "v2"
                ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-950"
                : "text-slate-600 hover:bg-slate-300 dark:text-zinc-400 dark:hover:bg-zinc-800/90 bg-slate-200/60 dark:bg-zinc-800/60"
            }`}
          >
            <Key size={16} className={activeTab === "v2" ? "text-indigo-400 dark:text-indigo-600" : ""} />
            <span>V2 — Personal API</span>
            <span className="hidden rounded-md bg-indigo-500/20 px-1.5 py-0.5 text-[10px] text-indigo-400 dark:text-indigo-600 sm:inline-block">
              Full CRUD
            </span>
          </button>

        </div>

        {/* Tab Banner Detail */}
        <div className="mt-3 border-t border-slate-100 px-3 pt-3 dark:border-zinc-800">
          {activeTab === "v1" ? (
            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-emerald-500" />
                Ideal for learning basic HTTP calls without account registration.
              </span>
              <span className="font-mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                GET ONLY
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-indigo-500" />
                Isolated database storage per developer API key.
              </span>
              <span className="font-mono text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                GET / POST / PUT / DELETE
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Code Display Console */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
        
        {/* Console Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <Code2 size={15} className="text-indigo-400" />
            <span className="font-mono text-xs font-medium text-slate-300">
              {activeTab === "v1" ? "quickstart-v1.js" : "quickstart-v2.js"}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700/60 bg-slate-800/50 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy snippet</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-200 sm:p-5">
          <code>{codeExamples[activeTab]}</code>
        </pre>
      </div>

      {/* Highlights / Steps Footer */}
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/30">
          <span className="font-mono text-[10px] font-bold uppercase text-slate-400">Step 1</span>
          <h4 className="mt-1 text-xs font-bold text-slate-900 dark:text-white">Choose Version</h4>
          <p className="mt-0.5 text-[11px] text-slate-500 dark:text-zinc-400">Pick V1 for public practice or V2 for persistent personal apps.</p>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/30">
          <span className="font-mono text-[10px] font-bold uppercase text-slate-400">Step 2</span>
          <h4 className="mt-1 text-xs font-bold text-slate-900 dark:text-white">Copy Endpoint</h4>
          <p className="mt-0.5 text-[11px] text-slate-500 dark:text-zinc-400">Use standard fetch or Axios HTTP client tools.</p>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/30">
          <span className="font-mono text-[10px] font-bold uppercase text-slate-400">Step 3</span>
          <h4 className="mt-1 text-xs font-bold text-slate-900 dark:text-white">Build App</h4>
          <p className="mt-0.5 text-[11px] text-slate-500 dark:text-zinc-400">Integrate JSON responses into React, Flutter, or Next.js state.</p>
        </div>
      </div>

    </section>
  );
};

export default QuickStart;