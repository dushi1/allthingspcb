import React from "react"
import * as R from "react-bootstrap"
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"

const Carousel = () => {
  return (
    <R.Carousel>
      <R.Carousel.Item>
        <img className="d-block w-100" src={c1} alt="First slide" />
        <R.Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </R.Carousel.Caption>
      </R.Carousel.Item>
      <R.Carousel.Item>
        <img className="d-block w-100" src={c2} alt="Third slide" />

        <R.Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </R.Carousel.Caption>
      </R.Carousel.Item>
      <R.Carousel.Item>
        <img className="d-block w-100" src={c3} alt="Third slide" />

        <R.Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </R.Carousel.Caption>
      </R.Carousel.Item>
    </R.Carousel>
  )
}

export default Carousel
