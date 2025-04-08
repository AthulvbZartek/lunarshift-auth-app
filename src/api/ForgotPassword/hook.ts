import { useMutation } from "@tanstack/react-query";
import { CustomError } from "../../interface/customError";
import { message } from "antd";
import { ForgotPassword, ForgotPasswordPayload } from "./Api";


export const useForgotPasswordHooks = () => {
  return useMutation({
    mutationFn: (payload: ForgotPasswordPayload) => ForgotPassword(payload),
    onSuccess: (data: ForgotPasswordResponse) => {
      message.success('Password reset link sent successfully');
    },
    onError: (error: CustomError) => {
      const { errorMessage } = error;
      message.error(errorMessage || 'Failed to send reset link');
    },
  });
};


export interface ForgotPasswordResponse {
  email: string;
}
