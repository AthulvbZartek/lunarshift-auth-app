import { Typography, Button, Input, Divider, Form } from "antd";
import { motion } from "framer-motion";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;

type FieldType = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values: FieldType) => {
    try {
      setIsSubmitting(true);
      // Here you would typically make an API call to your backend
      console.log("Form submitted:", values);
      // Example API call:
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(values),
      // });
      // const result = await response.json();
      // Handle the response as needed
      window.location.href = "https://lunarshift-shell-app.vercel.app/";
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
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
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1100px",
          justifyContent: "center",
        }}
      >
        {/* Logo section - hidden on mobile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: "1 1 50%",
            padding: "20px",
          }}
          className="logo-container"
        >
          <img
            src="img/lunarshift-logo.png"
            alt="Lunarshift Logo"
            style={{
              width: "400px",
            }}
          />
        </div>

        {/* Form section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "1 1 50%",
            padding: "20px",
          }}
        >
          <div
            style={{
              background: "#F6F7F9",
              padding: "40px 60px",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "280px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Title
              style={{
                textAlign: "center",
                marginBottom: "24px",
                marginTop: "0",
              }}
            >
              Login
            </Title>

            <Form
              form={form}
              name="login"
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

              <Form.Item<FieldType>
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  variant="borderless"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeOutlined style={{ color: "#336699" }} />
                    ) : (
                      <EyeInvisibleOutlined style={{ color: "#336699" }} />
                    )
                  }
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
                    loading={isSubmitting}
                    style={{
                      height: "40px",
                      fontSize: "16px",
                      background:
                        "linear-gradient(to right top, #3779BC, #336699, #295985)",
                      marginBottom: "16px",
                      boxShadow: "0 2px 12px #00000014",
                    }}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </Form.Item>
              </motion.div>
            </Form>

            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <a
                href="/forgot-password"
                style={{
                  color: "#336699",
                }}
              >
                Forgot Password
              </a>
            </div>

            <Divider plain>or</Divider>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  block
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    height: "40px",
                    borderRadius: "10px",
                    borderColor: "#fff",
                    boxShadow: "0 2px 12px #00000014",
                  }}
                >
                  <img src="img/linkedin-icon.png" alt="Linkedin Logo" />
                  Continue with LinkedIn
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  block
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40px",
                    fontSize: "16px",
                    borderRadius: "10px",
                    borderColor: "#fff",
                    boxShadow: "0 2px 12px #00000014",
                  }}
                >
                  <img src="img/google-icon.png" alt="Google Logo" />
                  Continue with Google
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  block
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40px",
                    fontSize: "16px",
                    borderRadius: "10px",
                    borderColor: "#fff",
                    boxShadow: "0 2px 12px #00000014",
                  }}
                >
                  <img src="img/apple-icon.png" alt="Apple Logo" />
                  Continue with Apple
                </Button>
              </motion.div>
            </div>
            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <Text style={{ color: "#161A1F",fontSize:"16px" }}>
                Don't have an account?{" "}
                <a href="/sign-up" style={{ color: "#336699",fontWeight:"600" }}>
                  Sign up
                </a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
