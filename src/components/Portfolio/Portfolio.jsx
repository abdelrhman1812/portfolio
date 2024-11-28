import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import projects from "../../data/projects";
import FilterButton from "./FilterButton";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef(null);

  const filters = [
    { id: "latest", label: "Latest" },
    { id: "Fullstack", label: "Fullstack" },
    { id: "React", label: "React" },
    { id: "Node.js", label: "Node.js" },
    { id: "HTML, CSS, Bootstrap, JS", label: "HTML & CSS" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const filter = filterRef.current;
    const projects = projectsRef.current;

    // Initial animations
    gsap.set([title, filter], {
      opacity: 0,
      y: 30,
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
    }).to(
      filter,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Projects animation on filter change
    const projectItems = projects.children;
    gsap.fromTo(
      projectItems,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projects,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [selectedFilter]);

  const filteredProjects = projects.filter((project) =>
    selectedFilter === "latest"
      ? project.isLatest
      : project.type.includes(selectedFilter)
  );

  return (
    <section
      id="portfolio"
      className="portfolio-section overflow-hidden position-relative"
      ref={sectionRef}
    >
      <div className="portfolio-bg-gradient"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="portfolio-title" ref={titleRef}>
              <span className="highlight position-relative overflow-hidden">
                Featured Projects
              </span>
            </h2>
          </div>
        </div>

        <div className="filter-container" ref={filterRef}>
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              label={filter.label}
              isActive={selectedFilter === filter.id}
              onClick={() => setSelectedFilter(filter.id)}
            />
          ))}
        </div>

        <div className="projects-grid" ref={projectsRef}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
