import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/login";
import { Navigate } from "react-router";

import Frontend from "@/pages/frontend";
import Backend from "@/pages/backend";
import DataAnalysis from "@/pages/dataAnalysis";
import Linux from "@/pages/linux";
import CloudComputing from "@/pages/cloudComputing";

const loader = async () => {
  const token = sessionStorage.getItem("token");
  if (token === window.uuid) return null;
  else return redirect("/login");
};

const loginLoader = async () => {
  const token = sessionStorage.getItem("token");
  if (token === window.uuid) return redirect("/");
  else return null;
};

export const Router = () => {
  const router = [
    {
      path: "/",
      Component: Home,
      loader,
    },
    {
      path: "/login",
      Component: Login,
      loader: loginLoader,
    },
    {
      path: "/frontend",
      Component: Frontend,
      loader,
    },
    {
      path: "/backend",
      Component: Backend,
      loader,
    },
    {
      path: "/dataAnalysis",
      Component: DataAnalysis,
      loader,
    },
    {
      path: "/cloudComputing",
      Component: CloudComputing,
      loader,
    },
    {
      path: "/linux",
      Component: Linux,
      loader,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];
  const browserRouter = createBrowserRouter(router);

  return <RouterProvider router={browserRouter} />;
};
