import ContactInfo from "./ContactInfo";
import FormContactUs from "./FormContactUs";

const Contact = () => {
  return (
    <section className="bg-background py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-foreground">Get in </span>
          <span className="text-primary">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <ContactInfo />

          {/* Contact Form */}

          <FormContactUs />
        </div>
      </div>
    </section>
  );
};

export default Contact;
