import { Link, NavLink } from "react-router-dom";
import { Github } from "lucide-react";

const Navbar = () => {
  const links = [
    { name: "Docs", path: "/docs" },
    { name: "API", path: "/api" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight"
        >
          RNCore
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs transition ${
                  isActive
                    ? "text-black dark:text-white font-medium"
                    : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Krishan-Das"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-200 p-2 transition hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <Github size={16} />
          </a>

          <Link
            to="/login"
            className="rounded-md border border-zinc-900 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition hover:opacity-90 dark:border-white dark:bg-white dark:text-black"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;