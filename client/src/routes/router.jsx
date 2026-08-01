import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx"
import DeveloperDashboard from "../pages/DeveloperDashboard.jsx";
import Register from "../pages/auth/Register.jsx";
import Login from "../pages/auth/Login.jsx";



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
    path: "/dashboard",
    element: <DeveloperDashboard />
  },


]);

export default router;