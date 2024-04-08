import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

const BrowserRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default BrowserRouter;
