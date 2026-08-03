import React, { useEffect, useState } from 'react';
import {
  Key, BookOpen, Settings, LayoutDashboard, Copy, Check,
  ExternalLink, ShieldAlert, CheckCircle2, Database, LogOut,
  Eye, EyeOff, Sun, Moon, Link as LinkIcon
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
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [baseUrl, setBaseUrl] = useState("https://rncore.com/api/v2");

  const { theme, toggleTheme } = useTheme();

  const apiKey = "rn_live_8f92a10b4c73d29e";
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(`${baseUrl}/${apiKey}`);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

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

      {/* Top Navbar (Sticky) */}
      <header className="sticky top-0 z-50 h-16 border-b px-6 flex items-center justify-between transition-colors bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-slate-200 dark:border-zinc-800">
        <div className="logo flex items-center gap-3">
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

        <div className="flex items-center gap-4">
          {/* Global Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border transition-colors border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-zinc-800 dark:text-amber-400 dark:hover:bg-zinc-800 cursor-pointer"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-3 text-sm border-r pr-4 border-slate-200 dark:border-zinc-800">
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-medium bg-slate-200 text-slate-700 dark:bg-zinc-800 dark:text-zinc-200">
              {user ? <span className='text-xl font-bold'>{user.email.charAt(0).toUpperCase()}</span> : <CircularProgress size={30} />}
            </div>

            <span className="font-medium text-slate-700 dark:text-zinc-300">
              {user?.email || "Loading..."}
            </span>
          </div>

          <button onClick={logoutHandler} className="flex items-center gap-2 text-sm transition-colors cursor-pointer text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <DevSidebar activeSection={activeSection} />

        {/* Dashboard Content */}
        <main className="flex-1 p-8 max-w-6xl space-y-8">

          {/* <section id="overview">
            <DevOverview />
          </section> */}

          <section id="api-keys">
            <DevAPIKeys />
          </section>

        </main>
      </div>
    </div>
  );
}