import React from "react";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    // TODO Add glassmorphism effect
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't Be a Stranger !</h3>

          <p className="contact__description">
            Send a message, we're just a click away!
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Email</span>
                <h4 className="info__desc">aimanrazali909@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Phone</span>
                <h4 className="info__desc">+60172086856</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              target="__blank"
              href="https://www.linkedin.com/in/muhammad-aiman-55a070190/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
            <a
              target="__blank"
              href="https://github.com/aimanrazali"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form
          action="https://getform.io/f/7cef76b8-80f8-4eaa-88f6-b9c8f1ba34af"
          method="POST"
          className="contact__form"
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="form__control"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form__control"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                placeholder="Enter your subject"
                className="form__control"
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="Feel free to express yourself..."
              className="form__control textarea"
              required
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
