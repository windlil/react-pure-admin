import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Suspense } from "react";

const router = createBrowserRouter(routes)

const BrowserRouter = () => {
  return (
    <Suspense fallback="">
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default BrowserRouter;
