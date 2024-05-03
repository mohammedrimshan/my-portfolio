import React from "react"
import "./VerticalLineRight.css"
import { FiGithub, FiLinkedin, FiTwitter, FiPhone, FiInstagram } from "react-icons/fi"
import { SiLeetcode } from "react-icons/si"
import { socialmedia } from "../../constants"
const VerticalLineRight = () => {
  return (
    <div id="lineR">
      <div className="line-links">
        <a
          href={socialmedia[0].github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="icons" />
        </a>
        <a
          href={socialmedia[0].phone}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiPhone className="icons" />
        </a>
        <a
          href={socialmedia[0].linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="icons" />
        </a>
        <a
          href={socialmedia[0].instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram className="icons" />
        </a>
        <a
          href={socialmedia[0].leetcode}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="icons" />
        </a>
      </div>
      {/* Add other social media icons and links here */}
    </div>
  )
}
export default VerticalLineRight