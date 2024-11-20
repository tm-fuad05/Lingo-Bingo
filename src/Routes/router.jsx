import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../layouts/Error";
import Login from "../Components/Login";
import Auth from "../layouts/Auth";
import Registration from "../Components/Registration";
import PrivateLayout from "../layouts/PrivateLayout";
import Home from "../layouts/Home";
import MyProfile from "../layouts/MyProfile";
import ProfileInfo from "../layouts/ProfileInfo";
import UpdateInfo from "../Components/UpdateInfo";
import AboutUs from "../layouts/AboutUs";
import Tutorial from "../layouts/Tutorial";
import Japan from "../Components/Category Video/Japan";
import Korea from "../Components/Category Video/Korea";
import Hindi from "../Components/Category Video/Hindi";
import ForgotPass from "../Components/ForgotPass";
import StartLearning from "../layouts/StartLearning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/start-learning",
        element: (
          <PrivateLayout>
            <StartLearning></StartLearning>
          </PrivateLayout>
        ),
        loader: () => fetch("../lesson.json"),
      },
      {
        path: "/tutorials",
        element: (
          <PrivateLayout>
            <Tutorial></Tutorial>
          </PrivateLayout>
        ),
        children: [
          {
            path: "/tutorials",
            element: <Navigate to="/tutorials/japanese"></Navigate>,
          },
          {
            path: "/tutorials/japanese",
            element: <Japan></Japan>,
          },
          {
            path: "/tutorials/korean",
            element: <Korea></Korea>,
          },
          {
            path: "/tutorials/hindi",
            element: <Hindi></Hindi>,
          },
        ],
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateLayout>
            <MyProfile></MyProfile>
          </PrivateLayout>
        ),
        children: [
          {
            path: "/my-profile",
            element: <Navigate to="/my-profile/info"></Navigate>,
          },
          {
            path: "/my-profile/info",
            element: <ProfileInfo></ProfileInfo>,
          },
          {
            path: "/my-profile/update",
            element: <UpdateInfo></UpdateInfo>,
          },
        ],
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
      {
        path: "/auth/forgot-password",
        element: <ForgotPass></ForgotPass>,
      },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
