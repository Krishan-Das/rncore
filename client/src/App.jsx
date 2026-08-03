import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

import { useDispatch } from "react-redux";
import { getMe } from "./features/auth/authService.js";
import { setUser } from "./features/auth/authSlice.js";
import { setApiData } from "./features/api/apiSlice.js";

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
            url: response.data.api.url
          })
        );

      } catch (error) {
        console.log("Not logged in");
      }
    };

    fetchUser();
  }, [dispatch]);


  return <RouterProvider router={router} />;
}

export default App;