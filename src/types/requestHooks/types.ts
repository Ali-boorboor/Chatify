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

export type usePostReqProps = {
  url: string;
  navigateTo?: string;
  errorToastMsg?: string;
  refetchQueryKey?: string | string[];
  successToastMsg?: string;
};
