"use client";

import {
  ArrowLeftOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;

const ResetPasswordComponent = () => {
  const [password, setPassword] = useState("");
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
          href="/login"
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
              style={{
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Create New Password
            </Title>

            <div style={{ marginBottom: "16px" }}>
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
            <div style={{ marginBottom: "16px" }}>
              <Input.Password
                placeholder="Confirm Password"
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
              // onClick={handleContinue}
              style={{
                height: "40px",
                fontSize: "16px",
                background:
                  "linear-gradient(to right top, #3779BC, #336699, #295985)",
                marginBottom: "16px",
                boxShadow: "0 2px 12px #00000014",
              }}
            >
              Update Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordComponent;
