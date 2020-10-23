import React from "react"
import "./button.css"

const Button = props => {
  return (
    <button className="button" onClick={props.onClick}>
      <div>{props.name}</div>
    </button>
  )
}
export default Button
