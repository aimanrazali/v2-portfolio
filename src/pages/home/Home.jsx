import React from "react";
import Profile from "../../assets/aiman2.jpeg";
// import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Aiman.</span> <br />
            Software Engineer
          </h1>

          <p className="home__description">
            Hey! My name is Muhammad Aiman, a software engineering student in my
            final year at International Islamic University Malaysia pursuing a
            degree in Computer Science with a major in Software Engineering.
            Currently, I'm gaining valuable industry experience as a software
            engineering intern at Dynasty Gaming & Media.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
