import mockLinksProfile from "@/data/mock-links-profile";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col  gap-4"
    >
      <div className="flex items-center gap-4">
        {mockLinksProfile.map((link) => (
          <motion.a
            key={link.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-4 rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      <motion.a
        href={
          "https://drive.google.com/file/d/1ZuFdYPzdpfhWefRQ7E3-l7r6k4z711ww/view?usp=drive_link"
        }
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary w-48 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary-dark transition-colors duration-300"
      >
        <Download size={20} />
        Download CV
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
