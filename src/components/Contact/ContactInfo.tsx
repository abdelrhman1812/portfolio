import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -50 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground text-lg"
      >
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-4"
      >
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-card shadow rounded-lg p-4 flex items-center space-x-4"
        >
          <div className="bg-primary-gradient px-5 py-3 rounded-lg">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-foreground font-medium">Email</h3>
            <p className="text-muted-foreground">abdelrhmanali1812@gmail.com</p>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-card shadow rounded-lg p-4 flex items-center space-x-4"
        >
          <div className="bg-primary-gradient px-5 py-3 rounded-lg">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-foreground font-medium">Phone</h3>
            <p className="text-muted-foreground">+20 100 803 4761</p>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-card shadow rounded-lg p-4 flex items-center space-x-4"
        >
          <div className="bg-primary-gradient px-5 py-3 rounded-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-foreground font-medium">Location</h3>
            <p className="text-muted-foreground">Cairo, Egypt</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
