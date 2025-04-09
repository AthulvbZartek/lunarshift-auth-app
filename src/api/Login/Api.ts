import { AxiosError } from "axios";
import { axiosInstance } from "../../service/axios";
import { LoginUserPayload } from "../../interface/Login";

export const LoginUser = async (payload: LoginUserPayload) => {
  try {
    const response = await axiosInstance.post(`/auth/login`, payload);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || error;
    }
    throw error;
  }
};
