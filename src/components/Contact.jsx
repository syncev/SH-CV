import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import sendReady from "../assets/icons/send-icon-ready.png";
import sendPending from "../assets/icons/send-icon.png";

const Contact = () => {
  emailjs.init("xYIALu7-EhiHlbKuf");
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
    emailjs.sendForm("service_8w6kq0j", "template_vvwq3rc", event.target).then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result.text);
      },
      (error) => {
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
      {/* <div className="socials-wrapper">
        <a href="http://github.com/syncev">
          <img src={githubIcon} alt="Github" />
        </a>

        <a href="http://instagram.com/saintyago_hernandez">
          <img src={igIcon} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/san-hernandez">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div> */}
      <div className="bottom-shade"></div>
    </div>
  );
};


export default Contact;
