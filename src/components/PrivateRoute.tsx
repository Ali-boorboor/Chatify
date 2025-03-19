import { memo } from "react";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  return children;
}

export default memo(PrivateRoute);
