"use client";

import { useState } from "react";

const filters = [
  { id: "latest", label: "Latest" },
  { id: "Fullstack", label: "Fullstack" },
  { id: "React", label: "React" },
  { id: "Next Js", label: "Next Js" },
  { id: "Node.js", label: "Node.js" },
  { id: "HTML, CSS, Bootstrap, JS", label: "HTML & CSS" },
];

interface ProjectFilterProps {
  onFilterChange: (filter: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("latest");

  const handleFilterClick = (filterId: string) => {
    setSelectedFilter(filterId);
    onFilterChange(filterId);
  };

  return (
    <div className="flex flex-wrap justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`mx-2 my-1 px-4 py-2 rounded-full ${
            selectedFilter === filter.id
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
          }`}
          onClick={() => handleFilterClick(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
