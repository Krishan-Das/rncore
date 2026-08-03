import React, { useState } from 'react';
import {
  Key,
  ShieldAlert,
  Eye,
  EyeOff,
  Copy,
  Check,
  RefreshCw,
  Code2,
  Terminal,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';

export default function DevAPIKeys({ username = 'Developer' }) {
  const dispatch = useDispatch();

  const { apiKey = 'rn_live_8f92a10b4c73d29e', apiUrl = 'https://rncore.com/api/v2' } = useSelector(
    (state) => state.api || {}
  );

  const [showKey, setShowKey] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedEndpoint, setCopiedEndpoint] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [activeTab, setActiveTab] = useState('javascript');
  const [isRegenerating, setIsRegenerating] = useState(false);

  const maskedKey = apiKey ? `${apiKey.slice(0, 8)}${'•'.repeat(16)}` : '••••••••••••••••••••••••';

  const baseEndpoint = `${apiUrl}`;

  const codeSnippets = {
    javascript: `// JavaScript (Axios or Fetch)
import axios from 'axios';

const API_URL = '${baseEndpoint}';

axios.get(API_URL)
  .then(response => console.log(response.data))
  .catch(error => console.error('Error fetching data:', error));`,

    flutter: `// Flutter (http package)
import 'package:http/http.dart' as http;

final Uri apiUrl = Uri.parse('${baseEndpoint}');

void fetchData() async {
  final response = await http.get(apiUrl);
  if (response.statusCode == 200) {
    print(response.body);
  } else {
    print('Failed to load data: \${response.statusCode}');
  }
}`
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'key') {
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    } else if (type === 'endpoint') {
      setCopiedEndpoint(true);
      setTimeout(() => setCopiedEndpoint(false), 2000);
    } else if (type === 'snippet') {
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2000);
    }
  };

  const handleRegenerateKey = () => {
    if (window.confirm('Are you sure? Existing applications using this key will immediately stop working.')) {
      setIsRegenerating(true);
      setTimeout(() => {
        const newKey = 'rn_live_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        setIsRegenerating(false);
      }, 600);
    }
  };

  return (
    <div id="api-keys" className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6 font-sans text-slate-800 dark:text-zinc-100 bg-white dark:bg-zinc-950 min-h-screen scroll-mt-20">

      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              API Keys
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-200/80 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/60 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              API Active
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1">
            Manage your RNCore API access and securely connect your applications.
          </p>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">

          {/* 2. Current API Key Card */}
          <div className="p-5 rounded-xl border border-slate-200/80 bg-white dark:bg-zinc-900/50 dark:border-zinc-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Key size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                  Your API Key
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 dark:text-zinc-500 font-mono">
                Secret Key
              </span>
            </div>

            {/* Key Field & Control Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="flex-1 min-w-0 px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 font-mono text-xs font-semibold text-slate-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 flex items-center justify-between">
                <span className="truncate">{showKey ? apiKey : maskedKey}</span>
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="ml-2 text-slate-400 hover:text-slate-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors p-1"
                  title={showKey ? "Hide key" : "Show key"}
                >
                  {showKey ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopy(apiKey, 'key')}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer shadow-sm shadow-blue-500/20"
                >
                  {copiedKey ? <Check size={14} className="text-blue-200" /> : <Copy size={14} />}
                  <span>{copiedKey ? 'Copied' : 'Copy Key'}</span>
                </button>

                <button
                  onClick={handleRegenerateKey}
                  disabled={isRegenerating}
                  className="inline-flex items-center justify-center p-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors cursor-pointer"
                  title="Regenerate Key"
                >
                  <RefreshCw size={14} className={isRegenerating ? 'animate-spin text-blue-600' : ''} />
                </button>
              </div>
            </div>

            {/* Warning Message Box */}
            <div className="p-3 rounded-lg border border-amber-200/80 bg-amber-50/60 dark:border-amber-900/40 dark:bg-amber-950/20 flex items-start gap-2.5">
              <ShieldAlert size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                <strong className="font-semibold">Keep your API key private.</strong> Anyone with this key can query your API, read endpoints, and mutate data. Do not expose it in client-side public bundles.
              </p>
            </div>
          </div>

          {/* 3. API Endpoint Section */}
          <div className="p-5 rounded-xl border border-slate-200/80 bg-white dark:bg-zinc-900/50 dark:border-zinc-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                  Base API Endpoint
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 dark:text-zinc-500">
                REST V2
              </span>
            </div>

            <div className="relative group">
              <div className="w-full px-3.5 py-3 rounded-lg border border-slate-200 bg-slate-900 dark:bg-zinc-950 dark:border-zinc-800 font-mono text-xs text-blue-400 overflow-x-auto whitespace-nowrap flex items-center justify-between gap-4">
                <span className="truncate">
                  <span className="text-slate-500 dark:text-zinc-600">GET </span>
                  {baseEndpoint}
                </span>
                <button
                  onClick={() => handleCopy(baseEndpoint, 'endpoint')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[11px] font-sans font-medium transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEndpoint ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedEndpoint ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* 4. Usage Example Card */}
          <div className="p-5 rounded-xl border border-slate-200/80 bg-white dark:bg-zinc-900/50 dark:border-zinc-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                  Quick Integration Examples
                </span>
              </div>

              {/* Language Selector Tabs */}
              <div className="flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-zinc-800/80 border border-slate-200/60 dark:border-zinc-700/60">
                <button
                  onClick={() => setActiveTab('javascript')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                    activeTab === 'javascript'
                      ? 'bg-white text-blue-600 shadow-xs dark:bg-zinc-950 dark:text-blue-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200'
                  }`}
                >
                  JavaScript
                </button>
                <button
                  onClick={() => setActiveTab('flutter')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                    activeTab === 'flutter'
                      ? 'bg-white text-blue-600 shadow-xs dark:bg-zinc-950 dark:text-blue-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200'
                  }`}
                >
                  Flutter
                </button>
              </div>
            </div>

            {/* Syntax Code Display */}
            <div className="relative rounded-lg border border-slate-800 bg-slate-950 p-4 font-mono text-xs overflow-x-auto">
              <div className="absolute top-3 right-3">
                <button
                  onClick={() => handleCopy(codeSnippets[activeTab], 'snippet')}
                  className="p-1.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  title="Copy Code"
                >
                  {copiedSnippet ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                </button>
              </div>
              <pre className="text-slate-300 leading-relaxed font-mono">
                {codeSnippets[activeTab]}
              </pre>
            </div>
          </div>

        </div>

        {/* Right Sidebar (1 Col) */}
        <div className="space-y-6">

          {/* Security Tips */}
          <div className="p-5 rounded-xl border border-slate-200/80 bg-white dark:bg-zinc-900/50 dark:border-zinc-800 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-400" />
              Security Best Practices
            </h3>

            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5 text-slate-700 dark:text-zinc-300">
                <div className="mt-0.5 rounded-full p-0.5 bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 shrink-0">
                  <Check size={12} />
                </div>
                <span className="leading-normal">
                  <strong className="text-slate-900 dark:text-white font-medium">Never expose API keys</strong> in frontend public code repositories or client-side JavaScript.
                </span>
              </li>

              <li className="flex items-start gap-2.5 text-slate-700 dark:text-zinc-300">
                <div className="mt-0.5 rounded-full p-0.5 bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 shrink-0">
                  <Check size={12} />
                </div>
                <span className="leading-normal">
                  Store keys safely in <code className="px-1 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 font-mono text-[11px]">.env</code> environment variables.
                </span>
              </li>

              <li className="flex items-start gap-2.5 text-slate-700 dark:text-zinc-300">
                <div className="mt-0.5 rounded-full p-0.5 bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 shrink-0">
                  <Check size={12} />
                </div>
                <span className="leading-normal">
                  <strong className="text-slate-900 dark:text-white font-medium">Regenerate immediately</strong> if your key is accidentally leaked or committed.
                </span>
              </li>
            </ul>
          </div>

          {/* Regenerate API Key Section (Danger Zone) */}
          <div className="p-5 rounded-xl border border-rose-200/80 bg-rose-50/30 dark:bg-rose-950/10 dark:border-rose-900/40 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400">
              <AlertTriangle size={16} />
              <h3 className="text-xs font-bold uppercase tracking-wider">
                Regenerate API Key
              </h3>
            </div>

            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Generating a new key will instantly invalidate your current key. Any active frontend or backend apps using the old key will stop functioning.
            </p>

            <button
              onClick={handleRegenerateKey}
              disabled={isRegenerating}
              className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-rose-700 hover:text-rose-800 bg-white border border-rose-200 hover:bg-rose-50 dark:bg-zinc-900 dark:border-rose-900/60 dark:text-rose-400 dark:hover:bg-rose-950/50 transition-colors shadow-xs cursor-pointer"
            >
              <RefreshCw size={14} className={isRegenerating ? 'animate-spin' : ''} />
              <span>{isRegenerating ? 'Generating...' : 'Generate New API Key'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}