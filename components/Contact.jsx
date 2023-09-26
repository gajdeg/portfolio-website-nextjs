import emailjs from "emailjs-com";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USERID
      );

      setFormData((prevData) => ({
        ...prevData,
        name: "",
        email: "",
        message: "",
      }));
      toast.success(`${formData.name}, your message was sent successfully!`);
    } catch (error) {
      toast.error("An error occurred while sending the email.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center md:mt-0 rounded-xl border-2 border-[#49345e] w-3/4 md:w-3/6 lg:w-2/6">
      <div className="text text-lg w-full pl-8 pt-4 uppercase">
        Get in Touch
      </div>
      <div className="text-5xl w-full pl-8 pt-2">Contact.</div>
      <div></div>
      <form
        id="contact-form"
        method="POST"
        className="w-full px-8 py-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col py-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="flex justify-center bg-[#b366ff67] text-center rounded w-24 mt-2 py-1 hover:bg-[#b366ff]"
        >
          Send
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
