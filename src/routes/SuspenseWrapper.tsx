import Loading from "@/components/atoms/Loading";
import { memo, PropsWithChildren, Suspense } from "react";

// ! the SuspenseWrapper to use lazy & code splitting
function SuspenseWrapper({ children }: PropsWithChildren) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

export default memo(SuspenseWrapper);
