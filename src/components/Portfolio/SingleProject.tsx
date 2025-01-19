import { ProjectType } from "@/types/types";
import Image from "next/image";

const SingleProject = ({ project }: { project: ProjectType }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground">
          {project.description.split(" ").splice(0, 15).join(" ")}
        </p>

        <div className="flex justify-between mt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card text-primary shadow-lg px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
