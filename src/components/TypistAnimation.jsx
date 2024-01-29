import React from "react";
import ReactRotatingText from "react-rotating-text";

const TypistAnimation = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <span>I'm Aiman.</span> <br />
        <ReactRotatingText
          items={[
            " Software Engineer ",
            " Software Developer ",
            " Back End Developer ",
            " Web Developer ",
            " Fullstack Developer ",
            " MERN Stack Developer ",
          ]}
        />
      </h1>
    </div>
  );
};

export default TypistAnimation;
