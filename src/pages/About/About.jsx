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
            I am a results-driven **MERN Stack Developer** with a passion for building scalable, high-impact web applications. With a solid foundation in **React.js, Node.js, Express, and MongoDB**, I specialize in architecting clean, maintainable codebases and implementing complex features like real-time communication and AI integration. <br />
            <br />
            My professional journey includes mentoring 50+ junior developers and overseeing code quality for enterprise-grade projects. I thrive in agile environments where I can leverage my expertise in **TypeScript, WebRTC, and Socket.io** to solve real-world problems. <br />
            <br />
            Driven by curiosity and a commitment to excellence, I am always exploring emerging technologies—from **AI-powered tools** to **cloud-native architectures**—to deliver seamless user experiences and robust backend solutions.
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
        <span>BCA - BACHELOR OF COMPUTER APPLICATION</span>
        <br />
        University of Calicut, 2021-2024 (GPA: 7.1/10)
      </li>
      <li>
        <span>Higher Secondary Education</span>
        <br />
        MSP HSS Malappuram
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
