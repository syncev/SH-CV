import React from "react";

import "../styles/Contact.scss";

import email from "../assets/icons/email.png";
import whatsapp from "../assets/icons/whatsapp.png";
import linkedin from "../assets/icons/linkedin.png";

const Contact = () => {
  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-title-wrapper">
        <div className="left-line"></div>
        <h2 className="contact-title">Contact Me</h2>
        <div className="right-line"></div>
      </div>
      <div className="contact-links-container">
        <a className="contact-link" href="mailto:santiago.n.hernandez@gmail.com">
          <img src={email} alt="email icon" />
          <p>santiago.n.hernandez@gmail.com</p>
        </a>
        <a className="contact-link" href="https://wa.me/5492615524840">
          <img src={whatsapp} alt="whatsapp icon" />
          <p>+54 9 (261) 552-4840</p>
        </a>
        <a className="contact-link" href="https://www.linkedin.com/in/san-hernandez/">
          <img src={linkedin} alt="linkedin icon" id="linkedin" />
          <p>linkedin.com/in/san-hernandez/</p>
        </a>
      </div>

      <div className="contact-bottom-phrase-wrapper">
        <p>{`< Thanks for scrolling />`}</p>
      </div>
    </section>
  );
};

export default Contact;
