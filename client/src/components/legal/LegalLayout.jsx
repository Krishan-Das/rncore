import React, { useState, useEffect } from 'react';
import { Sun, Moon, Calendar, ChevronRight } from 'lucide-react';

export default function LegalLayout({ title, description, lastUpdated, sections, children }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [isDark, setIsDark] = useState(false);

  // Toggle Dark Mode Class on Root
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-zinc-950 dark:text-zinc-200 transition-colors duration-200 font-sans antialiased selection:bg-blue-500/10 selection:text-blue-600 dark:selection:bg-blue-500/20 dark:selection:text-blue-400">
      
      {/* Sticky Header Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <a href="/" className="font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
              RNCore
            </a>
            <ChevronRight className="w-4 h-4 text-slate-400 dark:text-zinc-600" />
            <span className="text-slate-500 dark:text-zinc-400 font-medium">{title}</span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Page Header Section */}
      <section className="border-b border-slate-200/60 dark:border-zinc-800/60 bg-slate-50/50 dark:bg-zinc-900/30 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Documentation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Sticky Table of Contents Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-20 hidden lg:block">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-mono">
                On this page
              </h3>
              <nav className="space-y-1 text-sm border-l border-slate-200 dark:border-zinc-800">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className={`block pl-4 py-1.5 border-l-2 transition-all -ml-px ${
                      activeSection === sec.id
                        ? 'border-blue-600 text-blue-600 font-medium dark:border-blue-400 dark:text-blue-400'
                        : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:border-zinc-700'
                    }`}
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Typography Content Body */}
          <main className="flex-1 min-w-0 max-w-3xl prose prose-slate dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400">
            {children}
          </main>

        </div>
      </div>

    </div>
  );
}