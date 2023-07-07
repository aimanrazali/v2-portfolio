import React from "react";
import ReactRotatingText from "react-rotating-text";

const TypistAnimation = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <span>I'm Aiman.</span> <br />
        <ReactRotatingText
          items={[
            " Fullstack Developer ",
            " Software Developer ",
            " Web Developer ",
            " Software Engineer ",
          ]}
        />
      </h1>
    </div>
  );
};

export default TypistAnimation;
