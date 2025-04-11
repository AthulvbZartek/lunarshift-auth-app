import { useMutation } from "@tanstack/react-query";
import { CustomError } from "../../interface/customError";
import { LoginUser } from "./Api";
import { LoginUserPayload, LoginResponse } from "../../interface/Login";

export const useLoginHooks = () => {
  return useMutation<LoginResponse, CustomError, LoginUserPayload>({
    mutationFn: (payload: LoginUserPayload) => LoginUser(payload),
    onSuccess: (data: LoginResponse) => {
      console.log("data", data);
      localStorage.setItem("token", data.token);
      window.location.href = "https://lunarshift-shell-app.vercel.app/";
    },
    onError: (error: CustomError) => {
      const { errorMessage } = error;
      console.log("errorMessage", errorMessage);
    },
  });
};
