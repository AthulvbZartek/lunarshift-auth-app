import { Button, Typography } from "antd";
import { useState } from "react";
import AddSkillsComponent from "../AddSkillsComponent/AddSkillsComponent";

const { Title } = Typography;

const IdVerificationCard = () => {
  const [showSkills, setShowSkills] = useState(false);

  if (showSkills) {
    return <AddSkillsComponent />;
  }

  return (
    <div
      style={{
        background: "#F6F7F9",
        padding: "40px",
        borderRadius: "8px",
        width: "100%",
        minWidth: "280px",
        maxWidth: "500px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Title
        level={3}
        style={{ textAlign: "center", marginBottom: "24px", marginTop: "0" }}
      >
        Verify your identity
      </Title>
      <p
        style={{
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        Upload and verify your ID to start working on lunarshift
      </p>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        ID.me verification process here.
      </p>
      <div style={{ display: "flex", gap: "16px" }}>
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
          Upload
        </Button>
        <Button
          type="primary"
          block
          onClick={() => setShowSkills(true)}
          style={{
            height: "40px",
            fontSize: "16px",
            backgroundColor: "white",
            border: "1px solid #336699",
            color: "#336699",
            marginBottom: "16px",
            boxShadow: "0 2px 12px #00000014",
          }}
        >
          Skip
        </Button>
      </div>
    </div>
  );
};

export default IdVerificationCard;
