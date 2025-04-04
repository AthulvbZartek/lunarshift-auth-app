import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Input, Typography } from "antd";
import { useState } from "react";
import EmailVerificationCard from "../EmailVerificationCard";

const { Title } = Typography;

const SignUpFormProfessional = () => {
  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [verificationNumber, setVerificationNumber] = useState("");
  const [showVerificationCard, setShowVerificationCard] = useState(false);
  const [verificationCardTitle, setVerificationCardTitle] = useState("");

  const [isVerificationSent, setIsVerificationSent] = useState(false);

  const handleContinue = () => {
    // if (email.trim()) {
    setIsVerificationSent(true);
    // }
  };

  const handleSocialClick = () => {
    setVerificationCardTitle(`Enter Mobile Number`);
    setShowVerificationCard(true);
  };

  return (
    <>
      {showVerificationCard ? (
        <div
          style={{
            background: "#F6F7F9",
            padding: "40px",
            borderRadius: "8px",
            width: "100%",
            maxWidth: "500px",
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
            {verificationCardTitle}
          </Title>
          <Input
            type="number"
            placeholder="Enter verification number"
            value={verificationNumber}
            onChange={(e) => setVerificationNumber(e.target.value)}
            style={{
              height: "40px",
              backgroundColor: "white",
              marginBottom: "16px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              onClick={() => setShowVerificationCard(false)}
              style={{
                height: "40px",
                minWidth: "260px",
                fontSize: "16px",
                background:
                  "linear-gradient(to right top, #3779BC, #336699, #295985)",
                boxShadow: "0 2px 12px #00000014",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      ) : !isVerificationSent ? (
        <div
          style={{
            background: "#F6F7F9",
            padding: "40px",
            borderRadius: "8px",
            width: "100%",
            maxWidth: "900px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
              Sign Up to find work
            </Title>
            <div
              style={{
                textAlign: "center",
                marginTop: "0",
                marginBottom: "24px",
              }}
            >
              Here to hire talent?{" "}
              <a
                href="/sign-up"
                style={{
                  color: "#336699",
                  textDecorationLine: "none",
                  fontWeight: "bold",
                }}
              >
                Join as an employer
              </a>
            </div>
          </div>

          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                width: "100%",
              }}
            >
              <Button
                block
                onClick={() => handleSocialClick()}
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
                <img
                  src="img/linkedin-icon.png"
                  alt="LinkedIn Logo"
                  style={{ marginRight: "8px" }}
                />
                Continue with LinkedIn
              </Button>

              <Button
                block
                onClick={() => handleSocialClick()}
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
                <img
                  src="img/google-icon.png"
                  alt="Google Logo"
                  style={{ marginRight: "8px" }}
                />
                Continue with Google
              </Button>

              <Button
                block
                onClick={() => handleSocialClick()}
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
                <img
                  src="img/apple-icon.png"
                  alt="Apple Logo"
                  style={{ marginRight: "8px" }}
                />
                Continue with Apple
              </Button>
            </div>
          </div>

          <Divider style={{ borderColor: "#777777" }} plain>
            or
          </Divider>

          <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <div style={{ flex: 1 }}>
              <Input
                placeholder="First name"
                value={firstName}
                variant="borderless"
                onChange={(e) => setFirstName(e.target.value)}
                style={{ height: "40px", backgroundColor: "white" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <Input
                placeholder="Last name"
                value={lastName}
                variant="borderless"
                onChange={(e) => setLastName(e.target.value)}
                style={{ height: "40px", backgroundColor: "white" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <div style={{ flex: 1 }}>
              <Input
                placeholder="Email ID"
                value={email}
                variant="borderless"
                onChange={(e) => setEmail(e.target.value)}
                style={{ height: "40px", backgroundColor: "white" }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <Input
                placeholder="Mobile number"
                value={mobile}
                variant="borderless"
                onChange={(e) => setMobile(e.target.value)}
                style={{ height: "40px", backgroundColor: "white" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <div style={{ flex: 1 }}>
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

            <div style={{ flex: 1 }}>
              <Input.Password
                placeholder="Re-enter password"
                value={confirmPassword}
                variant="borderless"
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          </div>

          <div style={{ marginBottom: "24px", textAlign: "center" }}>
            <Checkbox
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              style={{
                fontSize: "16px",
              }}
            >
              By continuing you accept our{" "}
              <a href="/terms" style={{ color: "#336699" }}>
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" style={{ color: "#336699" }}>
                Privacy Policy
              </a>
            </Checkbox>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              onClick={handleContinue}
              style={{
                height: "40px",
                minWidth: "260px",
                fontSize: "16px",
                background:
                  "linear-gradient(to right top, #3779BC, #336699, #295985)",
                marginBottom: "16px",
                boxShadow: "0 2px 12px #00000014",
              }}
            >
              Sign Up
            </Button>
          </div>

          <div style={{ textAlign: "center", marginTop: "16px" }}>
            Already have an account?{" "}
            <a
              href="/"
              style={{
                color: "#336699",
                textDecorationLine: "none",
                fontWeight: "bold",
              }}
            >
              Login
            </a>
          </div>
        </div>
      ) : (
        <EmailVerificationCard email={email} />
      )}
    </>
  );
};

export default SignUpFormProfessional;
