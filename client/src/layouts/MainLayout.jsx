import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;