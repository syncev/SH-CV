import React from "react";

const Contact = () => {
  return (
    <div className="contact-wrapper">
        <h2 className="contact-header">Contact Me
          </h2>
      <ul className="contact-list">
        <li className="contact-item linkedin">
          <a href="www.linkedin.com/in/san-hernandez">
            <img src="/src/assets/icons/linkedin.png" alt="" />
          </a>
        </li>
        <li className="contact-item email">
            <a href = "mailto: santiago.n.hernandez@gmail.com">
                <img src="/src/assets/icons/manzana.png" alt="" />
            </a>
            </li>
        <li className="contact-item facebook">
            <a href="https://www.facebook.com/santiago.n.hernandez/">
                <img src="/src/assets/icons/facebook.png" alt="" />
            </a>
        </li>
        <li className="contact-item instagram">
            <img src="/src/assets/icons/instagram.png" alt="" />
            <a href="http://instagram.com/saintyago_hernandez">
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
