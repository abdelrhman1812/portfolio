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
      institution: "TASK, Cairo, Maadi ",
      date: "Nov 2025 - Present",
      description: [
        "Developed dynamic and responsive web pages and systems , focus on performance optimization,including lazy loading and code splitting using React Suspense.",

        "Optimized API data flow and collaborated with backend developers to improve efficiency and responsiveness.",
        "Built and managed complex dynamic forms with multi-step/tab-based workflows.",
        "Managed application state using Redux & React Query and implemented real-time features chat,notifications.",
        "Architected frontend structure and component design, collaborating with backend developers to define requirements and optimize API design.",
        "Wrote clean, maintainable code, reduced bugs through extensive testing, and coordinated tasks using Jira",
      ],
    },

    {
      id: 2,
      title: "Frontend Developer",
      institution: "Wareef Real Estate, Riyadh, Saudi Arabia",
      date: "Jun 2025 - Sep 2025 (3-Month Contract)",
      description: [
        "Developed a responsive dashboard for managing users, properties, chats, and notifications, improving overall user experience.",
        "Implemented real-time updates and optimized API integrations, enhancing application performance and responsiveness.",
        "Built a high-performing user interface using React, Tailwind CSS, Shadcn/ui, and React Query.",
      ],
    },

    {
      id: 3,
      title: "Frontend Developer Intern",
      institution: "KayanLabs, Maadi, Cairo",
      date: "Dec 2024 - Feb 2025 (3-Month Internship)",
      description: [
        "Developed responsive web applications using React.js, Next.js, and TypeScript across various domains, including e-commerce and dashboards.",
        "Integrated RESTful APIs and implemented advanced state management using React Query and Context API.",
        "Applied SEO best practices and performance optimizations to improve visibility and user experience.",
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
