import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="text-sm font-semibold tracking-tight"
            >
              RNCore
            </Link>

            <p className="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
              A beginner-friendly REST API platform built for learning frontend
              and backend integration with real database support.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 text-xs sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                Product
              </h3>

              <div className="flex flex-col gap-2 text-zinc-500 dark:text-zinc-400">
                <Link to="/docs" className="hover:text-black dark:hover:text-white">
                  Documentation
                </Link>

                <Link to="/dashboard" className="hover:text-black dark:hover:text-white">
                  Dashboard
                </Link>

                <Link to="/api" className="hover:text-black dark:hover:text-white">
                  API
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                Resources
              </h3>

              <div className="flex flex-col gap-2 text-zinc-500 dark:text-zinc-400">
                <Link to="/privacy" className="hover:text-black dark:hover:text-white">
                  Privacy
                </Link>

                <Link to="/terms" className="hover:text-black dark:hover:text-white">
                  Terms
                </Link>

                <Link to="/status" className="hover:text-black dark:hover:text-white">
                  Status
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                Community
              </h3>

              <div className="flex flex-col gap-2 text-zinc-500 dark:text-zinc-400">
                <a
                  href="https://github.com/Krishan-Das"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 sm:flex-row">
          <p>© 2026 RNCore. All rights reserved.</p>

          <p>Built for students & frontend developers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;