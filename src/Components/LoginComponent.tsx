import React, { useState, useCallback, useEffect } from "react";
import { Typography, Button, Input, Divider, Form } from "antd";
import { motion } from "framer-motion";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useLoginHooks } from "../api/Login/hook";
import { LoginUserPayload } from "../interface/Login";
import { authService } from "../services/authService";
import styles from "./LoginForm.module.css";

const { Title, Text } = Typography;

// Google OAuth Types
interface GoogleOAuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface GoogleTokenClient {
  requestAccessToken: () => void;
}

interface GoogleAccountsOAuth2 {
  initTokenClient: (config: {
    client_id: string;
    scope: string;
    redirect_uri: string;
    access_type?: string;
    prompt?: string;
    state?: string;
    callback: (response: GoogleOAuthResponse) => void;
  }) => GoogleTokenClient;
}

interface Google {
  accounts: {
    oauth2: GoogleAccountsOAuth2;
  };
}

// Extend Window interface
declare global {
  interface Window {
    google: Google;
  }
}

interface FieldType {
  email: string;
  password: string;
}

interface SocialLoginButtonProps {
  icon: string;
  platform: string;
  onClick: () => void;
  disabled?: boolean;
}

const LoginForm: React.FC = () => {
  const [form] = Form.useForm<FieldType>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

  const { mutate: loginUser, isPending } = useLoginHooks();

  useEffect(() => {
    // Check if Google OAuth client is loaded
    const checkGoogleLoaded = () => {
      if (typeof window !== "undefined" && window.google?.accounts) {
        setIsGoogleLoaded(true);
      }
    };

    // Check immediately
    checkGoogleLoaded();

    // Also check after a short delay to ensure script has time to load
    const timer = setTimeout(checkGoogleLoaded, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Memoized event handlers with useCallback
  const clearError = useCallback((): void => {
    setErrorMessage("");
    setValidationErrors([]);
  }, []);

  // Social login handlers
  const handleGoogleLogin = () => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri =
      "https://authservicemicroservice.onrender.com/api/auth/external-callback";

    if (!clientId) {
      setErrorMessage("Google login configuration is missing");
      return;
    }

    const scope = encodeURIComponent("email profile");
    const state = encodeURIComponent("google:register:Professional");

    const googleAuthUrl =
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${clientId}&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `response_type=code&` +
      `scope=${scope}&` +
      `access_type=offline&` +
      `prompt=consent&` +
      `state=${state}`;

    window.open(googleAuthUrl, "_blank", "width=500,height=600");
  };

  const handleLinkedInLogin = () => {
    const clientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_LINKEDIN_REDIRECT_URI;

    if (!clientId || !redirectUri) {
      setErrorMessage("LinkedIn login configuration is missing");
      return;
    }

    const scope = encodeURIComponent("r_liteprofile r_emailaddress");
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${scope}`;
  };

  const handleAppleLogin = () => {
    const clientId = process.env.REACT_APP_APPLE_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_APPLE_REDIRECT_URI;

    if (!clientId || !redirectUri) {
      setErrorMessage("Apple login configuration is missing");
      return;
    }

    const scope = encodeURIComponent("name email");
    window.location.href = `https://appleid.apple.com/auth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&scope=${scope}&response_mode=form_post`;
  };

  // Custom form validator to collect all validation errors
  const validateFields = (): boolean | string => {
    const { email, password } = form.getFieldsValue();

    const isValidEmail = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password && password.length >= 8;

    const isValid = isValidEmail && isValidPassword;

    setErrorMessage(isValid ? "" : "Invalid credentials");
    setValidationErrors([]);

    return isValid;
  };

  const handleContinue = async () => {
    try {
      if (!validateFields()) {
        return;
      }
      const values = form.getFieldsValue();
      clearError();

      const payload: LoginUserPayload = {
        email: values.email,
        password: values.password,
      };

      loginUser(payload, {
        onError: (error: unknown): void => {
          setErrorMessage("Invalid credentials");
          console.error("Login error:", error);
        },
      });
    } catch (error) {
      console.error("Validation failed:", error);
      setErrorMessage("Invalid credentials");
    }
  };

  // Check for field changes to clear errors on edit
  const handleFieldChange = useCallback(() => {
    clearError();
  }, [clearError]);

  // Separate component for social buttons to improve readability
  const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
    icon,
    platform,
    onClick,
    disabled = false,
  }) => (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        block
        className={styles.socialButton}
        onClick={onClick}
        disabled={disabled}
      >
        <img src={`img/${icon}`} alt={`${platform} Logo`} />
        Continue with {platform}
      </Button>
    </motion.div>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "url(/img/login-background.png)",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.wrapper}>
        {/* Logo section - hidden on mobile */}
        <div className={`${styles.logoContainer} logo-container`}>
          <img
            src="img/lunarshift-logo.png"
            alt="Lunarshift Logo"
            className={styles.logo}
          />
        </div>

        {/* Form section */}
        <div className={styles.formContainer}>
          <div className={styles.formWrapper}>
            <Title
              className={styles.formTitle}
              style={{ fontSize: "24px", marginBottom: "18px" }}
            >
              Login
            </Title>

            {/* Error messages display area below title */}
            <div className={styles.errorContainer}>
              {errorMessage && (
                <Text className={styles.errorMessage}>{errorMessage}</Text>
              )}
              {validationErrors.length > 0 && (
                <div className={styles.validationErrors}>
                  {validationErrors.map((error, index) => (
                    <Text key={index} className={styles.errorMessage}>
                      {error}
                    </Text>
                  ))}
                </div>
              )}
            </div>

            <Form
              form={form}
              name="login"
              autoComplete="off"
              layout="vertical"
              onValuesChange={handleFieldChange}
            >
              <Form.Item name="email" noStyle>
                <Input
                  placeholder="Enter your email"
                  variant="borderless"
                  className={styles.input}
                />
              </Form.Item>

              <Form.Item name="password" noStyle>
                <Input.Password
                  placeholder="Password"
                  variant="borderless"
                  iconRender={(visible: boolean): React.ReactNode =>
                    visible ? (
                      <EyeOutlined style={{ color: "#336699" }} />
                    ) : (
                      <EyeInvisibleOutlined style={{ color: "#336699" }} />
                    )
                  }
                  className={styles.input}
                />
              </Form.Item>

              <Form.Item>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    type="primary"
                    onClick={handleContinue}
                    block
                    loading={isPending}
                    style={{
                      height: "40px",
                      background:
                        "linear-gradient(to right top, #3779bc, #336699, #295985)",
                      color: "white",
                      border: "none",
                      fontSize: "16px",
                      borderRadius: "5px",
                      padding: "10px 20px",
                    }}
                  >
                    Login
                  </Button>
                </motion.div>
              </Form.Item>
            </Form>

            <div className={styles.forgotPasswordContainer}>
              <a href="/forgot-password" className={styles.forgotPasswordLink}>
                Forgot Password
              </a>
            </div>

            <Divider plain>or</Divider>

            <div className={styles.socialButtonsContainer}>
              <SocialLoginButton
                icon="linkedin-icon.png"
                platform="LinkedIn"
                onClick={handleLinkedInLogin}
              />
              <SocialLoginButton
                icon="google-icon.png"
                platform="Google"
                onClick={handleGoogleLogin}
                disabled={!isGoogleLoaded}
              />
              <SocialLoginButton
                icon="apple-icon.png"
                platform="Apple"
                onClick={handleAppleLogin}
              />
            </div>

            <div className={styles.signupContainer}>
              <Text className={styles.signupText}>
                Don't have an account?{" "}
                <a
                  href="/sign-up"
                  style={{ color: "#336699", fontWeight: 600 }}
                >
                  Sign up
                </a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
