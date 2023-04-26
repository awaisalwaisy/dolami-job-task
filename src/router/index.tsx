import React from "react";
import { createBrowserRouter } from "react-router-dom";
const MarketPage = React.lazy(() => import("pages/MarketPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MarketPage />,
  },
]);
