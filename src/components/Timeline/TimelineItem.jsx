import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const TimelineItem = ({ title, organization, period, description, index }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;

    gsap.set(item, {
      opacity: 0,
      x: -50,
    });

    gsap.to(item, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top bottom-=100",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  }, [index]);

  return (
    <div className="timeline-item position-relative" ref={itemRef}>
      <div className="timeline-dot position-absolute"></div>
      <div className="timeline-content">
        <h4 className="timeline-title">{title}</h4>
        <h5 className="timeline-organization">{organization}</h5>
        <span className="timeline-period">{period}</span>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
