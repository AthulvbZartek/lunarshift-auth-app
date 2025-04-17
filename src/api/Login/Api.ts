import { AxiosError } from "axios";
import { axiosInstance } from "../../service/axios";
import { LoginUserPayload } from "../../interface/Login";

export const LoginUser = async (payload: LoginUserPayload) => {
  try {
    const response = await axiosInstance.post(`/auth/login`, payload, {
      timeout: 10000, // 10 second timeout
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.code === "ECONNABORTED") {
        throw new Error("Login request timed out. Please try again.");
      }
      throw error.response?.data || error;
    }
    throw error;
  }
};
