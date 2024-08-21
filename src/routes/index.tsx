import React from "react";
import { useRoutes } from "react-router-dom";
import { Actor, Home, Movies } from "./elements";
import { PATH_PAGE } from "./paths";

// --------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: PATH_PAGE.home,
      element: <Home />,
      index: true,
    },
    {
      path: PATH_PAGE.movies,
      element: <Movies />,
    },
    {
      path: PATH_PAGE.actor,
      element: <Actor />,
    },
    // CRIAR A PAGINA 404
  ]);

  return routes;
}
