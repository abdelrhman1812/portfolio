import InfoSection from "./Info";

const About = () => {
  return (
    <section id="about" className="bg-background-alt py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-muted-foreground mb-6">
            {/* A frontend web developer with practical experience in frontend
            technologies like HTML5, CSS3, Bootstrap, TailwindCSS, JavaScript,
            TypeScript, and ReactJs, with a number of web designs deployed on
            GitHub. */}
            Frontend Developer with one year of experience building dynamic and
            responsive user interfaces. Proficient in React.js, Next.js,
            JavaScript (ES6+), Tailwind CSS, Redux, and TanStack Query, with
            practical experience integrating with backend services using the
            MERN stack (MongoDB, Express.js, and Node.js). Committed to
            delivering high-quality software solutions through clean, scalable
            code and continuously enhancing my skills to stay at the forefront
            of the tech industry.
          </p>
        </div>

        <InfoSection />
      </div>
    </section>
  );
};

export default About;
