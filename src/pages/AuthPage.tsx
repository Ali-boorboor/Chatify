import Auth from "@/components/organisms/Auth";
import { memo } from "react";

function AuthPage() {
  document.title = "Chatify";

  return <Auth />;
}

export default memo(AuthPage);
