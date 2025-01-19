import { InfoDataType } from "@/types/types";
import {
  FaGlobe,
  FaGraduationCap,
  FaRegCalendarAlt,
  FaUserShield,
} from "react-icons/fa";

const infoData: InfoDataType[] = [
  {
    icon: <FaRegCalendarAlt className="text-6xl text-primary mb-4" />,
    title: "Date of Birth",
    detail: "19 - 01 - 2000",
  },
  {
    icon: <FaGlobe className="text-6xl text-primary mb-4" />,
    title: "Nationality",
    detail: "Egyptian",
  },
  {
    icon: <FaGraduationCap className="text-6xl text-primary mb-4" />,
    title: "Education",
    detail: "BSc in ITS",
  },
  {
    icon: <FaUserShield className="text-6xl text-primary mb-4" />,
    title: "Military Service",
    detail: "Completed",
  },
];

export default infoData;
