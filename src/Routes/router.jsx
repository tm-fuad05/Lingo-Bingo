import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../layouts/Error";
import Login from "../Components/Login";
import Auth from "../layouts/Auth";
import Registration from "../Components/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/signup",
        element: <Registration></Registration>,
      },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
