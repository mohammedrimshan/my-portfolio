import React, { useState } from "react"
import "./portfolio.css"
import Card from "./Cards/card"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { projects } from "../../constants"

const Portfolio = () => {
  const [state, setState] = useState(false)

  const handle = () => {
    setState(!state)
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  return (
    <div id="portfolio">
      <div class="title" data-aos="flip-up" data-aos-duration="2000">
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
        {projects.map(project => (
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
          <button onClick={() => handle(!state)}>Show more</button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
