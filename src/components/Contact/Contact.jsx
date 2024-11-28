import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
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
      className="contact-section position-relative overflow-hidden min-vh-100"
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-bg-gradient"></div>
      <div className="container">
        <h2 className="section-title text-center" ref={titleRef}>
          Get in{" "}
          <span className="highlight position-relative overflow-hidden">
            Touch
          </span>
        </h2>

        <div className="contact-container">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
