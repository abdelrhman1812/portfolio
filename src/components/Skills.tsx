import { skills } from "@/data/mock-skills";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="bg-background-alt py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-foreground text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Crafting digital experiences with modern technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="relative bg-card rounded-lg p-6 overflow-hidden group"
            >
              {/* Purple Glow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-gradient"></div>

              {/* Skill Icon and Name */}
              <div className="flex items-center space-x-4">
                <div className="bg-background p-3 rounded-lg">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-foreground text-lg font-medium">
                  {skill.name}
                </h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
