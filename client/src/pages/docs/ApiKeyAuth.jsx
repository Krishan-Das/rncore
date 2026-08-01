import React, { useState } from "react";
import {
  KeyRound,
  ShieldAlert,
  Copy,
  Check,
  Terminal,
  UserCheck,
  LayoutDashboard,
  ClipboardCopy,
  Info,
  Lock,
  Sparkles
} from "lucide-react";

const ApiKeyAuth = () => {
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const sampleApiKey = "rncore_live_k8f9a2b3c4d5e6f7";

  const sampleAuthCode = `import axios from "axios";

// Replace YOUR_PERSONAL_API_KEY with the key from your RNCore Dashboard
const API_KEY = "YOUR_PERSONAL_API_KEY";
const API_URL = \`https://rncore.onrender.com/api/v2/\${API_KEY}/todos\`;

const fetchMyData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Your Isolated Data:", response.data);
  } catch (error) {
    console.error("Authentication Error:", error.response?.data || error.message);
  }
};

fetchMyData();`;

  const copyToClipboard = (text, setCopiedState) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <section id="api-key-auth" className="max-w-4xl scroll-mt-24 font-sans text-slate-800 dark:text-zinc-100">
      
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <KeyRound size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">Authentication (V2 Only)</span>
        </div>
        
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          API Key Authentication
        </h2>
        
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-base">
          RNCore V2 uses personal API keys to authenticate incoming HTTP requests. Your unique API key links your frontend application directly to your private database instance so that only your account’s data is accessed and modified.
        </p>

        {/* Note about V1 */}
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-emerald-200/80 bg-emerald-50/50 px-3 py-1.5 text-xs text-emerald-800 dark:border-emerald-900/40 dark:bg-emerald-950/20 dark:text-emerald-300">
          <Info size={14} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span><strong>Note:</strong> V1 (Public API) does not require an API key. Authentication is only required when using V2.</span>
        </div>
      </div>

      {/* Section 1: What is an API Key? */}
      <div className="mt-8 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
            <Lock size={18} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              What is an API Key?
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
              An API key is a unique identifier that allows RNCore to recognize your frontend application and connect your HTTP requests directly to your personal account storage.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Getting your API Key */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Getting Your API Key
        </h3>

        {/* 3 Steps Cards */}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          
          {/* Step 1 */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 font-mono text-xs font-bold text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
              1
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
              <UserCheck size={14} className="text-indigo-500" />
              <span>Create an Account</span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-zinc-400">
              Register a free account on the official RNCore platform.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 font-mono text-xs font-bold text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
              2
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
              <LayoutDashboard size={14} className="text-indigo-500" />
              <span>Open Dashboard</span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-zinc-400">
              Navigate to your developer dashboard after signing in.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 font-mono text-xs font-bold text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
              3
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
              <ClipboardCopy size={14} className="text-indigo-500" />
              <span>Copy API Key</span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-zinc-400">
              Copy your personal key to embed in your request URLs.
            </p>
          </div>

        </div>

        {/* API Key Format Preview Box */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 font-mono text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2 truncate pr-2 text-slate-800 dark:text-zinc-200">
            <span className="text-slate-400 select-none">Sample Format:</span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">{sampleApiKey}</span>
          </div>
          <button
            onClick={() => copyToClipboard(sampleApiKey, setCopiedKey)}
            className="flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-slate-500 transition hover:bg-slate-200/60 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            aria-label="Copy sample key"
          >
            {copiedKey ? (
              <>
                <Check size={14} className="text-emerald-500" />
                <span className="text-emerald-500 font-sans text-[11px]">Copied</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span className="font-sans text-[11px]">Copy Sample</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Section 3: Using your API Key */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Using Your API Key
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          Pass your API key as part of the URL endpoint structure when sending requests using Axios or native Fetch:
        </p>

        {/* Code Block Container */}
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Terminal size={14} />
              <span className="font-mono text-[11px]">v2-auth-example.js</span>
            </div>
            <button
              onClick={() => copyToClipboard(sampleAuthCode, setCopiedCode)}
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
            <code>{sampleAuthCode}</code>
          </pre>
        </div>
      </div>

      {/* Security Best Practices */}
      <div className="mt-8 rounded-xl border border-amber-200/80 bg-amber-50/50 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">
        <div className="flex gap-3">
          <ShieldAlert size={18} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="text-xs">
            <h4 className="font-bold text-amber-900 dark:text-amber-300">
              Keep Your API Key Safe
            </h4>
            <p className="mt-0.5 leading-relaxed text-amber-800/90 dark:text-amber-400/90">
              Your API key unlocks full access to your personal storage. Avoid committing your key directly to public GitHub repositories. Use environment variables (e.g., <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-[11px] text-amber-900 dark:bg-amber-900/50 dark:text-amber-200">.env</code>) when publishing client apps.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ApiKeyAuth;