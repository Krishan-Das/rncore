import { Link } from "react-router-dom";
import { RiGithubFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">

          {/* Brand Info */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 font-mono text-xs font-bold text-white">
                <img className="h-full w-full object-cover" src="/RNCore.svg" alt="RN" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                RNCore
              </span>
            </Link>

            <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-zinc-400">
              A beginner-friendly REST API platform built for learning frontend
              and backend integration with real cloud database support.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-10 text-xs sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900 dark:text-zinc-100">
                Product
              </h3>
              <div className="flex flex-col gap-2 text-slate-500 dark:text-zinc-400">
                <a className="hover:text-indigo-600 dark:hover:text-white transition" href="/#overview">
                  Documentation
                </a>
                <Link to="/dashboard" className="hover:text-indigo-600 dark:hover:text-white transition">Dashboard</Link>
                <Link to="/dashboard" className="hover:text-indigo-600 dark:hover:text-white transition">API Keys</Link>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900 dark:text-zinc-100">
                Resources
              </h3>
              <div className="flex flex-col gap-2 text-slate-500 dark:text-zinc-400">
                <Link to="/privacy-policy" className="hover:text-indigo-600 dark:hover:text-white transition">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-indigo-600 dark:hover:text-white transition">Terms of Service</Link>
                <Link to="/status" className="hover:text-indigo-600 dark:hover:text-white transition">System Status</Link>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900 dark:text-zinc-100">
                Developer
              </h3>
              <div className="flex flex-col gap-2 text-slate-500 dark:text-zinc-400">
                <a
                  href="https://github.com/Krishan-Das"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-white transition"
                >
                  <RiGithubFill />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 dark:border-zinc-800/80 dark:text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} RNCore. All rights reserved.</p>
          <p>Designed for students & frontend developers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;