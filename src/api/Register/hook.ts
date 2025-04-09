
import { useMutation } from "@tanstack/react-query";
import { CustomError } from "../../interface/customError";
import { RegisterUser } from "./api";
import { RegisterUserPayload } from "../../interface/Register";


export const useRegisterHooks = () => {

  return useMutation({
    mutationFn: (payload: RegisterUserPayload) => RegisterUser(payload),
    onSuccess: (data: RegisterUserPayload) => {
      console.log("success", data);
    },
    onError: (error: CustomError) => {
      const { errorMessage } = error;
      console.log("error", errorMessage);
    },
  });
};
