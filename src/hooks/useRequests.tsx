import useStates from "@/hooks/useStates";
import AxiosInstance from "@/utils/AxiosInstance";
import { useGetReqProps, usePostReqProps } from "@/types/requestHooks/types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { toast } from "sonner";

// ^ useGetReq hook for all get requests
function useGetReq({
  url,
  queryKey,
  cacheTime,
  staleTime,
  errorToastMsg,
  hasAutoLoading,
  successToastMsg,
  refetchOnWindowFocus,
}: useGetReqProps) {
  const { token, setHasLoading } = useStates();

  const { data, isSuccess, isError, isLoading } = useQuery(
    queryKey,
    () => AxiosInstance.get(url, { headers: { Authorization: token } }),
    {
      cacheTime: cacheTime || 0,
      staleTime: staleTime || 0,
      refetchOnWindowFocus: refetchOnWindowFocus || false,
      onSuccess: () => {
        successToastMsg && toast.success(successToastMsg);
      },
      onError: () => {
        errorToastMsg && toast.error(errorToastMsg);
      },
    }
  );

  useEffect(() => {
    hasAutoLoading && setHasLoading(isLoading);
  }, [isLoading]);

  return { data, isSuccess, isError, isLoading };
}

// ^ useGetReq hook to get one folder chats
const useGetFolderChats = (selectedFolder: string) => {
  if (selectedFolder === "all") {
    return useGetReq({
      url: "/chat",
      queryKey: "CHATS",
      cacheTime: 86400000,
      staleTime: 86400000,
      errorToastMsg: "Failed To Get Chats",
    });
  } else {
    return useGetReq({
      url: `/folder/${selectedFolder}`,
      queryKey: `FOLDER-${selectedFolder}-CHATS`,
      cacheTime: 86400000,
      staleTime: 86400000,
      errorToastMsg: "Failed To Get Folder Chats",
    });
  }
};

// ^ usePostReq hook for all post requests
function usePostReq({
  url,
  navigateTo,
  errorToastMsg,
  refetchQueryKey,
  successToastMsg,
}: usePostReqProps) {
  const { setHasLoading } = useStates();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isSuccess, isError, isLoading, mutate } = useMutation(
    ({ body, config }: { body?: any; config?: AxiosRequestConfig }) => {
      return AxiosInstance.post(url, body, config);
    },
    {
      onSuccess: () => {
        navigateTo && navigate(navigateTo);
        queryClient.invalidateQueries(refetchQueryKey);
        successToastMsg && toast.success(successToastMsg);
      },
      onError: () => {
        errorToastMsg && toast.error(errorToastMsg);
      },
    }
  );

  useEffect(() => {
    setHasLoading(isLoading);
  }, [isLoading]);

  return { data, isSuccess, isError, isLoading, mutate };
}

export { useGetReq, useGetFolderChats, usePostReq };
