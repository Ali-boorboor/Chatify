import Router from "@/routes/Router";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useRoutes } from "react-router-dom";
import { memo } from "react";

function App() {
  const routes = useRoutes(Router);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {routes}
    </ThemeProvider>
  );
}

export default memo(App);
