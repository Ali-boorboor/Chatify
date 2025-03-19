import SuspenseWrapper from "@/routes/SuspenseWrapper";
import PrivateRoute from "@/components/PrivateRoute";
import { Navigate } from "react-router-dom";
import { lazy } from "react";

const AuthPage = lazy(() => import("@/pages/AuthPage"));
const HomePage = lazy(() => import("@/pages/HomePage"));

const Routes = [
  {
    path: "/auth",
    element: (
      <SuspenseWrapper>
        <AuthPage />
      </SuspenseWrapper>
    ),
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", element: <></> },
      { path: "signup", element: <></> },
      { path: "forgot-password", element: <></> },
    ],
  },
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      </SuspenseWrapper>
    ),
    // children: [],
  },
];

export default Routes;
