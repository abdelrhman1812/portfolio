"use client";

import { services } from "@/data/mock-services";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="bg-background py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-foreground mb-12"
        >
          <span className="text-primary"> My</span> Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative bg-card rounded-lg p-6 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: service.id * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Purple Glow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-gradient"></div>

              {/* Service Icon and Details */}
              <div className="flex items-center flex-col gap-y-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
