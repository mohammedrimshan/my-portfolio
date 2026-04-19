import React from "react"
import { Card } from "./Card"
import "./Skills.css"
import { RiCodeSSlashLine } from "react-icons/ri"
import { GiBrain } from "react-icons/gi"
import { MdLaptopMac } from "react-icons/md"
import { FaDatabase } from "react-icons/fa"
import { ImAndroid } from "react-icons/im"
import { CiCloudOn } from "react-icons/ci"
import Reviews from "../Reviews/Reviews"

const Skills = () => {
  return (
    <div id="Skills">
      <div class="title" data-aos="flip-up" data-aos-duration="1000">
        <h1>
          Proficie
          <span
            style={{
              color: "#2196f3",
              textShadow:
                "0px 0px 10px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)",
            }}
          >
            nt.
          </span>
        </h1>
      </div>
      <div className="details">
        <Card
          img={RiCodeSSlashLine}
          title="Full Stack Development"
          stacks={["MERN Stack", "TypeScript"]}
        />
        <Card
          img={FaDatabase}
          title="Backend Engineering"
          stacks={["Node.js", "Express", "MongoDB"]}
        />
        <Card
          img={CiCloudOn}
          title="Real-time & AI"
          stacks={["Socket.io", "WebRTC", "OpenAI"]}
        />
        <Card
          img={MdLaptopMac}
          title="Frontend Mastery"
          stacks={["React.js", "Redux", "Tailwind"]}
        />
        <Card 
          img={GiBrain} 
          title="DevOps & Tools" 
          stacks={["Git", "Docker", "AWS"]} 
        />
        <Card 
          img={ImAndroid} 
          title="Problem Solving" 
          stacks={["Clean Architecture", "SOLID"]} 
        />
      </div>
      <Reviews />
    </div>
  )
}
export default Skills
