import React, { useEffect, useState } from 'react';
import {
  Sun, Moon, LogOut, Menu, X, User as UserIcon
} from 'lucide-react';
import { useSelector } from 'react-redux';
import CircularProgress from "../components/Loader/CircularProgress.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authService.js';
import Loader from '../components/Loader/Loader.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

import DevAPIKeys from "./developerDashboard/DevAPIKeys.jsx";
import DevOverview from './developerDashboard/DevOverview.jsx';
import DevSidebar from '../components/docs/DevSidebar.jsx';

export default function DeveloperDashboard() {
  const [loading, setLoading] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const logoutHandler = async () => {
    try {
      setLoading(true);
      await logout();
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const [activeSection, setActiveSection] = useState("overview");

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
          <span className="hidden items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-bold md:inline-flex border-emerald-200/80 bg-emerald-50 text-emerald-800 dark:border-emerald-950 dark:bg-emerald-950/80 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
            DEVELOPER CONSOLE
          </span>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3">
          
          {/* Desktop Only User & Theme controls */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border transition-colors border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-zinc-800 dark:text-amber-400 dark:hover:bg-zinc-800 cursor-pointer"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <div className="flex items-center gap-2.5 text-sm border-r pr-4 border-slate-200 dark:border-zinc-800">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-medium bg-slate-200 text-slate-700 dark:bg-zinc-800 dark:text-zinc-200 shrink-0">
                {user ? <span className='text-base font-bold'>{user.email.charAt(0).toUpperCase()}</span> : <CircularProgress size={20} />}
              </div>

              <span className="font-medium text-slate-700 dark:text-zinc-300 max-w-[160px] truncate">
                {user?.email || "Loading..."}
              </span>
            </div>

            <button 
              onClick={logoutHandler} 
              className="flex items-center gap-1.5 text-sm transition-colors cursor-pointer text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Navigation Toggle Icon */}
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 md:hidden dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-1 relative">

        {/* Mobile Backdrop Overlay */}
        {isMobileSidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Clean Desktop & Responsive Mobile Sidebar Drawer Container */}
        <aside className={`
          fixed md:sticky top-16 inset-y-0 right-0 md:left-0 z-50 md:z-auto
          w-72 md:w-64 h-[calc(100vh-4rem)] flex flex-col justify-between shrink-0
          bg-white dark:bg-zinc-900 border-l md:border-l-0 md:border-r border-slate-200 dark:border-zinc-800
          transform transition-transform duration-300 ease-in-out md:transform-none
          ${isMobileSidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `}>
          
          {/* Upper Navigation Area */}
          <div className="flex-1 overflow-y-auto p-4">
            <DevSidebar activeSection={activeSection} onSelect={() => setIsMobileSidebarOpen(false)} />
          </div>

          {/* Bottom Panel: Mobile Only User Profile and Action buttons */}
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/50 space-y-3 md:hidden">
            
            {/* User Profile Card */}
            <div className="flex items-center gap-3 p-2 rounded-lg bg-white dark:bg-zinc-800/60 border border-slate-200/60 dark:border-zinc-800 shadow-xs">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold bg-indigo-600 text-white shrink-0">
                {user ? user.email.charAt(0).toUpperCase() : <UserIcon className="w-4 h-4" />}
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                  {user?.name || "Developer"}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                  {user?.email || "loading..."}
                </span>
              </div>
            </div>

            {/* Mobile Actions: Theme Switcher & Logout */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border text-xs font-medium border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700/80 transition cursor-pointer"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-slate-600" />
                    <span>Dark</span>
                  </>
                )}
              </button>

              <button
                onClick={logoutHandler}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-red-50 text-red-600 border border-red-200/60 hover:bg-red-100 dark:bg-red-950/30 dark:text-red-400 dark:border-red-900/50 dark:hover:bg-red-900/40 transition cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>

          </div>
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