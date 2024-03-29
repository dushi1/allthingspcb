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
                <div class="brand">
                  <img
                    class="brand-logo-light"
                    src={logo}
                    alt=""
                    width="140"
                    height="45"

                  />
                </div>
                <p style={{ paddingTop: "20px" }}>
                  Printed circuit board (PCB) design brings your electronic circuits to life in the physical form. Using layout software, the PCB design process combines component placement and routeing to define electrical connectivity on a manufactured circuit board.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Contacts</h5>
              <dl class="contact-list">
                <dt>Address:</dt>
                <dd> 4501,Dai Wara, Chawri Bazar, Delhi-110006</dd>
              </dl>
              <dl class="contact-list">
                <dt>email:</dt>
                <dd>
                  <div>allthingspcb.in@gmail.com</div>
                </dd>
              </dl>
              <dl class="contact-list">
                <dt>phones:</dt>
                <dd>
                  <a href="tel:+918802020256">+918802020256</a>
                </dd>
              </dl>
            </div>
            <div class="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul class="nav-list">
                {/* <li>
                  <a href="#" target="_blank">Google</a>
                </li> */}
                <li>
                  <a href="https://www.facebook.com/Allthingspcbin-114604550410837/" target="_blank" rel="noreferrer">Facebook</a>
                </li>
                <li>
                  <a href="https://instagram.com/allthingspcb.in?igshid=xiv0a5ubue8p" target="_blank" rel="noreferrer">Instagram</a>
                </li>
                {/* <li>
                  <a href="#">Twitter</a>
                </li> */}
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
