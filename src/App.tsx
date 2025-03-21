import Router from "@/routes/Router";
import useStates from "@/hooks/useStates";
import Loading from "@/components/atoms/Loading";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { useRoutes } from "react-router-dom";
import { memo } from "react";

function App() {
  const { hasLoading } = useStates();
  const routes = useRoutes(Router);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {routes}
      <Toaster position="top-right" richColors />
      {hasLoading && <Loading />}
    </ThemeProvider>
  );
}

export default memo(App);
