import { ServicesType } from "@/types/types";
import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";

export const services: ServicesType[] = [
  {
    id: 1,
    icon: <FaCode className="text-4xl mb-4 text-primary" />,
    title: "Web Development",
    description:
      "Creating responsive and dynamic web applications using modern frameworks and technologies.",
  },

  {
    id: 2,
    icon: <FaServer className="text-4xl mb-4 text-primary" />,
    title: "Backend Development",
    description:
      "Building robust and scalable server-side applications and APIs.",
  },
  {
    id: 3,
    icon: <FaPaintBrush className="text-4xl mb-4 text-primary" />,
    title: "Editing & Re-design",
    description:
      "Do you have some edits and retouches or even a complete re-design? I am here to do it.",
  },
];
