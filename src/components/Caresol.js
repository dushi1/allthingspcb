import React from "react"
import * as R from "react-bootstrap"
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c6.png"
import "./All.css"

const Carousel = () => {
  return (
    <R.Carousel className="carousel">
      <R.Carousel.Item>
        <img className="d-block w-100" src={c1} alt="First slide" style={{ height: "30rem" }} />
        <R.Carousel.Caption>
          <h3 style={{ color: "black", backgroundColor: "white" }}>All Things PCB</h3>
          <p style={{ color: "black", backgroundColor: "white" }}>PCB manufacturer in new Delhi</p>
        </R.Carousel.Caption>
      </R.Carousel.Item>
      <R.Carousel.Item>
        <img className="d-block w-100" src={c2} alt="Third slide" style={{ height: "30rem" }} />

        <R.Carousel.Caption>
          <h3 style={{ color: "black", backgroundColor: "white" }}>High Quality PCB</h3>
          <p style={{ color: "black", backgroundColor: "white" }}>We deal in Single side, Double side and Multilayer PCBs</p>
        </R.Carousel.Caption>
      </R.Carousel.Item>
      <R.Carousel.Item>
        <img className="d-block w-100" src={c3} alt="Third slide" style={{ height: "30rem" }} />

        <R.Carousel.Caption>
          <h3 style={{ color: "black", backgroundColor: "white" }}>We Always Deliver On Time</h3>
          <p style={{ color: "black", backgroundColor: "white" }}>
            We take prototype as well as bulk production orders.
          </p>
        </R.Carousel.Caption>
      </R.Carousel.Item>
    </R.Carousel>
  )
}

export default Carousel
