import React, { useState, useEffect } from "react"
import "./portfolio.css"
import Card from "./Cards/card"
import AOS from "aos"
import "aos/dist/aos.css"
import { projects } from "../../constants"

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const visibleProjects = showMore ? projects : projects.slice(0, 4)

  return (
    <div id="portfolio">
      <div className="title" data-aos="flip-up" data-aos-duration="2000">
        <h1>
          Portfol
          <span
            style={{
              color: "#2196f3",
              textShadow:
                "0px 0px 10px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)",
            }}
          >
            io.
          </span>
        </h1>
      </div>

      <div className="card-row">
        {visibleProjects.map(project => (
          <Card
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
            stacks={project.stacks}
          />
        ))}
      </div>

      <div className="show">
        <div className="btn">
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
