import React from "react";
import Me from "/src/assets/me.png";
const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <h1 className="about-header">About Me:</h1>
      <section className="about-main">
        <p className="text 1">
          Hola! I'm Santiago Hernandez, a '90s kid from the vibrant landscapes
          of Argentina. My tech journey started as a gamer, evolving into a
          full-blown tech enthusiast who loves to tinker, customize, and explore
          anything tech-related. Web development, with its intriguing blend of
          creativity and functionality, became a passion I pursued through
          online free courses like FreeCodeCamp. Enrolling in Argentina Programa
          marked a significant step, where I completed two courses in front-end
          web development. <br />
        </p>
        <p className="text 2">
          Beyond coding, you'll find me embracing the beauty of the outdoors.
          Hiking and camping are not just hobbies; they're a way of life. It's
          in these natural spaces that I find inspiration and balance,
          contributing to a well-rounded perspective on creativity. <br />
        </p>
        <p className="text 3">
          For me, web development is akin to navigating a dynamic canvas where
          imagination and functionality converge. Let's connect and explore the
          endless possibilities that web development offers—a realm where every
          line of code is a brushstroke on the canvas of the digital world.
        </p>
      </section>
      <img src={Me} alt="my profile picture" className="about-img" />
    </div>
  );
};

export default AboutMe;
