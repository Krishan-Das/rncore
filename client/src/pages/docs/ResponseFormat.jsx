import React, { useState } from "react";
import {
  Braces,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  FileJson,
  Layers,
  Sparkles
} from "lucide-react";

const ResponseFormat = () => {
  const [copiedJson, setCopiedJson] = useState(false);

  const sampleJsonResponse = `{
  "_id": "64f8a1",
  "title": "Learn React API Integration",
  "isCompleted": false,
  "userId": "65ab92",
  "createdAt": "2026-08-01T10:30:00.000Z",
  "updatedAt": "2026-08-01T10:30:00.000Z"
}`;

  const copyToClipboard = (text, setCopiedState) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <section id="response-format" className="max-w-4xl scroll-mt-24 font-sans text-slate-800 dark:text-zinc-100">

      {/* Top Badge & Section Header */}
      <div>
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <Braces size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">Data Payload</span>
        </div>

        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Response Format
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-base">
          All RNCore API endpoints return data formatted in standardized JSON (JavaScript Object Notation). JSON is the standard lightweight format for transferring data between backend services and modern frontend applications.
        </p>
      </div>

      {/* Feature Badges */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        {[
          "Standard JSON Output",
          "Easy UI Binding",
          "Consistent Data Schema",
          "ISO Timestamp Standard"
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

      {/* Section 1: Successful Response */}
      <div className="mt-10">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
            Successful Response
          </h3>
        </div>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          When an API request succeeds, RNCore responds with a <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[11px] font-semibold text-emerald-600 dark:bg-zinc-800 dark:text-emerald-400">200 OK</code> or <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[11px] font-semibold text-emerald-600 dark:bg-zinc-800 dark:text-emerald-400">201 Created</code> HTTP status code along with the requested object:
        </p>

        {/* JSON Code Display Box */}
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <FileJson size={14} className="text-indigo-400" />
              <span className="font-mono text-[11px]">response.json</span>
            </div>
            <button
              onClick={() => copyToClipboard(sampleJsonResponse, setCopiedJson)}
              className="flex items-center gap-1.5 text-[11px] text-slate-400 transition hover:text-white"
            >
              {copiedJson ? (
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
            <code>{sampleJsonResponse}</code>
          </pre>
        </div>
      </div>

      {/* Field Definitions Table */}
      <div className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Response Field Schema
        </h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
          Understanding the data properties returned in every todo item object:
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200/80 bg-slate-50/80 text-slate-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 font-mono">
                <tr>
                  <th className="py-3 px-4 font-semibold">Field</th>
                  <th className="py-3 px-4 font-semibold">Type</th>
                  <th className="py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/80">
                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    _id
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-500 dark:text-zinc-400">
                    string
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">
                    Unique MongoDB identifier for the todo item
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    title
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-500 dark:text-zinc-400">
                    string
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">
                    The name or description of the todo
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    isCompleted
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-500 dark:text-zinc-400">
                    boolean
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">
                    Indicates whether the todo is completed or pending
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    userId
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-500 dark:text-zinc-400">
                    string
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">
                    Owner of the todo item (V2 only)
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    createdAt
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-500 dark:text-zinc-400">
                    string (ISO 8601)
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">
                    Time when the todo was created
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    updatedAt
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-500 dark:text-zinc-400">
                    string (ISO 8601)
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-zinc-300">
                    Time when the todo was last updated
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ResponseFormat;