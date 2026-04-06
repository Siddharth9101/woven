import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx";
import ProductContextProvider from "./providers/ProductContextProvider.jsx";

function App() {
  return (
    <>
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
    </>
  );
}

export default App;
