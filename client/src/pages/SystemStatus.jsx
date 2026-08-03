import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  Server,
  ShieldCheck,
  Database,
  LayoutDashboard,
  FileText,
  Globe,
  Sun,
  Moon,
  ExternalLink,
  ChevronRight,
  Activity,
  RefreshCw
} from 'lucide-react';

export default function SystemStatus() {
  const [isDark, setIsDark] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('just now');
  const [selectedRegion, setSelectedRegion] = useState('Global (Auto-routed)');
  const [hoveredBar, setHoveredBar] = useState(null);

  // Toggle Dark Mode
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Service Data Setup
  const services = [
    {
      id: 'gateway',
      name: 'API Gateway',
      icon: Server,
      status: 'Operational',
      latency: '42ms',
      uptime: '99.99%',
      description: 'Global REST routing, edge caching & TLS termination',
    },
    {
      id: 'auth',
      name: 'Authentication',
      icon: ShieldCheck,
      status: 'Operational',
      latency: '68ms',
      uptime: '100%',
      description: 'JWT verification, OAuth2 flows & secret key authorization',
    },
    {
      id: 'database',
      name: 'Database Cluster',
      icon: Database,
      status: 'Operational',
      latency: '18ms',
      uptime: '99.98%',
      description: 'Primary PostgreSQL storage & isolated workspace schemas',
    },
    {
      id: 'dashboard',
      name: 'Developer Dashboard',
      icon: LayoutDashboard,
      status: 'Operational',
      latency: '110ms',
      uptime: '99.95%',
      description: 'Web console, API key management & analytics charts',
    },
    {
      id: 'docs',
      name: 'Documentation & CDN',
      icon: FileText,
      status: 'Operational',
      latency: '24ms',
      uptime: '100%',
      description: 'API Reference, static assets & OpenAPI specification specs',
    },
  ];

  // Generate 90-day uptime bars dataset
  const generateUptimeBars = () => {
    const bars = [];
    const today = new Date();
    
    for (let i = 89; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Simulate minor degraded state on day 24 for realistic feel
      const isDegradedDay = i === 24; 
      
      bars.push({
        dayIndex: 89 - i,
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: isDegradedDay ? 'degraded' : 'operational',
        uptime: isDegradedDay ? '98.2%' : '100%',
        incidents: isDegradedDay ? 'Minor latency spike in us-east-1' : 'No incidents reported',
      });
    }
    return bars;
  };

  const uptimeDays = generateUptimeBars();

  // Past Incidents List
  const incidents = [
    {
      id: 'inc-1',
      title: 'Elevated API Latency in US-East region',
      status: 'Resolved',
      date: 'August 2, 2026',
      duration: '22 minutes',
      summary: 'Upstream database connection pool exhaustion caused transient 504 Gateway Timeouts. Resolved by increasing pool thresholds and scaling worker instances.',
      updates: [
        { time: '14:22 UTC', text: 'Issue resolved. All API endpoints returned to baseline latency.' },
        { time: '14:08 UTC', text: 'Mitigation applied. Traffic stabilizing across affected gateway clusters.' },
        { time: '14:00 UTC', text: 'Investigating reports of elevated latency for /v1/data endpoints.' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 dark:bg-zinc-950 dark:text-zinc-200 font-sans antialiased selection:bg-blue-500/10 selection:text-blue-600 dark:selection:bg-blue-500/20 dark:selection:text-blue-400 transition-colors duration-200">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <a href="/" className="font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
              RNCore
            </a>
            <ChevronRight className="w-4 h-4 text-slate-400 dark:text-zinc-600" />
            <span className="text-slate-500 dark:text-zinc-400 font-medium font-mono text-xs uppercase tracking-wider">System Status</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors hidden sm:flex items-center gap-1"
            >
              <span>API Reference</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* 1. Header Section */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            All Systems Operational
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            System Status
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-md mx-auto">
            Real-time health monitoring and performance metrics for RNCore infrastructure.
          </p>

          <div className="pt-1 flex items-center justify-center gap-1.5 text-xs font-mono text-slate-400 dark:text-zinc-500">
            <RefreshCw className="w-3 h-3 animate-spin-slow" />
            <span>Updated {lastUpdated}</span>
          </div>
        </section>

        {/* 2. Developer Metrics Overview Card */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 shadow-xs">
          <div className="space-y-1 p-2">
            <div className="text-xs font-mono uppercase text-slate-400 dark:text-zinc-500">Global Uptime (90d)</div>
            <div className="text-xl font-semibold text-slate-900 dark:text-white font-mono">99.99%</div>
            <p className="text-xs text-slate-500 dark:text-zinc-400">Exceeds target SLA (99.9%)</p>
          </div>
          <div className="space-y-1 p-2 sm:border-l sm:border-slate-200/60 dark:sm:border-zinc-800/60">
            <div className="text-xs font-mono uppercase text-slate-400 dark:text-zinc-500">Avg Response Time</div>
            <div className="text-xl font-semibold text-slate-900 dark:text-white font-mono">48ms</div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">↓ 4ms faster than baseline</p>
          </div>
          <div className="space-y-1 p-2 sm:border-l sm:border-slate-200/60 dark:sm:border-zinc-800/60">
            <div className="text-xs font-mono uppercase text-slate-400 dark:text-zinc-500 font-mono">Current Region</div>
            <div className="flex items-center gap-1.5 pt-0.5">
              <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-transparent text-sm font-semibold text-slate-900 dark:text-white focus:outline-none cursor-pointer"
              >
                <option value="Global (Auto-routed)">Global (Auto-routed)</option>
                <option value="US-East (N. Virginia)">US-East (N. Virginia)</option>
                <option value="EU-West (Frankfurt)">EU-West (Frankfurt)</option>
                <option value="AP-South (Mumbai)">AP-South (Mumbai)</option>
              </select>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400">Anycast DNS active</p>
          </div>
        </section>

        {/* 3. Services Status Dashboard */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-mono">
              Core Services
            </h2>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">5/5 Operational</span>
          </div>

          <div className="rounded-xl border border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 divide-y divide-slate-100 dark:divide-zinc-800/60 shadow-xs overflow-hidden">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/50 dark:hover:bg-zinc-900/80 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 shrink-0 mt-0.5 sm:mt-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{service.name}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-zinc-400">{service.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-zinc-800/40 text-xs">
                    <div className="flex items-center gap-4 font-mono text-slate-500 dark:text-zinc-400">
                      <span>{service.latency}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="hidden sm:inline">{service.uptime}</span>
                    </div>

                    <div className="flex items-center gap-1.5 font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/40 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{service.status}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. 90-Day Uptime History Timeline */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-mono">
              System Metrics (Past 90 Days)
            </h2>
            <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">99.99% overall</span>
          </div>

          <div className="p-5 rounded-xl border border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 space-y-4 shadow-xs">
            {/* Interactive Timeline Bar Matrix */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 dark:text-zinc-500 font-mono">
                <span>90 days ago</span>
                <span className="text-slate-600 dark:text-zinc-300 font-medium">
                  {hoveredBar ? `${hoveredBar.date} — ${hoveredBar.uptime}` : 'Hover bar for daily breakdown'}
                </span>
                <span>Today</span>
              </div>

              <div className="flex items-center gap-[2px] h-9 w-full pt-1">
                {uptimeDays.map((bar) => (
                  <div
                    key={bar.dayIndex}
                    onMouseEnter={() => setHoveredBar(bar)}
                    onMouseLeave={() => setHoveredBar(null)}
                    className={`flex-1 h-full rounded-[1px] transition-all duration-150 cursor-pointer ${
                      bar.status === 'degraded'
                        ? 'bg-amber-400 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400'
                        : 'bg-emerald-500 hover:bg-emerald-400 dark:bg-emerald-500 dark:hover:bg-emerald-400'
                    }`}
                    title={`${bar.date}: ${bar.uptime} uptime`}
                  />
                ))}
              </div>
            </div>

            {/* Subtext info */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 pt-2 border-t border-slate-100 dark:border-zinc-800/60 font-mono">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Operational</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Degraded</span>
                </div>
              </div>
              <span>No major outages reported</span>
            </div>
          </div>
        </section>

        {/* 5. Incident History Section */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-mono">
            Past Incidents
          </h2>

          <div className="space-y-4">
            {incidents.length === 0 ? (
              <div className="p-8 text-center rounded-xl border border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-900 dark:text-white">No incidents reported in the last 90 days.</p>
              </div>
            ) : (
              incidents.map((inc) => (
                <div
                  key={inc.id}
                  className="p-5 rounded-xl border border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 space-y-4 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-zinc-800/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
                        {inc.status}
                      </span>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{inc.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">{inc.date}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {inc.summary}
                  </p>

                  {/* Incident Updates Stream */}
                  <div className="space-y-2 pt-1 border-l-2 border-slate-200 dark:border-zinc-800 pl-4 ml-1">
                    {inc.updates.map((update, idx) => (
                      <div key={idx} className="text-xs space-y-0.5">
                        <div className="font-mono text-slate-400 dark:text-zinc-500 font-medium">{update.time}</div>
                        <div className="text-slate-700 dark:text-zinc-300">{update.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

      </main>

      {/* 6. Footer */}
      <footer className="border-t border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 mt-20 py-8 text-xs text-slate-500 dark:text-zinc-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900 dark:text-white">RNCore Platform</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a href="#" className="hover:text-slate-900 dark:hover:text-zinc-200 transition-colors">Documentation</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-zinc-200 transition-colors">API Reference</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-zinc-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-zinc-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-zinc-200 transition-colors">Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}