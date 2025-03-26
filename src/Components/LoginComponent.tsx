import { useState } from "react";
import { Typography, Button, Input, Divider } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);

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
              level={3}
              style={{
                textAlign: "center",
                marginBottom: "24px",
                marginTop: "0",
              }}
            >
              Login
            </Title>

            <div style={{ marginBottom: "16px" }}>
              <Input
                placeholder="Enter your email"
                variant="borderless"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ height: "40px", backgroundColor: "white" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Input.Password
                placeholder="Password"
                value={password}
                variant="borderless"
                onChange={(e) => setPassword(e.target.value)}
                iconRender={(visible) =>
                  visible ? (
                    <EyeOutlined style={{ color: "#336699" }} />
                  ) : (
                    <EyeInvisibleOutlined style={{ color: "#336699" }} />
                  )
                }
                style={{ height: "40px", backgroundColor: "white" }}
              />
            </div>

            <Button
              type="primary"
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
              Login
            </Button>

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
            </div>

            <div style={{ textAlign: "center", marginTop: "24px" }}>
              Don't have an account?{" "}
              <a
                href="/sign-up"
                style={{
                  color: "#336699",
                  textDecorationLine: "none",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
