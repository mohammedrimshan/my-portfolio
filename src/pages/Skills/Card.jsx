import React from "react"
import "./Card.css"

export const Card = props => {
  return (
    <div id="Card" data-aos="flip-up">
      <div className="content">
        {props.img && <props.img className="icons" />}
        <div className="desc">
          <h3>{props.title}</h3>
          <div className="btn">
            {Array.isArray(props.stacks) &&
              props.stacks.map((stack, index) => (
                <button key={index}>{stack}</button>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
