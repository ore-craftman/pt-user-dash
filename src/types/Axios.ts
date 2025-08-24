import { AxiosRequestConfig } from "axios";
export interface UseAxiosResult<T> {
  data: T | null;
  loading: boolean;
  error: UseAxiosError | null;
  fetchData: (url: string, config?: AxiosRequestConfig) => Promise<T | null>;
  postData: (
    url: string,
    body: unknown,
    config?: AxiosRequestConfig & { formData?: boolean }
  ) => Promise<T | null>;
  patchData: (
    url: string,
    body: unknown,
    config?: AxiosRequestConfig
  ) => Promise<T | null>;
  deleteData: (url: string, config?: AxiosRequestConfig) => Promise<T | null>;
  putData: (url: string, config?: AxiosRequestConfig) => Promise<T | null>;
}

export interface UseAxiosError {
  status: boolean;
  msg: string;
}