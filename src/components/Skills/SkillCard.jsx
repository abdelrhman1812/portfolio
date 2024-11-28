import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const SkillCard = ({ icon: Icon, name, index }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const icon = iconRef.current;
    const text = textRef.current;
    const glow = glowRef.current;

    gsap.set([card, icon, text], {
      opacity: 0,
      scale: 0.8,
      y: 50,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(card, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: index * 0.1,
    })
      .to(
        icon,
        {
          opacity: 1,
          scale: 1,
          rotateY: 360,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        text,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        glow,
        {
          opacity: 1,
          width: "100%",
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.2"
      );

    // Hover animation
    card.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        scale: 1.2,
        rotateY: "+=180",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(glow, {
        opacity: 1,
        scale: 1.1,
        duration: 0.3,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(glow, {
        opacity: 0.6,
        scale: 1,
        duration: 0.3,
      });
    });
  }, [index]);

  return (
    <div className="skill-card position-relative overflow-hidden" ref={cardRef}>
      <div className="skill-content d-flex align-items-center gap-5  position-relative z-2">
        <div className="skill-icon" ref={iconRef}>
          {/* <Icon size={48} /> */}
          <img src={Icon} alt={name} />
        </div>
        <div className="skill-text" ref={textRef}>
          <h4>{name}</h4>
        </div>
      </div>
      <div
        className="skill-glow position-absolute bottom-0 start-0 w-100"
        ref={glowRef}
      ></div>
    </div>
  );
};

export default SkillCard;
