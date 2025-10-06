import timelineData from "@/data/mock-timeline";
import ShowCertificationImage from "./ShowCertificationImage";
import WorkDescription from "./WorkDescription";

const SingleTimeLine = ({ type }: { type: "education" | "experience" }) => {
  const title = type === "education" ? "Education" : "Experience";

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-2.5 top-3 h-full w-0.5 bg-primary/20"></div>

        {timelineData?.[type].map((item, id) => (
          <div key={id} className="relative mb-12 pl-8">
            {/* Timeline dot */}
            <div className="absolute left-0 top-3 w-5 h-5 rounded-full bg-foreground border-2 border-primary"></div>

            <div className="bg-card shadow rounded-lg p-6">
              <h4 className="text-light text-lg font-semibold mb-2">
                {item.title}
              </h4>
              <h5 className="text-primary font-medium mb-5">
                @ {item.institution}{" "}
                {item.certificationImage && (
                  <ShowCertificationImage
                    certificationImage={item.certificationImage}
                  />
                )}
              </h5>
              <span className="inline-block bg-background text-primary text-sm shadow px-3 py-1 rounded-full mb-3">
                {item.date}
              </span>

              <WorkDescription description={item.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleTimeLine;
