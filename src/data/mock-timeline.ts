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
      description: [
        "Studied computer science fundamentals, software engineering, and web development. Graduated with honors and completed several practical projects.",
      ],
    },
    {
      id: 2,
      title: "Full Stack Web Development Using MERN Stack",
      institution: "Information Technology Institute (ITI)",
      date: "2023 - 2024",
      description: [
        "Program Intensive Code Camp (ICC) - Information Technology Institute (ITI) , Ministry of Communication and Information Technology (MCIT). ITI Mansoura.",
      ],
      certificationImage: "/assets/Images/CertificationITI.jpeg",
    },
    // {
    //   id: 2,
    //   title: "Web Development Bootcamp (MERN Stack)",
    //   institution: "Route Academy",
    //   date: "2023 - 2024",
    //   description: [
    //     "Intensive program focusing on modern web development technologies including React, Node.js, and full-stack development.",
    //   ],
    // },
  ],
  experience: [
    {
      id: 1,
      title: "Frontend Developer",
      institution: "Wareef Real Estate, Riyadh, Saudi Arabia",
      date: "Jun 2025 - Sep 2025 (3-Month Contract)",
      description: [
        "Designed and launched a responsive dashboard for managing users, properties, chats, and notifications, significantly enhancing the overall user experience.",
        "Seamlessly integrated the dashboard with the mobile application, ensuring consistent functionality across all platforms.",
        "Utilized Tailwind CSS, Shadcn/ui, and React Query to develop a visually appealing and high-performing user interface.",
        "Implemented real-time updates and optimized API integrations, leading to improved application performance and responsiveness.",
      ],
    },

    {
      id: 2,
      title: "Frontend Developer Intern",
      institution: "KayanLabs, Maadi, Cairo",
      date: "Dec 2024 - Feb 2025 (3-Month Internship)",
      description: [
        "Developed responsive and user-friendly web applications leveraging React, TypeScript, and modern frameworks across diverse domains, including e-commerce and analytics dashboards.",
        "Integrated RESTful APIs to facilitate seamless data exchange and enhance application functionality.",
        "Implemented advanced state management techniques using React Query and Context API, improving application performance and user experience.",
      ],
    },

    // {
    //   id: 1,
    //   title: "React Web Development and Node.js (MERN Stack) 6-Month Program",
    //   institution: "Digital Egypt Pioneers Initiative (DEPI)",
    //   date: "Apr 2024 - Oct 2024",
    //   description:
    //     "Developed responsive web applications using React.js and Node.js, integrating RESTful APIs for seamless data exchange.",
    // },
    // {
    //   id: 2,
    //   title: "Web Design",
    //   institution: "National Telecommunication Institute (NTI)",
    //   date: "May 2023 - Jun 2023",
    //   description:
    //     "The course covers frontend tools such as HTML5, CSS3, Bootstrap, and JavaScript.",
    // },
  ],
};

export default timelineData;
