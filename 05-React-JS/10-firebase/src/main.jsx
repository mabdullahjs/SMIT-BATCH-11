import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/nestedScreens/Profile.jsx";
import NewsFeed from "./pages/nestedScreens/NewsFeed.jsx";
import Userdata from "./pages/nestedScreens/Userdata.jsx";
import Layout from "./Layout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "newsfeed",
        element: <ProtectedRoutes component={<NewsFeed />} />,
      },
      {
        path: "userdata",
        element: <Userdata />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
