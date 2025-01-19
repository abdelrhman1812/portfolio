"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative"
    >
      <Image
        src="/assets/Images/Abdelrhman.png"
        alt="Abdelrhman"
        width={600}
        height={800}
        className="rounded-2xl"
        priority
        loading="eager"
      />
    </motion.div>
  );
};

export default HeroImage;
