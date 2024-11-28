import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const contactInfo = [
  {
    title: "Email",
    value: "abdelrhmanali1812@gmail.com",
    icon: <FaEnvelope size={24} />,
    type: "link",
    href: "mailto:abdelrhmanali1812@gmail.com",
  },
  {
    title: "Phone",
    value: "+20 100 803 4761",
    icon: <FaPhone size={24} />,
    type: "link",
    href: "tel:+201008034761",
  },
  {
    title: "Location",
    value: "Cairo, Egypt",
    icon: <FaMapMarkerAlt size={24} />,
  },
];

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p className="contact-description">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>

      <div className="info-items d-flex r flex-column gap-3">
        {contactInfo.map((item, index) => (
          <div key={index} className="info-item ">
            <div className="info-icon d-flex align-items-center justify-content-center">
              {item.icon}
            </div>
            <div className="info-content">
              <h4>{item.title}</h4>
              {item.href ? (
                <a href={item.href} className="contact-link">
                  <p>{item.value}</p>
                </a>
              ) : (
                <p>{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
