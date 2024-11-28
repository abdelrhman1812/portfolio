import { useRef } from "react";

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/abdelrahman-ali-b3a343284/",
    icon: <i className="fa-brands fa-linkedin"></i>,
  },
  {
    path: "https://github.com/abdelrhman1812/abdelrhman1812",
    icon: <i className="fa-brands fa-github"></i>,
  },
  {
    path: "https://wa.me/+2001008034761?text=welcome",
    icon: <i className="fa-brands fa-whatsapp"></i>,
  },
];

const SocialLink = () => {
  const linkRef = useRef(null);

  return (
    <>
      <div className="social-links mb-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            ref={linkRef}
            href={link.path}
            className="social-link d-inline-flex align-items-center justify-content-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialLink;
