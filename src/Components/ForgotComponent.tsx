import { Button, Input, Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;

const ForgotComponent = () => {
  const [email, setEmail] = useState("");
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
              level={3}
              style={{ textAlign: "center", marginBottom: "24px", margin: "0" }}
            >
              Forgot Password
            </Title>
            <p
              style={{
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Enter your registered email
            </p>

            <div style={{ marginBottom: "16px" }}>
              <Input
                placeholder="Enter your email"
                variant="borderless"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ height: "40px", backgroundColor: "white" }}
              />
            </div>

            {/* <div style={{ marginBottom: "24px" }}>
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
            </div> */}

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
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotComponent;
