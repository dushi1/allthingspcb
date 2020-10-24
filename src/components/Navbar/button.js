import React from "react"
import "./button.css"
import { Link } from "gatsby"

const Button = props => {
  return (
    <button className="button" onClick={props.onClick}>
      <a style={{ color: "white", fontWeight: "bold" }} href={props.to}>
        {props.name}
      </a>
    </button>
  )
}

export default Button
