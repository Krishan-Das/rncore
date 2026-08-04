import React, { useEffect, useState, useRef } from 'react';
import {
  Sun, Moon, LogOut, Key, Home, ChevronDown
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from "../components/Loader/CircularProgress.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authService.js';
import Loader from '../components/Loader/Loader.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

import DevAPIKeys from "./developerDashboard/DevAPIKeys.jsx";
import DevSidebar from '../components/docs/DevSidebar.jsx';

import { logout as logoutAction } from "../features/auth/authSlice.js";
import { logout as logoutApi } from "../features/auth/authService.js";
import {clearApiData} from "../features/api/apiSlice.js"
import toast from "react-hot-toast";

export default function DeveloperDashboard() {
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const user = useSelector((state) => state.auth.user);

  const logoutHandler = async () => {
    try {
      setLoading(true);

      // 1. Backend Logout API Call
      const res = await logoutApi();

      // 2. Redux State Reset (authSlice)
      dispatch(logoutAction());
      dispatch(clearApiData());

      toast.success(res?.data?.message || "Logged out successfully!");
      navigate("/", { replace: true });

    } catch (error) {
      console.error("Logout failed:", error);

      const errorMessage =
        error.response?.data?.message || "Logout failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const [activeSection, setActiveSection] = useState("overview");

  // Outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-200 bg-slate-50 text-slate-800 dark:bg-zinc-950 dark:text-zinc-100">
      {loading && <Loader />}

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 h-16 border-b px-4 sm:px-6 flex items-center justify-between transition-colors bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-slate-200 dark:border-zinc-800">

        {/* Left Side: Brand Logo & Status Badge */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-indigo-600 font-mono font-bold text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
              <img className="h-full w-full object-cover" src="/RNCore.svg" alt="RN" />
            </div>
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
              RNCore <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">v2</span>
            </span>
          </Link>

          <span className="hidden h-4 w-px sm:inline-block bg-slate-200 dark:bg-zinc-800"></span>

          {/* Status Badge */}
          <span className="hidden items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-bold sm:inline-flex border-emerald-200/80 bg-emerald-50 text-emerald-800 dark:border-emerald-950 dark:bg-emerald-950/80 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
            DEVELOPER CONSOLE
          </span>
        </div>

        {/* Right Side Controls - Avatar Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 p-1.5 rounded-full border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800/80 transition cursor-pointer shadow-2xs"
            aria-label="User Menu"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-indigo-600 text-white shrink-0 shadow-xs">
              {user ? (
                <span>{user.email.charAt(0).toUpperCase()}</span>
              ) : (
                <CircularProgress size={18} />
              )}
            </div>

            <span className="hidden md:inline-block text-xs font-semibold text-slate-700 dark:text-zinc-200 max-w-[120px] truncate">
              {user?.name || user?.email?.split('@')[0] || "User"}
            </span>

            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Responsive Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-xl py-2 z-50 transition-all animate-in fade-in slide-in-from-top-2 duration-150">

              {/* User Details Section */}
              <div className="px-4 py-2.5 border-b border-slate-100 dark:border-zinc-800/80">
                <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                  {user?.name || "Developer Account"}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate mt-0.5">
                  {user?.email || "Loading..."}
                </p>
              </div>

              {/* Navigation Links - ONLY Mobile Screen (md:hidden) */}
              <div className="p-1 border-b border-slate-100 dark:border-zinc-800/80 md:hidden space-y-0.5">
                <Link
                  to="/"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/80 transition"
                >
                  <Home className="w-4 h-4 text-slate-400 dark:text-zinc-500" />
                  <span>Go to Home</span>
                </Link>

                <a
                  href="#api-keys"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/80 transition"
                >
                  <Key className="w-4 h-4 text-slate-400 dark:text-zinc-500" />
                  <span>API Keys</span>
                </a>
              </div>

              {/* Theme Toggle Button (Both Mobile & Desktop) */}
              <div className="p-1">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/80 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    {theme === "dark" ? (
                      <Sun className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Moon className="w-4 h-4 text-slate-500" />
                    )}
                    <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500">
                    {theme}
                  </span>
                </button>
              </div>

              <div className="my-1 border-t border-slate-100 dark:border-zinc-800/80" />

              {/* Logout Action (Both Mobile & Desktop) */}
              <div className="p-1">
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    logoutHandler();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </header>

      {/* Main Container */}
      <div className="flex flex-1 relative">

        {/* Sticky Sidebar (Desktop Only: hidden on mobile/small screens) */}
        <aside className="hidden md:block sticky top-16 w-64 h-[calc(100vh-4rem)] shrink-0 overflow-y-auto border-r border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 transition-colors">
          <DevSidebar activeSection={activeSection} />
        </aside>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-6xl w-full mx-auto space-y-6 sm:space-y-8 overflow-x-hidden">

          <section id="api-keys">
            <DevAPIKeys />
          </section>

        </main>
      </div>
    </div>
  );
}