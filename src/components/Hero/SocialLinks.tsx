import mockLinksProfile from "@/data/mock-links-profile";
import { Download } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex flex-col  gap-4">
      <div className="flex items-center gap-4">
        {mockLinksProfile.map((link) => (
          <a
            key={link.id}
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card px-4 py-4 rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <a
        href="https://drive.google.com/uc?export=download&id=1eHGYpSloH8d2whkXpSQxpOtindulKi2k"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary w-48 text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-primary-dark transition-colors duration-300"
      >
        <Download size={20} />
        Download CV
      </a>
    </div>
  );
};

export default SocialLinks;
