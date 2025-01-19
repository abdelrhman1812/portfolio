import { sendEmail } from "@/utils/sendEmail";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { TbLoader } from "react-icons/tb";
import * as Yup from "yup";

const FormContactUs = () => {
  const [, setError] = useState<string | null>(null);
  const [IsLoading, setIsLoading] = useState<boolean>(false);

  // Create a ref for the form
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = () => {
    console.log("formRef", formRef);
    sendEmail({
      formRef: formRef as React.RefObject<HTMLFormElement>,
      formik,
      setIsLoading,
    });
  };

  /* ========== Validation ========== */
  const validationSchema = useMemo(() => {
    return Yup.object({
      name: Yup.string()
        .min(2, "Name must be 2 characters long")
        .required("Name must be required"),
      email: Yup.string()
        .email("Enter a valid Email")
        .required("Email must be required"),
      message: Yup.string()
        .min(2, "Message must be at least 2 characters long")
        .required("Message must be at least 2 characters long"),
    });
  }, []);

  /* ========== Formik || Catch Value || Send Data ========== */
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    validate: () => {
      setError(null);
    },
    onSubmit: handleSubmit,
  });

  return (
    <motion.form
      ref={formRef}
      className="space-y-6"
      onSubmit={formik.handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-2"
      >
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Name"
          className="w-full bg-card shadow text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 my-2">{formik.errors.name}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-2"
      >
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Email"
          className="w-full bg-card shadow text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 my-2">{formik.errors.email}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="space-y-2"
      >
        <textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Message"
          rows={6}
          className="w-full bg-card shadow text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
        ></textarea>
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 my-2">{formik.errors.message}</p>
        )}
      </motion.div>

      <button
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
        className="w-full text-white flex justify-center font-medium py-3 rounded-lg 
        transition-colors duration-300 bg-primary-gradient"
      >
        {IsLoading ? <TbLoader size={30} /> : "Send Message"}
      </button>
    </motion.form>
  );
};

export default FormContactUs;
