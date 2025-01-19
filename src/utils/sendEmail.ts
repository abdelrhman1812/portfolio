import { SendEmailParams } from "@/types/types";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

// Define the success handler with correct typing
export const handleSuccess = (resetForm: () => void) => {
  resetForm();
  toast.success("Thank you, my friend. I will reply back to you.", {
    autoClose: 3000,
    position: "top-center",
  });
};

// Define the error handler with correct typing
export const handleError = (errorMessage: string) => {
  toast.error(errorMessage, {
    autoClose: 3000,
    position: "top-center",
  });
};

export const sendEmail = async ({
  formRef,
  formik,
  setIsLoading,
}: SendEmailParams) => {
  setIsLoading(true);
  try {
    // Send the email using emailjs
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAIL_USER_KEY
    );
    handleSuccess(formik.resetForm);
  } catch (err) {
    console.error(err);
    handleError("Something went wrong. Please try again later.");
  } finally {
    setIsLoading(false);
  }
};
