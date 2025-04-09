import React, { useState, useCallback } from "react";
import { Typography, Button, Input, Divider, Form } from "antd";
import { motion } from "framer-motion";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useLoginHooks } from "../api/Login/hook";
import { LoginUserPayload } from "../interface/Login";
import styles from "./LoginForm.module.css";

const { Title, Text } = Typography;

interface FieldType {
  email: string;
  password: string;
}

interface SocialLoginButtonProps {
  icon: string;
  platform: string;
}

const LoginForm: React.FC = () => {
  const [form] = Form.useForm<FieldType>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const { mutate: loginUser } = useLoginHooks();

  // Memoized event handlers with useCallback
  const clearError = useCallback((): void => {
    setErrorMessage("");
    setValidationErrors([]);
  }, []);

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

  const onFinish = useCallback(
    async (values: FieldType): Promise<void> => {
      try {
        if (!validateFields()) {
          return;
        }

        setIsSubmitting(true);
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
          onSuccess: (): void => {
            // Handle successful login here
            // window.location.href = "https://lunarshift-shell-app.vercel.app/";
          },
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrorMessage("Invalid credentials");
      } finally {
        setIsSubmitting(false);
      }
    },
    [loginUser, clearError]
  );

  // Check for field changes to clear errors on edit
  const handleFieldChange = useCallback(() => {
    clearError();
  }, [clearError]);

  // Separate component for social buttons to improve readability
  const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
    icon,
    platform,
  }) => (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button block className={styles.socialButton}>
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
              onFinish={onFinish}
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

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={isSubmitting}
                    className={styles.loginButton}
                    onClick={() => {
                      if (!isSubmitting) {
                        validateFields();
                      }
                    }}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </Form.Item>
              </motion.div>
            </Form>

            <div className={styles.forgotPasswordContainer}>
              <a href="/forgot-password" className={styles.forgotPasswordLink}>
                Forgot Password
              </a>
            </div>

            <Divider plain>or</Divider>

            <div className={styles.socialButtonsContainer}>
              <SocialLoginButton icon="linkedin-icon.png" platform="LinkedIn" />
              <SocialLoginButton icon="google-icon.png" platform="Google" />
              <SocialLoginButton icon="apple-icon.png" platform="Apple" />
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
