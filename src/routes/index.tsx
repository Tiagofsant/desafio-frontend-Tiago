import { useRoutes } from "react-router-dom";
import { Author, Home, Movies } from "./elements";

// --------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      index: true,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/author",
      element: <Author />,
    },
  ]);

  return routes;
}
