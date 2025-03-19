import Home from "@/components/templates/Home";
import { memo } from "react";

function HomePage() {
  document.title = "Chatify | Chat it out !";

  return <Home />;
}

export default memo(HomePage);
