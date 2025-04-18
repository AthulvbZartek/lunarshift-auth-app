import axios, { AxiosInstance } from "axios";
import { LocalStorage } from "../utility/localstorage";

const BaseUrl = process.env.REACT_APP_API_BASE_URL;

export class Axios {
  private static instance: AxiosInstance;
  static getInstance(): AxiosInstance {
    Axios.instance =
      Axios.instance ||
      axios.create({
        baseURL: BaseUrl,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    Axios.instance.interceptors.request.use(
      (config) => {
        const UserToken = LocalStorage.getItem("accessToken");

        const { headers } = config;
        headers.Authorization = UserToken ? `Bearer ${UserToken}` : "";
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    // Axios instance response interceptor
    Axios.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        const refresh_token = LocalStorage?.getItem("refreshToken");
        // Check if the user is not authenticated
        if (error?.response?.status === 401 && !refresh_token) {
          // Don't redirect on login page - just reject with error
          // This prevents page reload on login failures
          const currentPath = window.location.pathname;
          if (currentPath !== '/' && currentPath !== '/login') {
            // Only redirect if not already on login page
            window.location.href = "/";
          }
          return Promise.reject(error);
        }
        if (
          error?.response?.status === 401 &&
          refresh_token !== null &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          try {
            const response = await axiosInstance.post(
              `/user/loginWithRefreshToken`,
              {
                refreshToken: refresh_token,
              },
            );
            if (response.data.success) {
              LocalStorage?.setItem(
                "accessToken",
                response?.data?.payload?.accessToken,
              );
              LocalStorage.setItem(
                "refreshToken",
                response?.data?.payload?.refreshToken,
              );
              // Set new authToken in axios instance
              Axios.instance.defaults.headers.common.Authorization = `Bearer ${response?.data?.payload?.accessToken}`;
              // window?.location?.reload();
            } else {
              // remove authToken from localStorage
              LocalStorage?.clear();
              // Only redirect if not already on login page
              const currentPath = window.location.pathname;
              if (currentPath !== '/' && currentPath !== '/login') {
                window.location.href = "/";
              }
            }
            const UserToken = LocalStorage.getItem("accessToken");

            // Retry the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${UserToken}`;
            return axios(originalRequest);
          } catch (error) {
            LocalStorage.clear();
            // Only redirect if not already on login page
            const currentPath = window.location.pathname;
            if (currentPath !== '/' && currentPath !== '/login') {
              window.location.href = "/";
            }
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      },
    );
    return Axios.instance;
  }
}
export const axiosInstance = Axios.getInstance();
