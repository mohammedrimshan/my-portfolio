import React from "react"
import "./card.css"
import { FiLink, FiGithub } from "react-icons/fi"

const card = ({ name, image, description, link, github, stacks }) => {
  return (
    <div id="card" data-aos="flip-up" data-aos-duration="1000">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <div className="par">
          <p>{description}</p>
        </div>
        <h6
          style={{
            color: "white",
            paddingBottom: "10px",
            marginBottom: "0px",
            fontSize: "17px",
          }}
        >
          Stack
        </h6>
        <div className="btn">
          {stacks.map((stack, index) => (
            <button key={index}>{stack}</button>
          ))}
        </div>
        <div className="link">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FiGithub title="Source code" className="icons" />
          </a>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FiLink title="Project link" className="icons" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default card
