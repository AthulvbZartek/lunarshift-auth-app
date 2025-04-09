export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
//   user: {
//     id: string;
//     email: string;
//     role: string;
//   };
}