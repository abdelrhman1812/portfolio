import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const [openDescription, setOpenDescription] = useState(null);

  const toggleDescription = (id) => {
    setOpenDescription(openDescription === id ? null : id);
  };

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(image, {
        x: rotateY * 0.5,
        y: rotateX * 0.5,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to([card, image], {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="project-card overflow-hidden" ref={cardRef}>
      <div className="project-image position-relative overflow-hidden">
        <img src={image} className="w-100 h-100 object-fit-cover" alt={title} />
        <div className="project-overlay position-absolute top-0 start-0  w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="project-links d-flex gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content" ref={contentRef}>
        <h3>{title}</h3>

        <p className="position-relative">
          <span>
            {description.split(" ").splice(0, 15).join(" ")}
            <br />
            {" see more ... "}
            <FaEye
              size={20}
              onClick={() => toggleDescription(title)}
              className=" cursor-pointer"
            />
          </span>
          {/* <FaEye
            size={20}
            onClick={() => toggleDescription(title)}
            className="d-block icon-open position-absolute cursor-pointer"
          /> */}
        </p>

        <p
          className={`full-description d-flex flex-column ${
            openDescription === title ? "open" : ""
          }`}
        >
          <span>{description}</span>
        </p>

        <div className="project-technologies d-flex justify-content-center gap-2">
          {technologies.map((tech, index) => (
            <img key={index} src={tech} alt={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
