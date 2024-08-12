import React from "react";
import fbIcon from "/src/assets/icons/fbIcon.png";
import linkedinIcon from "/src/assets/icons/linkedin-icon.png";
import igIcon from "/src/assets/icons/ig-icon.png";
import mailIcon from "/src/assets/icons/mail-icon.png";

const Contact = () => {
  return (
    
      <ul className="contact-wrapper">
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
      </ul>
  );
};

export default Contact;
