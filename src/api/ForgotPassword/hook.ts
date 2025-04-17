import { useMutation } from "@tanstack/react-query";
import { CustomError } from "../../interface/customError";
import { ForgotPassword, ForgotPasswordPayload } from "./Api";

export const useForgotPasswordHooks = (
  setIsVerificationSent: (isVerificationSent: boolean) => void
) => {
  return useMutation<
    ForgotPasswordResponse,
    CustomError,
    ForgotPasswordPayload
  >({
    mutationFn: (payload: ForgotPasswordPayload) => ForgotPassword(payload),
    onSuccess: (data: ForgotPasswordResponse) => {
      setIsVerificationSent(true);
    },
    onError: (error: CustomError) => {
      const { errorMessage } = error;
      console.log("errorMessage", errorMessage);
    },
  });
};

export interface ForgotPasswordResponse {
  email: string;
}
