"use client";

import projects from "@/data/mock-projects";
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
    <section id="portfolio" className="bg-background-alt py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          <span className="text-primary"> My </span> Portfolio
        </h2>

        {/* Filter Section */}
        <ProjectFilter onFilterChange={setSelectedFilter} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map((project, index) => (
            <div key={index}>
              <SingleProject project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
