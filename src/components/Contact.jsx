import React from "react";

const Contact = () => {
  return (
    <div>
        Contact Me
      <ul>
        <li className="linkedin">
          <a href="www.linkedin.com/in/san-hernandez">
            <img src="/src/assets/icons/linkedin.png" alt="" />
          </a>
        </li>
        <li className="email">
            <a href = "mailto: santiago.n.hernandez@gmail.com">
                <img src="/src/assets/icons/manzana" alt="" />
            </a>
            </li>
        <li className="facebook">
            <a href="https://www.facebook.com/santiago.n.hernandez/">
                <img src="/src/assets/icons/facebook.png" alt="" />
            </a>
        </li>
        <li className="instagram">
            <img src="/src/assets/icons/instagram.png" alt="" />
            <a href="http://instagram.com/saintyago_hernandez">
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
