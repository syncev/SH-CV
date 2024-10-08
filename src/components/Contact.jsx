import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import sendReady from "../assets/icons/send-icon-ready.png";
import sendPending from "../assets/icons/send-icon.png";

const Contact = () => {
  emailjs.init("aNe1Hqh99TCBtRhXj");
  // document.getElementById("contact-form");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.message &&
      formData.email.includes("@")
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm("service_cbysvhk", "template_gf4qh56", event.target).then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("Something went wrong. Please contact me directly at santiago.n.hernandez@gmail.com.");
        console.error(error.text);
      }
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div id="contact-section" className="contact-section">
      <div className="hero-shade"></div>
      <div className="title-wrapper">
        <h2 className="contact-header pageTitleFont">
          <span className="header-highlight">Get</span> in Touch
        </h2>
        <p className="contact-header-faded pageTitleFont">Get in Touch</p>
      </div>
      <div className="contactForm-wrapper">
        <div className="contactForm-shade"></div>
        <form
          action=""
          className="contact-form"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            className="input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="on"
          />
          <textarea
            type="text-area"
            placeholder="Message"
            className="input message "
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">
              <img 
              src={
                isFormValid() 
                ? sendReady 
                : sendPending
              }
              alt="" />
            </button>
        </form>
      </div>
    
      <div className="bottom-shade"></div>
    </div>
  );
};


export default Contact;
