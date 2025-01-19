import SingleTimeLine from "./SingleTimeLine";

const Timeline = () => {
  return (
    <section className="bg-background py-20 px-4" id="timeline">
      <div className="container">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
          <span className="text-foreground">Education & </span>
          <span className="text-primary">Experience</span>
        </h2>

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
