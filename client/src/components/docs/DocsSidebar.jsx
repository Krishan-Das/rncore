import { AlertTriangle, BookOpen, Code2, Database, FileJson, Globe, KeyRound, Layers, Rocket, Server, UserRound } from "lucide-react";
import { useEffect, useState } from "react";


const DocsSidebar = () => {

  const [active, setActive] = useState("overview");

  // scrool set active
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-slate-200/80 bg-white/50 p-6 hidden lg:block overflow-y-auto dark:border-zinc-800 dark:bg-zinc-950/50">
      <nav className="space-y-8">

        {/* ===== Getting Started Section ===== */}
        <div>
          <h3 className="px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
            Getting Started
          </h3>
          <ul className="mt-3 space-y-1">

            <li>
              <a
                href="#overview"
                onClick={() => setActive("overview")}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs transition ${active === "overview"
                    ? "bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                    : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                <BookOpen size={15} />
                Overview
              </a>
            </li>

            <li>
              <a
                href="#quickstart"
                onClick={() => setActive("quickstart")}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs transition ${active === "quickstart"
                    ? "bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                    : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                <Rocket size={15} />
                Quick Start
              </a>
            </li>

            <li>
              <a
                href="#api-key-auth"
                onClick={() => setActive("api-key-auth")}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs transition ${active === "api-key-auth"
                    ? "bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                    : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                <KeyRound size={15} />
                API Key Authentication
              </a>
            </li>
          </ul>
        </div>

        {/* ===== API Reference Section ===== */}
        <div>
          <h3 className="px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
            API Reference
          </h3>
          <ul className="mt-3 space-y-1">
            <li>
              <a
                href="#v1-api"
                onClick={() => setActive("v1-api")}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs transition ${active === "v1-api"
                    ? "bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                    : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                <Globe size={15} />
                  V1 Public API
              </a>
            </li>
            
            <li>
              <a
                href="#v2-api"
                onClick={() => setActive("v2-api")}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs transition ${active === "v2-api"
                    ? "bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                    : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                <UserRound size={15} />
                V2 Personal API
              </a>
            </li>
            
          </ul>
        </div>


        {/* ===== Resources Section ===== */}
        <div>
          <h3 className="px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
            Resources
          </h3>
          <ul className="mt-3 space-y-1">
            <li>
              <a
                href="#response-format"
                onClick={() => setActive("response-format")}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs transition ${active === "response-format"
                    ? "bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                    : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                <FileJson size={15} />
                  Response Format
              </a>
            </li>
            
            <li>
              <a
                href="#error-handling"
                onClick={() => setActive("error-handling")}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs transition ${active === "error-handling"
                    ? "bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                    : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                <AlertTriangle size={15} />
                Error Handling
              </a>
            </li>

            <li>
              <a
                href="#examples"
                onClick={() => setActive("examples")}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs transition ${active === "examples"
                    ? "bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                    : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                <Code2 size={15} />
                Examples
              </a>
            </li>

            <li>
              <a
                href="#architecture"
                onClick={() => setActive("architecture")}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs transition ${active === "architecture"
                    ? "bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
                    : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
              >
                <Server size={15} />
                Architecture
              </a>
            </li>
            
          </ul>
        </div>

      </nav>
    </aside>
  );
};

export default DocsSidebar;