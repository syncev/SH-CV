import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  emailjs.init("xYIALu7-EhiHlbKuf");
  document.getElementById('contact-form');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    emailjs
      .sendForm(
        "service_8w6kq0j",
        "template_vvwq3rc",
        event.target
      )
      .then(
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
        <form action="" className="contact-form" id="contact-form" onSubmit={handleSubmit}>
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
            <img src="src/assets/icons/send-icon.png" alt="" />
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
{
  /* <ul className="contact-wrapper">
  <li className="contact-item linkedin">
    <a href="https://www.linkedin.com/in/san-hernandez">
    <img className="socialBtn1" src={linkedinIcon} alt="LinkedIn" />
    </a>
  </li>
  <li className="contact-item email">
    <a href="mailto: santiago.n.hernandez@gmail.com">
    <img className="socialBtn2" src={mailIcon} alt="Email" />
    </a>
  </li>
  <li className="contact-item facebook">
    <a href="https://www.facebook.com/santiago.n.hernandez/">
    <img className="socialBtn3" src={fbIcon} alt="Facebook" />
    </a>
  </li>
  <li className="contact-item instagram">
    <a href="http://instagram.com/saintyago_hernandez">
    <img className="socialBtn4" src={igIcon} alt="Instagram" />
    </a>
  </li>
</ul> */
}

export default Contact;
