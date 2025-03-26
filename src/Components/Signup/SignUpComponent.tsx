import { useState } from "react";
import { Typography, Button, Radio, RadioChangeEvent } from "antd";
import SignUpFormProfessional from "./SignUpFormProfessional";
import SignUpFormEmployer from "./SignUpFormEmployer";

const { Title } = Typography;

export default function SignUpComponent() {
  const [userType, setUserType] = useState(1); // 1 for work, 2 for hiring
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleUserTypeChange = (e: RadioChangeEvent) => {
    setUserType(e.target.value);
  };

  const handleContinue = () => {
    setShowSignupForm(true);
  };

  const renderForm = () => {
    if (!showSignupForm) {
      return renderInitialOptions();
    }

    return userType === 1 ? <SignUpFormProfessional /> : <SignUpFormEmployer />;
  };

  const renderInitialOptions = () => (
    <>
      <div
        className="logo-container"
        style={{
          display: "flex",
          alignItems: "center",
          flex: "1 1 50%",
          padding: "20px",
        }}
      >
        <img
          src="img/lunarshift-logo.png"
          alt="Lunarshift Logo"
          style={{ width: "400px" }}
        />
      </div>
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
            Sign Up
          </Title>

          <div style={{ marginBottom: "20px" }}>
            <Radio.Group
              onChange={handleUserTypeChange}
              value={userType}
              style={{ width: "100%" }}
            >
              <div style={{ marginBottom: "10px" }}>
                <Radio
                  value={1}
                  style={{
                    width: "100%",
                    height: "40px",
                    padding: "10px",
                    background: "white",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  I'm looking for work
                </Radio>
              </div>
              <div>
                <Radio
                  value={2}
                  style={{
                    width: "100%",
                    height: "40px",
                    padding: "10px",
                    background: "white",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  I'm hiring for projects
                </Radio>
              </div>
            </Radio.Group>
          </div>

          <Button
            type="primary"
            block
            onClick={handleContinue}
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
    </>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "url(/img/signup-background.png)",
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
        {renderForm()}
      </div>
    </div>
  );
}
