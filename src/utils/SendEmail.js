import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export const validateForm = (formData) => {
  return formData.name && formData.email && formData.message;
};

export const handleSuccess = (resetForm) => {
  resetForm();
  toast.success("Thank you, my friend. I will reply back to you.", {
    duration: 3000,
    icon: "✅",
    position: "top-center",
  });
};

export const handleError = (errorMessage) => {
  toast.error(errorMessage, {
    duration: 3000,
    icon: "❌",
    position: "top-center",
  });
};

export const sendEmail = async (formRef, formData, resetForm, setLoading) => {
  if (!validateForm(formData)) {
    handleError("Please fill in all the fields to send the message.");
    return;
  }

  setLoading(true);
  try {
    await emailjs.sendForm(
      "service_b9k5nol",
      "template_us89pmf",
      formRef.current,
      "RYOyrKWRFVWTDR50M"
    );
    handleSuccess(resetForm);
  } catch (err) {
    console.error(err);
    handleError("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};
