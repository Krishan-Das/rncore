import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiGithubFill } from "react-icons/ri";
import ThemeToggle from "../common/ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: "Docs", path: "/#quickstart", sectionId: "quickstart" },
    { name: "API Reference", path: "/#v1-api", sectionId: "v1-api" },
    { name: "Dashboard", path: "/dashboard", sectionId: null },
  ];

  // Click Handler for section scrolling
  const handleNavClick = (e, link) => {
    if (link.sectionId) {
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(link.sectionId);
        if (element) {
          element.scrollIntoView();
          window.history.pushState(null, "", link.path);
        }
      } else {
        navigate(link.path);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-indigo-600 font-mono font-bold text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
              <img className="h-full w-full object-cover" src="/RNCore.svg" alt="RN" />
            </div>
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
              RNCore <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">v2</span>
            </span>
          </Link>

          <span className="hidden h-4 w-px bg-slate-200 sm:inline-block dark:bg-zinc-800"></span>

          {/* Status Badge */}
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 md:inline-flex dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
            Operational
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => handleNavClick(e, link)}
              className="text-xs font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="https://github.com/Krishan-Das/rncore"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <RiGithubFill className="text-sm" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <Link
            to="/login"
            className="rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;