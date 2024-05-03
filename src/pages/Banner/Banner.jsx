import React from "react"
import "./Banner.css"
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"
import { Typewriter } from "react-simple-typewriter"

export const Banner = () => {
  return (
    <div id="Banner">
      <div className="main-left">
        <div className="col">
          <div className="col-socialmedia" data-aos="zoom-in-right">
            <a href="https://github.com/mohammedrimshan">
              <FiGithub className="icons github" />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-rimshan-02986a225/">
              <FiLinkedin className="icons linkedin" />
            </a>
            <a href="https://www.instagram.com/_rim__sha_n_/">
              <FiInstagram className="icons instagram" />
            </a>
          </div>
          <div className="col-intro">
            <h5 data-aos="fade-in">Hi I'm</h5>
            <h1 data-aos="flip-up" data-aos-duration="2000">
            Mohammed Rimshan
            </h1>
            <h3 data-aos="flip-up">
              <span className="auto-type">
                {" "}
                <Typewriter
                  words={[
                    "FrontEnd Developer",
                    "React JS Developer",
                    "Video Editor",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h3>
            <a
              href="https://drive.google.com/file/d/1zaihTdZvWRFsHhP594Tm_Q9_Ra8H0ZJU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button" data-aos="flip-down">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="img"></div>
      </div>
    </div>
  )
}
