import { useState } from "react";
import { Typography, Button, Select, Tag } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Option } = Select;

const AddSkillsComponent = () => {
  const [selectedSkills, setSelectedSkills] = useState<
    { id: number; name: string }[]
  >([]);

  const [searchValue, setSearchValue] = useState("");

  // Sample skills data
  const skillsOptions = [
    { id: 4, name: "Dictum nulla sea" },
    { id: 5, name: "Facilisis nec sea" },
    { id: 6, name: "Felis pulvinar sea" },
    { id: 7, name: "Tortor sea liquam" },
    { id: 8, name: "Gravida sea nulla" },
  ];

  const handleSkillSelect = (value: string, option: { key: number }) => {
    // Check if skill is already selected
    if (!selectedSkills.some((skill) => skill.id === option.key)) {
      setSelectedSkills([...selectedSkills, { id: option.key, name: value }]);
    }
    setSearchValue("");
  };

  const handleSkillRemove = (skillId: number) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill.id !== skillId));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#F6F7F9",
            padding: "40px",
            borderRadius: "8px",
            width: "100%",
            minWidth: "700px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              //   alignItems: "center",
            }}
          >
            <div>
              <Title level={3} style={{ marginBottom: "8px", marginTop: "0" }}>
                Add your skills
              </Title>
              <Paragraph style={{ marginBottom: "24px", color: "#161A1F" }}>
                Help us connect you with the right jobs based on your skills
              </Paragraph>
            </div>
            <Button
              type="text"
              style={{
                color: "#336699",
                border: "1px solid #336699",
                borderRadius: "6px",
                padding: "20px 40px",
                backgroundColor: "white",
                boxShadow: "0 2px 12px #00000014",
              }}
            >
              Skip
            </Button>
          </div>

          <Select
            showSearch
            placeholder="Select your skill"
            style={{
              width: "300px",
              height: "36px",
              marginBottom: "20px",
              backgroundColor: "white",
              borderRadius: "6px",
            }}
            variant="borderless"
            value={searchValue}
            onChange={setSearchValue}
            onSelect={handleSkillSelect}
            filterOption={false}
            dropdownStyle={{ maxHeight: "200px", overflow: "auto" }}
            // suffixIcon={<span style={{ fontSize: "12px" }}>▼</span>}
          >
            {skillsOptions.map((skill) => (
              <Option key={skill.id} value={skill.name}>
                {skill.name}
              </Option>
            ))}
          </Select>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            {selectedSkills.map((skill) => (
              <Tag
                key={skill.id}
                closable
                onClose={() => handleSkillRemove(skill.id)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  background: "white",
                  border: "1px solid #e8e8e8",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  marginRight: 0,
                }}
                closeIcon={<CloseOutlined style={{ fontSize: "10px" }} />}
              >
                {skill.name}
              </Tag>
            ))}
          </div>
          <Button
            type="primary"
            block
            disabled={selectedSkills.length === 0}
            style={{
              height: "40px",
              fontSize: "16px",
              borderRadius: "6px",
              width: "300px",
              background:
                selectedSkills.length === 0
                  ? "#cccccc"
                  : "linear-gradient(to right top, #3779BC, #336699, #295985)",
              boxShadow: "0 2px 12px #00000014",
              cursor: selectedSkills.length === 0 ? "not-allowed" : "pointer",
              opacity: selectedSkills.length === 0 ? 0.6 : 1,
            }}
          >
            Add Skills
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddSkillsComponent;
