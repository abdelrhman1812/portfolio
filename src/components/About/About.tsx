"use client";

import { motion } from "framer-motion";
import InfoSection from "./Info";

const About = () => {
  return (
    <section id="about" className="bg-background-alt py-20">
      <motion.div
        className="container px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          About <span className="text-primary">Me</span>
        </h2>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-xl text-muted-foreground mb-6">
            A frontend web developer with practical experience in frontend
            technologies like HTML5, CSS3, Bootstrap, TailwindCSS, JavaScript,
            TypeScript, and ReactJs, with a number of web designs deployed on
            GitHub.
          </p>
        </motion.div>

        <InfoSection />
      </motion.div>
    </section>
  );
};

export default About;
