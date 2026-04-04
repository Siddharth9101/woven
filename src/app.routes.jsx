import { createBrowserRouter } from "react-router";
import Home from "./pages/Home.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/gallery/:title",
    element: <ProductPage />,
  },
]);

export { router };
