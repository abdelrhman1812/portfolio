import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import BtnCv from "./BtnCv";
import "./Hero.css";
import HeroImage from "./HeroImage";
import SocialLink from "./SocialLink";

const typingOptions = {
  autoStart: true,
  loop: true,
  delay: 100,
  strings: ["Front End Developer"],
};

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const image = imageRef.current;

    gsap.set([content, image], {
      opacity: 0,
      y: 100,
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(content, {
      opacity: 1,
      y: 0,
      duration: 1,
    }).to(
      image,
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.5"
    );

    // Parallax effect on scroll
    gsap.to(image, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <header
      className="hero-section mt-5 m-lg-0 min-vh-100 d-flex align-items-center position-relative overflow-hidden"
      id="home"
      ref={heroRef}
    >
      <div className="hero-bg-gradient"></div>

      <div className="container">
        <div className="row align-items-center">
          {/* Hero Content */}
          <div className="col-lg-6" ref={contentRef}>
            <div className="hero-content position-relative z-1">
              <h3 className="profession">
                I&apos;m a
                <span className="typing">
                  <Typewriter options={typingOptions} />
                </span>
              </h3>

              {/* Name */}
              <h1 className="name">
                Hello, I&apos;m
                <span className="highlight ms-1 position-relative d-inline-block ">
                  Abdelrhman
                </span>
              </h1>
              <p className="description">
                Highly skilled Front-End Developer with experience in designing,
                developing, and maintaining web applications using modern
                front-end frameworks.
              </p>

              {/* Social Links */}
              <SocialLink />

              {/* Button */}
              <BtnCv />
            </div>
          </div>
          {/* Image */}
          <HeroImage imageRef={imageRef} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
