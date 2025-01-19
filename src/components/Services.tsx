import { services } from "@/data/mock-services";

const Services = () => {
  return (
    <section id="services" className="bg-background py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          <span className="text-primary"> My</span> Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-card rounded-lg p-6 overflow-hidden group"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
