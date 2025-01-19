"use client";

import projects from "@/data/mock-projects";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import SingleProject from "./SingleProject";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("latest");

  const filteredProjects = projects.filter((project) =>
    selectedFilter === "latest"
      ? project.isLatest
      : project.type.includes(selectedFilter)
  );

  return (
    <motion.section
      id="portfolio"
      className="bg-background-alt py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary"> My </span> Portfolio
        </motion.h2>

        {/* Filter Section */}
        <ProjectFilter onFilterChange={setSelectedFilter} />

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <SingleProject project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
