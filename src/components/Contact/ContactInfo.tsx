import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground text-lg">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>

      <div className="space-y-4">
        {/* Email */}
        <div className="bg-card shadow rounded-lg p-4 flex items-center space-x-4">
          <div className="bg-primary-gradient px-5 py-3 rounded-lg">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-foreground font-medium">Email</h3>
            <p className="text-muted-foreground">abdelrhmanali1812@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-card shadow rounded-lg p-4 flex items-center space-x-4">
          <div className="bg-primary-gradient px-5 py-3 rounded-lg">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-foreground font-medium">Phone</h3>
            <p className="text-muted-foreground">+20 100 803 4761</p>
          </div>
        </div>

        {/* Location */}
        <div className="bg-card shadow rounded-lg p-4 flex items-center space-x-4">
          <div className="bg-primary-gradient px-5 py-3 rounded-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-foreground font-medium">Location</h3>
            <p className="text-muted-foreground">Cairo, Egypt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
