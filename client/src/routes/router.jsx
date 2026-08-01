import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx"
import Overview from "../pages/docs/Overview.jsx";
import DeveloperDashboard from "../pages/DeveloperDashboard.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DeveloperDashboard/>
  },


  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },

  // {
  //   path: "/register",
  //   element: <RegisterPage />,
  // },

  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);

export default router;