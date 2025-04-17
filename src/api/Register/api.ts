import { AxiosError } from "axios";
import { axiosInstance } from "../../service/axios";
import { RegisterUserPayload } from "../../interface/Register";

export const RegisterUser = async (payload: RegisterUserPayload) => {
  try {
    const response = await axiosInstance.post(`/auth/register`, payload);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || error;
    }
    throw error;
  }
};
