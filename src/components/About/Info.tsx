import infoData from "@/data/mock-info-data";
import { motion } from "framer-motion";

const InfoSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {infoData.map((info, index) => (
        <motion.div
          key={info.title}
          custom={index}
          variants={cardVariants}
          className="flex flex-col items-center text-center"
        >
          {info.icon}
          <h3 className="font-bold text-xl text-foreground">{info.title}</h3>
          <p className="text-muted-foreground">{info.detail}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InfoSection;
