import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiGithubFill, RiArrowDownSLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import ThemeToggle from "../common/ThemeToggle";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  // States
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Docs", path: "/#quickstart", sectionId: "quickstart" },
    { name: "API Reference", path: "/#v1-api", sectionId: "v1-api" },
    { name: "Dashboard", path: "/dashboard", sectionId: null },
  ];

  const handleNavClick = (e, link) => {
    setIsMobileMenuOpen(false); // Close mobile menu on click
    if (link.sectionId) {
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(link.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", link.path);
        }
      } else {
        navigate(link.path);
      }
    }
  };

  const getInitial = () => {
    if (user?.name) return user.name.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return "U";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Status */}
        <div className="flex items-center gap-3 sm:gap-6">
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

        {/* Desktop Navigation Links */}
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

        {/* Right Action Buttons / User Menu */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {!user ? (
            // User Logged Out: Show default actions
            <>
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>
              
              <a
                href="https://github.com/Krishan-Das/rncore"
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 sm:flex dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <RiGithubFill className="text-sm" />
                <span>GitHub</span>
              </a>

              <Link
                to="/login"
                className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-700 sm:px-3.5"
              >
                Get Started
              </Link>
            </>
          ) : (
            // User Logged In: Show Avatar Dropdown
            <div className="relative">
              {/* Avatar Trigger Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1.5 rounded-full p-1 transition hover:bg-slate-100 focus:outline-none dark:hover:bg-zinc-800"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white shadow-sm">
                  {getInitial()}
                </div>
                <RiArrowDownSLine
                  className={`text-lg text-slate-600 transition-transform duration-200 dark:text-zinc-400 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* User Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  />

                  <div className="absolute right-0 z-20 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="border-b border-slate-100 px-3 py-2 dark:border-zinc-800">
                      <p className="truncate text-xs font-medium text-slate-900 dark:text-white">
                        {user.name || "User"}
                      </p>
                      <p className="truncate text-[11px] text-slate-500 dark:text-zinc-400">
                        {user.email}
                      </p>
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-700 dark:text-zinc-300">
                      <span>Theme</span>
                      <ThemeToggle />
                    </div>

                    <a
                      href="https://github.com/Krishan-Das/rncore"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <RiGithubFill className="text-base" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <RiCloseLine className="text-xl" /> : <RiMenu3Line className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {!user && (
            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-zinc-800">
              <span className="text-xs font-medium text-slate-600 dark:text-zinc-400">Theme</span>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <a
                  href="https://github.com/Krishan-Das/rncore"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  <RiGithubFill className="text-sm" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;