import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../layouts/Error";
import Login from "../Components/Login";
import Auth from "../layouts/Auth";
import Registration from "../Components/Registration";
import PrivateLayout from "../layouts/PrivateLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/start-learning",
        element: (
          <PrivateLayout>
            <h2>Start Learning</h2>
          </PrivateLayout>
        ),
      },
    ],
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
