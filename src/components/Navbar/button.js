import React from "react"
import "./button.css"

const Button = props => {
  return (
    <button className="button" onClick={props.onClick}>
      <div style={{ color: "white", fontWeight: "bold" }}>{props.name}</div>
    </button>
  )
}

export default Button
