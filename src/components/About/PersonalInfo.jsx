const personalInfo = [
  { label: "Birthday", value: "18 Dec 1999" },
  { label: "Phone", value: "01008034761" },
  { label: "Email", value: "abdelrhmanali1812@gmail.com" },
  { label: "Freelance", value: "Available" },
];
const PersonalInfo = ({ infoRef }) => {
  return (
    <>
      <div className="personal-info" ref={infoRef}>
        {personalInfo.map((info, index) => (
          <div className="info-item" key={index}>
            <span className="info-label">{info.label}:</span>
            <span className="info-value">{info.value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PersonalInfo;
