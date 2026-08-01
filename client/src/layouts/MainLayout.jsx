import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <ScrollToTop/>
      <Navbar />

      {/* Main content wrapper */}
      <main className="w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;