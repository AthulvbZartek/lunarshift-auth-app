import { Typography } from "antd";

const { Title } = Typography;

interface Email {
  email: string;
}

const EmailVerificationCard = ({ email }: Email) => {
  return (
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
      <Title level={3} style={{ textAlign: "center", marginBottom: "24px" }}>
        Email Verification
      </Title>
      <p
        style={{
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        An email with verification link has been sent to your email ID
      </p>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        {email}
      </p>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Please click the link in your email to continue
      </p>
    </div>
  );
};

export default EmailVerificationCard;
