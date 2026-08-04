import React from 'react';
import { LayoutDashboard, LinkIcon, Key, BookOpen, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevSidebar = ({ activeSection = 'overview', onSelect }) => {
  const navItems = [
    // {
    //   id: 'overview',
    //   name: 'Overview',
    //   icon: LayoutDashboard,
    //   href: '#overview',
    //   type: 'anchor',
    // },
    {
      id: 'api-keys',
      name: 'API Keys',
      icon: Key,
      href: '#api-keys',
      type: 'anchor',
    },
    // {
    //   id: 'docs',
    //   name: 'Documentation',
    //   icon: BookOpen,
    //   href: '/#overview',
    //   type: 'router',
    // },
    // {
    //   id: 'settings',
    //   name: 'Settings',
    //   icon: Settings,
    //   href: '#settings',
    //   type: 'anchor',
    // },
  ];

  return (
    <nav className="space-y-1">
      {/* Go to Home Link */}
      <Link
        to="/"
        onClick={onSelect}
        className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-300 dark:hover:bg-zinc-800/60 dark:hover:text-white mb-2"
      >
        <LinkIcon className="w-4 h-4 text-slate-400 dark:text-zinc-500" />
        <span>Go to Home</span>
      </Link>

      <div className="my-2 border-t border-slate-200 dark:border-zinc-800" />

      {/* Dynamic Navigation Items */}
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        const baseClasses = `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
          isActive
            ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/70 dark:text-indigo-400 font-semibold'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-white'
        }`;

        const iconClasses = `w-4 h-4 ${
          isActive
            ? 'text-indigo-600 dark:text-indigo-400'
            : 'text-slate-400 dark:text-zinc-500'
        }`;

        if (item.type === 'router') {
          return (
            <Link key={item.id} to={item.href} onClick={onSelect} className={baseClasses}>
              <Icon className={iconClasses} />
              <span>{item.name}</span>
            </Link>
          );
        }

        return (
          <a key={item.id} href={item.href} onClick={onSelect} className={baseClasses}>
            <Icon className={iconClasses} />
            <span>{item.name}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default DevSidebar;