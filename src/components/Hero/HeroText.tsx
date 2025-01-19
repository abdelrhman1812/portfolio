"use client";

import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  return (
    <>
      <div className="space-y-2">
        <p className="text-lg">
          I&apos;m a{" "}
          <TypeAnimation
            sequence={[
              "Front End Developer",
              2000,
              "React Developer",
              2000,
              "Web Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-primary"
          />
        </p>
        <h1 className="text-xl sm:text-4xl font-bold text-foreground">
          Hello, I&apos;m <span className="text-primary">Abdelrhman</span>
        </h1>
      </div>

      <p className="text-muted-foreground text-lg max-w-xl">
        Highly skilled Front-End Developer with experience in designing,
        developing, and maintaining web applications using modern front-end
        frameworks.
      </p>
    </>
  );
};

export default HeroText;
