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
          img={FaDatabase}
          title="Backend Developer"
          stacks={["MYSQL", "Django"]}
        />
        <Card
          img={RiCodeSSlashLine}
          title="Frontend Developer"
          stacks={["REACT.JS", ]}
        />
        <Card
          img={CiCloudOn}
          title="Cloud Backend"
          stacks={["MYSQL", "Django"]}
        />
        <Card
          img={ImAndroid}
          title="Mobile App Developer"
          stacks={["Dart"]}
        />
        <Card img={GiBrain} title="Problem Solving" stacks={["Python", "C"]} />
        <Card img={MdLaptopMac} title="UI/UX" stacks={["HTML","CSS","JavaScript"]} />
      </div>
      <Reviews />
    </div>
  )
}
export default Skills
