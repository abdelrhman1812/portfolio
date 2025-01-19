"use client";

import { motion } from "framer-motion";
import SingleTimeLine from "./SingleTimeLine";

const Timeline = () => {
  return (
    <section className="bg-background py-20 px-4" id="timeline">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl sm:text-4xl font-bold text-center mb-8"
        >
          <span className="text-foreground">Education & </span>
          <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column */}
          <SingleTimeLine type="education" />

          {/* Experience Column */}
          <SingleTimeLine type="experience" />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
