import React from "react"
import "./fotter.css"
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <section id="contact">
      <footer
        class="section footer-classic context-dark bg-image"
        style={{ backgroundColor: "black", padding: "1rem 0" }}
      >
        <div class="container">
          <div class="row row-30">
            <div class="col-md-4 col-xl-5">
              <div class="pr-xl-4">
                <a class="brand">
                  <img
                    class="brand-logo-light"
                    src={logo}
                    alt=""
                    width="140"
                    height="45"

                  />
                </a>
                <p style={{ paddingTop: "20px" }}>
                  Printed circuit board (PCB) design brings your electronic circuits to life in the physical form. Using layout software, the PCB design process combines component placement and routeing to define electrical connectivity on a manufactured circuit board.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Contacts</h5>
              <dl class="contact-list">
                <dt>Address:</dt>
                <dd>798 South Park Avenue, Jaipur, Raj</dd>
              </dl>
              <dl class="contact-list">
                <dt>email:</dt>
                <dd>
                  <a href="mailto:#">dkstudioin@gmail.com</a>
                </dd>
              </dl>
              <dl class="contact-list">
                <dt>phones:</dt>
                <dd>
                  <a href="tel:#">https://karosearch.com</a> <span>or</span>{" "}
                  <a href="tel:#">https://karosearch.com</a>
                </dd>
              </dl>
            </div>
            <div class="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul class="nav-list">
                <li>
                  <a href="#">Google</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div class="row no-gutters social-container">
          <div class="col">
            <a class="social-inner" href="#">
              <span class="icon mdi mdi-facebook"></span>
              <span>Facebook</span>
            </a>
          </div>
          <div class="col">
            <a class="social-inner" href="#">
              <span class="icon mdi mdi-instagram"></span>
              <span>instagram</span>
            </a>
          </div>
          <div class="col">
            <a class="social-inner" href="#">
              <span class="icon mdi mdi-twitter"></span>
              <span>twitter</span>
            </a>
          </div>
          <div class="col">
            <a class="social-inner" href="#">
              <span class="icon mdi mdi-youtube-play"></span>
              <span>google</span>
            </a>
          </div>
        </div> */}
      </footer>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50px",
          backgroundColor: "#313639",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Copyright © 2020 allthingspcb.in
      </div>
    </section>
  )
}

export default Footer
