import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  RiGithubFill,
  RiArrowDownSLine,
  RiMenu3Line,
  RiCloseLine,
  RiLayoutGridLine,
  RiBookOpenLine,
  RiCodeSSlashLine,
  RiLogoutBoxRLine
} from "react-icons/ri";
import ThemeToggle from "../common/ThemeToggle";
import { useDispatch, useSelector } from "react-redux";

import { logout as logoutAction } from "../../features/auth/authSlice.js";
import { clearApiData } from "../../features/api/apiSlice.js";
import { logout as logoutApi } from "../../features/auth/authService.js";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user);

  // States
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const dropdownRef = useRef(null);

  const links = [
    { name: "Docs", path: "/#quickstart", sectionId: "quickstart" },
    { name: "API Reference", path: "/#v1-api", sectionId: "v1-api" },
    { name: "Dashboard", path: "/dashboard", sectionId: null },
  ];

  // Outside click handler for dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e, link) => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
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

  const handleLogout = async () => {
    try {
      setLoading(true);
      setLoggingOut(true);
      setIsDropdownOpen(false);
      

      const res = await logoutApi();
      dispatch(logoutAction())
      dispatch(clearApiData())

      toast.success(res?.data?.message || "Logged out successfully!");
      navigate("/", { replace: true });

    } catch (error) {
      console.error("Logout failed:", error);

      const errorMessage =
        error.response?.data?.message || "Logout failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoggingOut(false);
      setLoading(false);
    }
  };

  const getInitial = () => {
    if (user?.name) return user.name.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return "U";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center overflow-hidden rounded-lg bg-indigo-600 font-mono font-bold text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
              <img className="h-full w-full object-cover" src="/RNCore.svg" alt="RN" />
            </div>
            <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white">
              RNCore <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-400">v2</span>
            </span>
          </Link>

          <span className="hidden h-4 w-px bg-slate-200 lg:inline-block dark:bg-zinc-800"></span>

          {/* Status Badge */}
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 lg:inline-flex dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-400">
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

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">

          {/* AUTH SECTION */}
          {!user ? (
            <>
              {/* Unauthenticated: Desktop Only Links */}
              <div className="hidden md:flex items-center gap-2">
                <ThemeToggle />
                <a
                  href="https://github.com/Krishan-Das/rncore"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-2xs transition hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  <RiGithubFill className="text-sm" />
                  <span>GitHub</span>
                </a>
                <Link
                  to="/login"
                  className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-indigo-700"
                >
                  Get Started
                </Link>
              </div>

              {/* Unauthenticated: Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <RiCloseLine className="text-lg" /> : <RiMenu3Line className="text-lg" />}
              </button>
            </>
          ) : (
            /* Authenticated: Mobile & Desktop - Avatar Dropdown */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1.5 rounded-full p-1 transition hover:bg-slate-100 dark:hover:bg-zinc-800 cursor-pointer"
                disabled={loggingOut}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white shadow-xs">
                  {getInitial()}
                </div>
                <RiArrowDownSLine
                  className={`text-base text-slate-600 transition-transform duration-200 dark:text-zinc-400 ${isDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Profile Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-60 rounded-xl border border-slate-200/90 bg-white p-1.5 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                  {/* User Info Header */}
                  <div className="border-b border-slate-100 px-3 py-2 dark:border-zinc-800">
                    <p className="truncate text-xs font-semibold text-slate-900 dark:text-white">
                      {user.name || "User"}
                    </p>
                    <p className="truncate text-[11px] text-slate-500 dark:text-zinc-400">
                      {user.email}
                    </p>
                  </div>

                  {/* Navigation Links - Mobile-Only (md:hidden) */}
                  <div className="py-1 border-b border-slate-100 dark:border-zinc-800 md:hidden space-y-0.5">
                    <Link
                      to="/#quickstart"
                      onClick={(e) => handleNavClick(e, links[0])}
                      className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    >
                      <RiBookOpenLine className="text-sm text-slate-400" />
                      <span>Docs</span>
                    </Link>

                    <Link
                      to="/#v1-api"
                      onClick={(e) => handleNavClick(e, links[1])}
                      className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    >
                      <RiCodeSSlashLine className="text-sm text-slate-400" />
                      <span>API Reference</span>
                    </Link>
                  </div>

                  {/* Common Links (Console & GitHub) */}
                  <div className="py-1">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    >
                      <RiLayoutGridLine className="text-sm text-slate-400" />
                      <span>Console Dashboard</span>
                    </Link>

                    <a
                      href="https://github.com/Krishan-Das/rncore"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    >
                      <RiGithubFill className="text-sm text-slate-400" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>

                  {/* Theme Switcher Inside Dropdown */}
                  <div className="border-t border-slate-100 px-3 py-2 flex items-center justify-between dark:border-zinc-800">
                    <span className="text-xs font-medium text-slate-600 dark:text-zinc-400">Theme</span>
                    <ThemeToggle />
                  </div>

                  {/* Logout Button */}
                  <div className="border-t border-slate-100 pt-1 dark:border-zinc-800">
                    <button
                      onClick={handleLogout}
                      disabled={loggingOut}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40 cursor-pointer"
                    >
                      <RiLogoutBoxRLine className="text-sm" />
                      <span>{loggingOut ? "Logging out..." : "Logout"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE DRAWER (Only rendered when user is NOT logged in) */}
      {!user && isMobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white/95 px-4 pb-4 pt-3 backdrop-blur-md md:hidden dark:border-zinc-800 dark:bg-zinc-950/95 space-y-3">
          <Link
            to="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-indigo-700"
          >
            Get Started
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Bottom Actions Bar */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-3 dark:border-zinc-800">
            <a
              href="https://github.com/Krishan-Das/rncore"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              <RiGithubFill className="text-sm" />
              <span>GitHub</span>
            </a>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-zinc-400">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;