import { TimelineType } from "@/types/types";

const timelineData: {
  education: TimelineType[];
  experience: TimelineType[];
} = {
  education: [
    {
      id: 1,
      title: "Bachelor's in Technology and Information Systems",
      institution: "Port Said University",
      date: "2018 - 2022",
      description:
        "Studied computer science fundamentals, software engineering, and web development. Graduated with honors and completed several practical projects.",
    },
    {
      id: 2,
      title: "Web Development Bootcamp (MERN Stack)",
      institution: "Route Academy",
      date: "2023 - 2024",
      description:
        "Intensive program focusing on modern web development technologies including React, Node.js, and full-stack development.",
    },
  ],
  experience: [
    {
      id: 1,
      title: "React Web Development and Node.js (MERN Stack) 6-Month Program",
      institution: "Digital Egypt Pioneers Initiative (DEPI)",
      date: "Apr 2024 - Oct 2024",
      description:
        "Developed responsive web applications using React.js and Node.js, integrating RESTful APIs for seamless data exchange.",
    },
    {
      id: 2,
      title: "Web Design",
      institution: "National Telecommunication Institute (NTI)",
      date: "May 2023 - Jun 2023",
      description:
        "The course covers frontend tools such as HTML5, CSS3, Bootstrap, and JavaScript.",
    },
  ],
};

export default timelineData;
