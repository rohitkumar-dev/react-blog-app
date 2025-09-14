import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import { AuthLayout, Login } from "./components/index.js";

import AddPost from "./components/pages/AddPost.jsx";
import Signup from "./components/pages/Signup.jsx";
import EditPost from "./components/pages/EditPost.jsx";
import Post from "./components/pages/Post.jsx";
import AllPosts from "./components/pages/AllPosts.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import AboutUs from "./components/pages/AboutUs.jsx";
import Company from "./components/pages/Company.jsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.jsx";
import TermsNCondition from "./components/pages/TermsNCondition.jsx";
import AuthCallback from "./components/oAuth/AuthCallback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <AuthLayout authentication>
            <Post />
          </AuthLayout>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/terms-conditions",
        element: <TermsNCondition />,
      },
      {
        path: "/auth/callback",
        element: <AuthCallback />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
