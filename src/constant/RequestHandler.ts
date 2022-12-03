import Axios, {AxiosResponse, AxiosError} from 'axios';

Axios.interceptors.request.use(
  (config: any): any => {
    // do something
    return config;
  },
  (error: any): any => {
    return Promise.reject(error);
  },
);

export const GetRequest = async (
  url: string,
  config: any = null,
): Promise<void> => {
  return Axios.get(url, config)
    .then((response: AxiosResponse<any>): any => {
      return response;
    })
    .catch((error: AxiosError): any => {
      return error;
    });
};

export const PostRequest = async (
  url: string,
  data: any,
  config: any = null,
): Promise<void> => {
  return Axios.post(url, data, config)
    .then((response: AxiosResponse<any>): any => {
      return response;
    })
    .catch((error: AxiosError): any => {
      return error;
    });
};
