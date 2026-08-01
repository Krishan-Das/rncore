import React, { useState } from "react";
import {
  AlertTriangle,
  Check,
  Copy,
  FileJson,
  HelpCircle,
  Info,
  ShieldAlert,
  Sparkles,
  Terminal
} from "lucide-react";

const ErrorHandling = () => {
  const [copiedErrorJson, setCopiedErrorJson] = useState(false);

  const sampleErrorJsonResponse = `{
  "success": false,
  "message": "Todo not found"
}`;

  const copyToClipboard = (text, setCopiedState) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <section id="error-handling" className="max-w-4xl scroll-mt-24 font-sans text-slate-800 dark:text-zinc-100">
      
      {/* Top Badge & Section Header */}
      <div>
        <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
          <AlertTriangle size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">Troubleshooting</span>
        </div>
        
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Error Handling
        </h2>
        
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-base">
          When an API request fails, RNCore returns an HTTP status code along with a descriptive JSON payload. Status codes help you quickly determine whether an issue was caused by client-side request data, authentication, or server-side issues.
        </p>

        {/* Informational Callout */}
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-amber-200/80 bg-amber-50/50 px-3.5 py-2 text-xs text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-300">
          <Info size={15} className="shrink-0 text-amber-600 dark:text-amber-400" />
          <span>
            <strong>Pro Tip:</strong> Always examine both the HTTP status code and the returned <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-[11px] text-amber-950 dark:bg-amber-900/50 dark:text-amber-200">message</code> field when debugging failed API calls.
          </span>
        </div>
      </div>

      {/* Section 1: Common Error Responses Table */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Common Error Responses
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          Below is a summary of standard HTTP error status codes returned across V1 and V2 endpoints:
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200/80 bg-slate-50/80 text-slate-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 font-mono">
                <tr>
                  <th className="py-3 px-4 font-semibold">Status Code</th>
                  <th className="py-3 px-4 font-semibold">Meaning</th>
                  <th className="py-3 px-4 font-semibold">Description</th>
                  <th className="py-3 px-4 font-semibold">Applies To</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/80">
                
                {/* 400 Bad Request */}
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-amber-600 dark:text-amber-400">400</td>
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Bad Request</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">Invalid data or payload format was sent with the request.</td>
                  <td className="py-3 px-4">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-300">
                      V1 + V2
                    </span>
                  </td>
                </tr>

                {/* 401 Unauthorized */}
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-rose-600 dark:text-rose-400">401</td>
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Unauthorized</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">Invalid, revoked, or missing API key in the URL path.</td>
                  <td className="py-3 px-4">
                    <span className="rounded-md bg-indigo-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300">
                      V2 only
                    </span>
                  </td>
                </tr>

                {/* 403 Forbidden */}
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-rose-600 dark:text-rose-400">403</td>
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Forbidden</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">The request is not permitted or exceeds current permissions.</td>
                  <td className="py-3 px-4">
                    <span className="rounded-md bg-indigo-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300">
                      V2 only
                    </span>
                  </td>
                </tr>

                {/* 404 Not Found */}
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-amber-600 dark:text-amber-400">404</td>
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Not Found</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">The requested resource or endpoint route does not exist.</td>
                  <td className="py-3 px-4">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-300">
                      V1 + V2
                    </span>
                  </td>
                </tr>

                {/* 500 Internal Server Error */}
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-rose-600 dark:text-rose-400">500</td>
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Internal Server Error</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">An unexpected error occurred on the server side. Try again later.</td>
                  <td className="py-3 px-4">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-300">
                      V1 + V2
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 2: Example Error Response */}
      <div className="mt-10">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-rose-600 dark:text-rose-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
            Example Error Response
          </h3>
        </div>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          When an error occurs, RNCore returns a structured JSON payload containing a <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[11px] text-slate-800 dark:bg-zinc-800 dark:text-zinc-200">success: false</code> status indicator and a human-readable explanation:
        </p>

        {/* JSON Code Display Box */}
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <FileJson size={14} className="text-rose-400" />
              <span className="font-mono text-[11px]">error-response.json</span>
            </div>
            <button
              onClick={() => copyToClipboard(sampleErrorJsonResponse, setCopiedErrorJson)}
              className="flex items-center gap-1.5 text-[11px] text-slate-400 transition hover:text-white"
            >
              {copiedErrorJson ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy Payload</span>
                </>
              )}
            </button>
          </div>

          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-200">
            <code>{sampleErrorJsonResponse}</code>
          </pre>
        </div>
      </div>

    </section>
  );
};

export default ErrorHandling;