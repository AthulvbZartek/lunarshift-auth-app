import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form, Input, Typography } from "antd";
import { useState } from "react";
import EmailVerificationCard from "../EmailVerificationCard";
import { useRegisterHooks } from "../../api/Register/hook";
import { RegisterUserPayload } from "../../interface/Register";

const { Title } = Typography;

type FieldType = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
};

const SignUpFormProfessional = () => {
  const [form] = Form.useForm<FieldType>();
  const [verificationNumber, setVerificationNumber] = useState("");
  const [showVerificationCard, setShowVerificationCard] = useState(false);
  const [verificationCardTitle, setVerificationCardTitle] = useState("");
  const [isVerificationSent, setIsVerificationSent] = useState(false);

  const { mutate: RegisterUser } = useRegisterHooks();

  function handleContinue(values: FieldType) {
    const payload: RegisterUserPayload = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      mobileNumber: values.mobile,
      role: "professional",
    };
    RegisterUser(payload);
    // console.log('payload', payload)
  }

  // const handleContinue = async () => {
  //   try {
  //     await form.validateFields();
  //     const values = form.getFieldsValue();
  //     console.log('Form values:', values);
  //     setIsVerificationSent(true);
  //   } catch (error) {
  //     console.error('Validation failed:', error);
  //   }
  // };

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

          <Form form={form} layout="vertical" style={{ width: "100%" }}>
            <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
              <Form.Item
                name="firstName"
                style={{ flex: 1, marginBottom: 0 }}
                rules={[{ required: true, message: "Please enter your first name" }]}
              >
                <Input
                  placeholder="First name"
                  variant="borderless"
                  style={{ height: "40px", backgroundColor: "white" }}
                />
              </Form.Item>
              <Form.Item
                name="lastName"
                style={{ flex: 1, marginBottom: 0 }}
                rules={[{ required: true, message: "Please enter your last name" }]}
              >
                <Input
                  placeholder="Last name"
                  variant="borderless"
                  style={{ height: "40px", backgroundColor: "white" }}
                />
              </Form.Item>
            </div>

            <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
              <Form.Item
                name="email"
                style={{ flex: 1, marginBottom: 0 }}
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" }
                ]}
              >
                <Input
                  placeholder="Email ID"
                  variant="borderless"
                  style={{ height: "40px", backgroundColor: "white" }}
                />
              </Form.Item>

              <Form.Item
                name="mobile"
                style={{ flex: 1, marginBottom: 0 }}
                rules={[
                  { required: true, message: "Please enter your mobile number" },
                  { pattern: /^[0-9]{10}$/, message: "Please enter a valid 10-digit mobile number" }
                ]}
              >
                <Input
                  placeholder="Mobile number"
                  variant="borderless"
                  style={{ height: "40px", backgroundColor: "white" }}
                />
              </Form.Item>
            </div>

            <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
              <Form.Item
                name="password"
                style={{ flex: 1, marginBottom: 0 }}
                rules={[
                  { required: true, message: "Please enter your password" },
                  { min: 8, message: "Password must be at least 8 characters" }
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

              <Form.Item
                name="confirmPassword"
                style={{ flex: 1, marginBottom: 0 }}
                dependencies={['password']}
                rules={[
                  { required: true, message: "Please confirm your password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Re-enter password"
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
            </div>

            <Form.Item
              name="agreeToTerms"
              valuePropName="checked"
              rules={[{
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Please accept the terms and conditions')),
              }]}
              style={{ marginBottom: "24px", textAlign: "center" }}
            >
              <Checkbox style={{ fontSize: "16px" }}>
                By continuing you accept our{" "}
                <a href="/terms" style={{ color: "#336699" }}>
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" style={{ color: "#336699" }}>
                  Privacy Policy
                </a>
              </Checkbox>
            </Form.Item>

            <Form.Item style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <Button
                type="primary"
                onClick={() => handleContinue(form.getFieldsValue())}
                style={{
                  height: "40px",
                  minWidth: "260px",
                  fontSize: "16px",
                  background:
                    "linear-gradient(to right top, #3779BC, #336699, #295985)",
                  boxShadow: "0 2px 12px #00000014",
                }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>

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
        <EmailVerificationCard email={form.getFieldValue('email')} />
      )}
    </>
  );
};

export default SignUpFormProfessional;
