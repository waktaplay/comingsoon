import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./utils/i18n";
import "./styles/common.css";

import ComingSoon from "./comingsoon";
import Maintenance from "./maintenance";

const router = createBrowserRouter([
  {
    path: "/maintenance",
    element: <Maintenance />,
  },
  {
    path: "/*",
    element: <ComingSoon />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
