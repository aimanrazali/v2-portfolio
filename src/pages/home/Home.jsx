/* eslint-disable react/no-unescaped-entities */
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
            Hello! I'm a graduate in Software Engineering from International
            Islamic University Malaysia, where I focused on Computer Science
            with a major in Software Engineering. I completed my degree in
            November 2023, marking the end of a significant academic journey.
            <br />
            Previously, I gained valuable industry exposure through an
            internship at{" "}
            <a href="https://www.dynasty-esports.com/">
              Dynasty Gaming & Media
            </a>
            , which concluded at the end of August 2023.
            {/* This experience was
            instrumental in applying my academic knwoledge to practical software
            development scenarios in a real-world setting. */}
            <br />
            Since October 2023, I have embarked on a professional career at{" "}
            <a href="https://www.mnrb.com.my/">
              MNRB Holdings Berhad Sdn. Bhd.
            </a>
            , where I am currently employed as a Backend Developer. This role
            allows me to continue honing my skills and contribute to impactful
            projects in the field of software engineering.
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
