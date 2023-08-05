import React, { useEffect, useState } from "react";
import Profile from "../../assets/aiman2.jpeg";
// import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import TypistAnimation from "../../components/TypistAnimation";

const Home = () => {
  return (
    // TODO Add glassmorphism effect
    <section className="home section grid">
      {/* TODO Add react spinner */}
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <TypistAnimation />
          <p className="home__description">
            Hello! I'm Muhammad Aiman, a dynamic Software Engineering student in
            the final year at International Islamic University Malaysia. My
            academic focus lies in Computer Science with a major in Software
            Engineering.
            <br />
            Currently, I am gaining practical industry exposure through an
            internship at{" "}
            <a href="https://www.dynasty-esports.com/">
              Dynasty Gaming & Media
            </a>
            . This experience has allowed me to apply my academic knowledge to
            real-world software development scenarios.
            <br />
            My portfolio website offers a glimpse into my academic journey and
            practical experiences.
            <br />
            Thank you for visiting, and I'm excited to connect with like-minded
            individuals who share a passion for cutting-edge software solutions.
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
