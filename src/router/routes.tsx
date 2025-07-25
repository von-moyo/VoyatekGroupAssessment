import { createBrowserRouter } from "react-router-dom";
import {
  NotFound,
  Home,
  SearchPage,
} from "../pages";
import { MainLayout } from "../components";
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
