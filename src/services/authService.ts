import axios from "axios";

interface SocialLoginResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    name: string;
    picture?: string;
  };
}

export const authService = {
  // Google Login
  googleLogin: async (token: string): Promise<SocialLoginResponse> => {
    try {
      const response = await axios.post("/api/auth/google", { token });
      return response.data;
    } catch (error) {
      throw new Error("Google login failed");
    }
  },

  // LinkedIn Login
  linkedinLogin: async (code: string): Promise<SocialLoginResponse> => {
    try {
      const response = await axios.post("/api/auth/linkedin", { code });
      return response.data;
    } catch (error) {
      throw new Error("LinkedIn login failed");
    }
  },

  // Apple Login
  appleLogin: async (code: string): Promise<SocialLoginResponse> => {
    try {
      const response = await axios.post("/api/auth/apple", { code });
      return response.data;
    } catch (error) {
      throw new Error("Apple login failed");
    }
  },
};
