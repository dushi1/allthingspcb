import React from 'react'
import "../All.css"
import c1 from "../../images/c8.png"
import { graphql, useStaticQuery } from 'gatsby'


export const Aboutus = () => {

    return (
        <section id="about">
            <div id="aboutus" class="about-section aboutusl">
                <div class="container">
                    <div class="site-title text-center">
                        <h3>About Us</h3>
                    </div>

                    <div class="row about-inner-section">
                        <div class="col-xl-6 col-lg-6 col-md-6 about-inner-column">
                            <h4>All Things PCB</h4>
                            <p>We, at All Things PCB,offer a wide range of bare PCBs & related services that meet today’s technologies. The services include PCB Layout Design, Gerber Editing, Data Conversion, PCB fabrication, and much more. With a team with an experience of more than 30 years, we aim towards providing high quality services to meet with customers’ satisfactions along with added product reliability, cost effectiveness and manufacturability.We cover all aspects of circuit board production including : " Artwork design and layout, using advanced CAD techniques " Quick turn prototypes " Circuit board production and assembly. An awareness of contemporary organisational standards with competitive pricing, product reliability and end to end hand holding is what sets our company apart. </p>

                        </div>
                        <div class="col-xl-6 col-lg-6  col-md-6 about-right" >
                            <img height="100%" src={c1} alt="pcb" />
                            {/* <Img fluid={data.c1.childImageSharp.fixed} alt="pcb photo" style={{ height: "100%" }} /> */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
