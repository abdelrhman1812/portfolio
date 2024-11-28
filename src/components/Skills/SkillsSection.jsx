import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SkillCard from "./SkillCard";
import "./SkillsSection.css";
import {
  Bootstrap,
  CSS,
  Express,
  Git,
  HTML,
  JS,
  // MongoDB,
  MySQL,
  Next,
  Nodejs,
  React,
  Sequelize,
  Tailwind,
} from "./index";
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML5", icon: HTML },
  { name: "CSS3", icon: CSS },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "JavaScript", icon: JS },
  { name: "React", icon: React },
  { name: "Next.js", icon: Next },
  { name: "Node.js", icon: Nodejs },
  { name: "Express.js", icon: Express },
  // { name: "MongoDB", icon: MongoDB },
  { name: "Sequelize", icon: Sequelize },
  { name: "MySQL", icon: MySQL },
  { name: "Git", icon: Git },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const section = sectionRef.current;

    gsap.set([title, subtitle], {
      opacity: 0,
      y: 50,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center+=100",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }).to(
      subtitle,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Background parallax effect
    gsap.to(".skills-bg-gradient", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      id="skills"
      className="skills-section d-flex align-items-center position-relative min-vh-100 overflow-hidden"
      ref={sectionRef}
    >
      <div className="skills-bg-gradient"></div>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title" ref={titleRef}>
              <span className="highlight position-relative d-inline-block">
                Technical Skills
              </span>
            </h2>
            <p className="section-subtitle" ref={subtitleRef}>
              Crafting digital experiences with modern technologies
            </p>
          </div>
        </div>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <SkillCard {...skill} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
