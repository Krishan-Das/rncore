import { Link } from "react-router-dom";
import { RiGithubFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        
        {/* Main Content Area */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">

          {/* Brand Info */}
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 font-mono text-xs font-bold text-white shadow-sm">
                <img className="h-full w-full object-cover rounded" src="/RNCore.svg" alt="RN" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                RNCore
              </span>
            </Link>

            <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-zinc-400">
              A beginner-friendly REST API platform built for learning frontend
              and backend integration with real cloud database support.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 text-xs sm:grid-cols-3 sm:gap-10">
            
            {/* Column 1: Product */}
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900 dark:text-zinc-100">
                Product
              </h3>
              <ul className="space-y-2 text-slate-500 dark:text-zinc-400">
                <li>
                  <a className="transition-colors hover:text-indigo-600 dark:hover:text-white" href="/#overview">
                    Documentation
                  </a>
                </li>
                <li>
                  <Link to="/dashboard" className="transition-colors hover:text-indigo-600 dark:hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="transition-colors hover:text-indigo-600 dark:hover:text-white">
                    API Keys
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900 dark:text-zinc-100">
                Resources
              </h3>
              <ul className="space-y-2 text-slate-500 dark:text-zinc-400">
                <li>
                  <Link to="/privacy-policy" className="transition-colors hover:text-indigo-600 dark:hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="transition-colors hover:text-indigo-600 dark:hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/status" className="transition-colors hover:text-indigo-600 dark:hover:text-white">
                    System Status
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Developer */}
            <div className="col-span-2 sm:col-span-1 space-y-3">
              <h3 className="font-semibold text-slate-900 dark:text-zinc-100">
                Developer
              </h3>
              <ul className="space-y-2 text-slate-500 dark:text-zinc-400">
                <li>
                  <a
                    href="https://github.com/Krishan-Das"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-indigo-600 dark:hover:text-white"
                  >
                    <RiGithubFill className="text-sm" />
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-400 dark:border-zinc-800/80 dark:text-zinc-500 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} RNCore. All rights reserved.</p>
          <p>Designed for students & frontend developers.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;