import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Input, Typography, Form } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import EmailVerificationCard from "./EmailVerificationCard";
import { useForgotPasswordHooks } from "../api/ForgotPassword/hook";
import { ForgotPasswordPayload } from "../api/ForgotPassword/Api";
import { CustomError } from "../interface/customError";

const { Title, Text } = Typography;

type FieldType = {
  email: string;
};

const ForgotComponent = () => {
  const [form] = Form.useForm();
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { mutate: forgotPassword } = useForgotPasswordHooks(
    setIsVerificationSent
  );

  const onFinish = async (values: FieldType) => {
    try {
      const payload: ForgotPasswordPayload = {
        email: values.email,
      };
      forgotPassword(payload, {
        onError: (error: CustomError) => {
          setErrorMessage(error.errorMessage || "Failed to process request");
        },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An unexpected error occurred");
    }
  };
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
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <Button
          type="link"
          href="/"
          icon={<ArrowLeftOutlined style={{ color: "#336699" }} />}
          style={{
            display: "flex",
            alignItems: "center",
            color: "#000",
            fontSize: "16px",
          }}
        >
          Back to Login
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="img/lunarshift-logo.png"
          alt="Lunarshift Logo"
          style={{
            width: "280px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "1 1 50%",
            padding: "20px",
          }}
        >
          {!isVerificationSent ? (
            <div
              style={{
                background: "#F6F7F9",
                padding: "40px",
                borderRadius: "8px",
                width: "100%",
                minWidth: "280px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Title
                style={{
                  textAlign: "center",
                  marginBottom: "24px",
                  marginTop: "0",
                  fontSize: "24px",
                }}
              >
                Forgot Password
              </Title>
              {errorMessage && (
                <Text
                  style={{
                    display: "block",
                    textAlign: "center",
                    color: "#ff4d4f",
                    marginBottom: "16px",
                  }}
                >
                  {errorMessage}
                </Text>
              )}
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Enter your registered email
              </p>

              <Form
                form={form}
                name="forgot-password"
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item<FieldType>
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    variant="borderless"
                    style={{ height: "40px", backgroundColor: "white" }}
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
                      style={{
                        height: "40px",
                        fontSize: "16px",
                        background:
                          "linear-gradient(to right top, #3779BC, #336699, #295985)",
                        marginBottom: "16px",
                        boxShadow: "0 2px 12px #00000014",
                      }}
                    >
                      Continue
                    </Button>
                  </Form.Item>
                </motion.div>
              </Form>
            </div>
          ) : (
            <EmailVerificationCard email={form.getFieldValue("email")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotComponent;
