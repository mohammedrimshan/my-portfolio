import React from "react"
import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div id="Footer">
      <div className="left">
        <p>© Mohammed Rimshan, All Right Reserved</p>
      </div>
      <div className="right">
        <a href="https://github.com/mohammedrimshan">
          <FaGithub className="icons github" />
        </a>
        <a href="https://www.linkedin.com/in/mohammed-rimshan-02986a225/">
          <FaLinkedin className="icons linkedin" />
        </a>
        <a href="https://www.instagram.com/_rim__sha_n_/">
          <FaInstagram className="icons instagram" />
        </a>
      </div>
    </div>
  )
}

export default Footer