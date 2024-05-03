import React from "react"
import "./experience.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"
import { experiences } from "../../constants"

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(33, 69, 159, 0.184)",
        color: "#fff",
        fontFamily: "Poppins",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #00abf0" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            style={{ width: "80%", height: "80%", objectFit: "contain", alignContent:"center"}}
          />
        </div>
      }
    >
      <div>
        <h3 style={{ fontSize: "24px", color: "#00abf0" }}>
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <ul className="card">
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} style={{ fontSize: "14px" }}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div id="Experience">
      <div class="title" data-aos="flip-up" data-aos-duration="2000">
        <h1>
          Experien
          <span
            style={{
              color: "#2196f3",
              textShadow:
                "0px 0px 10px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)",
            }}
          >
            ce.
          </span>
        </h1>
      </div>
      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}
export default Experience
