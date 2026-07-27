import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Login from "../pages/auth/Login";
import Auth from "../layouts/Auth";
import Registration from "../pages/auth/Registration";
import PrivateLayout from "../layouts/PrivateLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import ProfileInfo from "../Components/ProfileInfo";
import UpdateInfo from "../Components/UpdateInfo";
import AboutUs from "../pages/AboutUs";
import Tutorial from "../pages/Tutorial";
import ForgotPass from "../pages/auth/ForgotPass";
import StartLearning from "../pages/StartLearning";
import Lessons from "../pages/Lessons";

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
        path: "/lessons/:lesson_no",
        element: (
          <PrivateLayout>
            <Lessons></Lessons>
          </PrivateLayout>
        ),
        loader: () => fetch("../languages.json"),
      },
      {
        path: "/tutorials",
        element: (
          <PrivateLayout>
            <Tutorial></Tutorial>
          </PrivateLayout>
        ),
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
