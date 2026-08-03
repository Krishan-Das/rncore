import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx"
import DeveloperDashboard from "../pages/DeveloperDashboard.jsx";
import Register from "../pages/auth/Register.jsx";
import Login from "../pages/auth/Login.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import TermsOfService from "../pages/TermsOfService.jsx"
import SystemStatus from "../pages/SystemStatus.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/register',
        element: <Register />
      },

      {
        path: 'login',
        element: <Login />
      },

    ],
  },

  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },

  {
    path: "terms",
    element: <TermsOfService />,
  },

  {
    path: "status",
    element: <SystemStatus />
  },

  {
    path: "/dashboard",
    element: <DeveloperDashboard />
  },


]);

export default router;