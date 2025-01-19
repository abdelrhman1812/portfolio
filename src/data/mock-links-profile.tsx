import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const mockLinksProfile = [
  {
    id: 1,
    path: "https://www.linkedin.com/in/abdelrahman-ali-b3a343284/",
    icon: <FaLinkedin size={25} />,
  },
  {
    id: 2,
    path: "https://github.com/abdelrhman1812",
    icon: <FaGithub size={25} />,
  },
  {
    id: 3,
    path: "https://wa.me/+2001008034761?text=welcome",
    icon: <FaWhatsapp size={25} />,
  },
];

export default mockLinksProfile;
