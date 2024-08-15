import { useRoutes } from "react-router-dom";
import { Author, Home, Movies } from "./elements";
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
      path: PATH_PAGE.author,
      element: <Author />,
    },
    // CRIAR A PAGINA 404
  ]);

  return routes;
}
