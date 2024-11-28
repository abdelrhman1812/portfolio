import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { education, experience } from "../../data/timeline";
import "./Timeline.css";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    gsap.set(title, {
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
    });
  }, []);

  return (
    <section
      id="timeline"
      className="timeline-section position-relative min-vh-100 overflow-hidden"
      ref={sectionRef}
    >
      <div className="timeline-bg-gradient"></div>
      <div className="container">
        <h2 className="section-title text-center" ref={titleRef}>
          Education &{" "}
          <span className="highlight position-relative overflow-hidden">
            Experience
          </span>
        </h2>

        <div className="timeline-container">
          <div className="timeline-track position-relative">
            <h3 className="timeline-heading">Education</h3>
            {education.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>

          <div className="timeline-track position-relative">
            <h3 className="timeline-heading">Experience</h3>
            {experience.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
