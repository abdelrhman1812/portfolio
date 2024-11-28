import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./About.css";
import PersonalInfo from "./PersonalInfo";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const info = infoRef.current;

    gsap.set([title, content, info], {
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
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        content,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        info,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <section
      id="about"
      className="about-section position-relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title text-center" ref={titleRef}>
          About{" "}
          <span className="highlight position-relative overflow-hidden">
            Me
          </span>
        </h2>

        <div className="about-content" ref={contentRef}>
          <div className="about-text">
            <h3>Front End Developer</h3>
            <p>
              I am a junior front-end developer with a bachelor&apos;s degree in
              technology and information systems and a strong foundation in web
              development. My expertise includes JavaScript, React.js, HTML,
              CSS, and Node.js, along with problem-solving and full-stack
              development experience.
            </p>
            <p>
              I have a proven ability to deliver scalable web solutions and a
              passion for designing e-commerce websites with a focus on UI/UX. I
              continuously seek to enhance my skills and stay updated with the
              latest technologies, aiming to contribute to company growth and
              achieve impactful results.
            </p>
          </div>
        </div>

        <PersonalInfo ref={infoRef} />
      </div>
    </section>
  );
};

export default About;
