import React, { useState, useEffect } from "react"
import "./about.css"

function About() {
  const [show, setShow] = useState("education")

  const handle = e => {
    setShow(e)
  }
  return (
    <div id="about">
      <div className="cirlce"></div>
      <div className="col-1">
        <div className="img" data-aos="fade-right"></div>
      </div>
      <div className="col-2">
        <div className="col-2-data">
          <h1 data-aos="flip-up">
          <br></br>  
          <br></br> 
          About{" "}
            <span
              style={{
                color: "#2196f3",
                textShadow:
                  "0px 0px 1px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)",
              }}
            >
              me.
            </span>
          </h1>
          <p data-aos="fade-left">
            Hi there! My name is Mohammed Rimshan and I'm a front-end web developer
            with expertise in HTML, CSS, JavaScript, and React.js. Over the
            years, I've built a number of websites and web applications, and I'm
            always looking for new challenges to tackle. <br />
            <br />
            Recently, I've been expanding my skillset to include Python for data
            science and artificial intelligence. I'm fascinated by the potential
            of AI to transform industries and improve people's lives, and I'm
            excited to be part of this rapidly evolving field. In my free time,
            I enjoy tinkering with new technologies and exploring the latest
            trends in web development and AI. <br />
            <br />
            If you have a project or idea that you'd like to collaborate on,
            please don't hesitate to get in touch! I'm always up for a new
            challenge and would love to hear from you.
          </p>
          <div className="tab-title">
            <h5
              className="tab-link active-link"
              onClick={() => handle("education")}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Education
            </h5>
            <h5
              className="tab-link"
              onClick={() => handle("certificate")}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Certificate
            </h5>
          </div>

          {show === "education" ? (
  <div className="scroll-container">
    <ul className="scroll-list">
      <li>
        <span>BCA-BACHELOR OF COMPUTER APPLICATION</span>
        <br />
        UNIVERSITY OF CALICUT, 2021-24
      </li>
      <li>
        <span>HSS</span>
        <br />
        MSP HSS MALAPPURAM
      </li>
      <li>
        <span></span>
        <br />
     
      </li>
    </ul>
  </div>
) : (
  ""
)}
{show === "certificate" ? (
  <div className="scroll-container">
    <ul className="scroll-list">
      <li>
        <span>COURSERA</span>
        <br />
        Foundation Of Cyber Security 
      </li>
      <li>
        <span>COURSERA</span>
        <br />
        Play It Safe: Management Security Risks
      </li>
      <li>
        <span>COURSERA</span>
        <br />
        Connect And Protect: Networks And Network Security
      </li>
      <li>
        <span>ICT ACADEMY OF KERALA</span>
        <br />
        Machine Learning &amp; Artificial Intelligence 5 Days Boot Camp
      </li>
      <li>
        <span></span>
        <br />
      
      </li>
    </ul>
  </div>
) : (
  ""
)}

        </div>
      </div>
    </div>
  )
}

export default About
