import { AxiosError } from "axios";
import { axiosInstance } from "../../service/axios";

export const ForgotPassword = async (payload: ForgotPasswordPayload) => {
  try {
    const response = await axiosInstance.post(`/auth/forgot-password`, payload);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || error;
    }
    throw error;
  }
};

export interface ForgotPasswordPayload {
  email: string;
}