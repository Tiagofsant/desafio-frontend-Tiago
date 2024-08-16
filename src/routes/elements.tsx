import { lazy } from "react";

// -----------------------------------------------------------------------------

export const Home = lazy(() => import("../pages/homePage"));
export const Movies = lazy(() => import("../pages/moviesPage"));
export const Actor = lazy(() => import("../pages/actorPage"));
