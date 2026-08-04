import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

import { useDispatch } from "react-redux";
import { getMe } from "./features/auth/authService.js";
import { setUser } from "./features/auth/authSlice.js";
import { setApiData } from "./features/api/apiSlice.js";

import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getMe();
        dispatch(setUser(response.data.user));
        dispatch(
          setApiData({
            key: response.data.api.key,
            url: response.data.api.url,
          })
        );
      } catch (error) {
        console.log("Not logged in");
      }
    };

    fetchUser();
  }, [dispatch]);

  return (
    <>
      <Toaster
        position="top-center"
        containerStyle={{
          top: 50,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            maxWidth: "100%",
            margin: "0 auto",
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;