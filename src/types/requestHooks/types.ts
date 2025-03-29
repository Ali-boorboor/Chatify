export type useGetReqProps = {
  url: string;
  queryKey: string;
  cacheTime?: number;
  staleTime?: number;
  errorToastMsg?: string;
  hasAutoLoading?: boolean;
  successToastMsg?: string;
  refetchOnWindowFocus?: boolean;
};

export type usePostPutReqProps = {
  url: string;
  navigateTo?: string;
  errorToastMsg?: string;
  refetchQueryKey?: string | string[];
  successToastMsg?: string;
};

export type useDeleteProps = {
  navigateTo?: string;
  errorToastMsg?: string;
  refetchQueryKey?: string | string[];
  successToastMsg?: string;
};
