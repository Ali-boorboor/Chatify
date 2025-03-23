import SuspenseWrapper from "@/routes/SuspenseWrapper";
import PrivateRoute from "@/components/PrivateRoute";
import { lazy } from "react";

const AuthPage = lazy(() => import("@/pages/AuthPage"));
const ChatPage = lazy(() => import("@/pages/ChatPage"));

const Routes = [
  {
    path: "/auth",
    element: (
      <SuspenseWrapper>
        <AuthPage />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <PrivateRoute>
          <ChatPage />
        </PrivateRoute>
      </SuspenseWrapper>
    ),
  },
];

export default Routes;
