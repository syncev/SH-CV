import React from "react";
import linkedin from "/src/assets/icons/linkedin.png";
import manzana from "/src/assets/icons/manzana.png"
import facebook from "/src/assets/icons/facebook.png";
import instagram from "/src/assets/icons/instagram.png";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      
        <h2 className="contact-header">Contact Me
          </h2>
      <ul className="contact-list">
        <li className="contact-item linkedin">
          <a href="www.linkedin.com/in/san-hernandez">
            <img src={linkedin} alt="" />
          </a>
        </li>
        <li className="contact-item email">
            <a href = "mailto: santiago.n.hernandez@gmail.com">
                <img src={manzana} alt="" />
            </a>
            </li>
        <li className="contact-item facebook">
            <a href="https://www.facebook.com/santiago.n.hernandez/">
                <img src={facebook} alt="" />
            </a>
        </li>
        <li className="contact-item instagram">
            <img src={instagram} alt="" />
            <a href="http://instagram.com/saintyago_hernandez">
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
