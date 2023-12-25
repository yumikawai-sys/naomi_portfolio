/* eslint-disable */
import React, { useEffect,  useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
// import emailjs from "@emailjs/browser";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();
  
  useEffect(() => {
    // Initialize Email.js with your public key
    emailjs.init('FKYCa8uRnA7SHD2oB');
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
  
    // Generate a five-digit number for the contact_number variable
    form.contact_number.value = (Math.random() * 100000) | 0;
  
    try {
      // These IDs are from the Email.js service and template you set up
      const response = await emailjs.sendForm('service_6mi7l79', 'template_zutz0ms', form);
  
      console.log('SUCCESS!', response);
  
      // Reset the form after successful submission
      form.reset();
    } catch (error) {
      console.log('FAILED...', error);
    }
  };
  
  return (
    <div
  style={{
    backgroundImage:
      "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
    width: "80%",
    height: "96%",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
  }}
>
      {/* <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl bg-primary-600 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["I'll get back to you soon!"]} loop={true} />
          &nbsp;
        </h2>
      </div> */}
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={handleSubmit}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-grayscale-200"
        >
          <input type="hidden" name="contact_number" />
          <div className="w-full flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="First Name"
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Last Name"
              id="lastname"
              type="text"
              name="from_last"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="xxxx@email.com"
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label>Message</label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="I want to hear from you..."
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="w-[100px] h-[50px] bg-primary-600 rounded-xl cursor-pointer hover:bg-primary-700"
              type="submit"
              value={!isSent ? 'Send' : 'Done!'}
              
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;