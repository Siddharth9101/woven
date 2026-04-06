import { createBrowserRouter, ScrollRestoration, Outlet } from "react-router";
import Home from "./pages/Home.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/gallery/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

export { router };
