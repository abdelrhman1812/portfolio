import timelineData from "@/data/mock-timeline";
import { motion } from "framer-motion";

const SingleTimeLine = ({ type }: { type: "education" | "experience" }) => {
  const title = type === "education" ? "Education" : "Experience";

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-2.5 top-3 h-full w-0.5 bg-primary/20"></div>

        {timelineData?.[type].map((item, id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, x: type === "education" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: id * 0.2, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative mb-12 pl-8"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-3 w-5 h-5 rounded-full bg-foreground border-2 border-primary"></div>

            <div className="bg-card shadow rounded-lg p-6">
              <h4 className="text-light text-lg font-semibold mb-2">
                {item.title}
              </h4>
              <h5 className="text-white font-medium mb-2">
                {item.institution}
              </h5>
              <span className="inline-block bg-background text-primary text-sm shadow px-3 py-1 rounded-full mb-3">
                {item.date}
              </span>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SingleTimeLine;
