import { useGetReq } from "@/hooks/useRequests";
import { useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const { isError } = useGetReq({
    queryKey: "AUTH",
    url: "/auth",
    errorToastMsg: "Access Denied",
    hasAutoLoading: true,
  });

  useEffect(() => {
    if (isError) {
      navigate("/auth");
      localStorage.clear();
    }
  }, [isError]);

  return children;
}

export default memo(PrivateRoute);
