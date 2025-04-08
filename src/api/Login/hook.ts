import { useMutation } from "@tanstack/react-query";
import { CustomError } from "../../interface/customError";
import { LoginUser } from "./Api";
import { LoginUserPayload, LoginResponse } from "../../interface/Login";
import { message } from "antd";


export const useLoginHooks = () => {

  return useMutation({
    mutationFn: (payload: LoginUserPayload) => LoginUser(payload),
    onSuccess: (data: LoginResponse) => {
      message.success("Login successful");
      localStorage.setItem("token", data.token);
    //   localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "https://lunarshift-shell-app.vercel.app/";
    },
    onError: (error: CustomError) => {
      const { errorMessage } = error;
      message.error(errorMessage || "Login failed");
    },
  });
};
