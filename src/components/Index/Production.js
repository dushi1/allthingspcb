import React from 'react'
import "../All.css"
import c1 from "../../images/c1.png"

export const Production = () => {
    return (
        <>
            <div id="aboutus" class="about-section aboutusd">
                <div class="container">
                    <div class="site-title text-center">
                        <h3>Capablities</h3>
                    </div>

                    <div class="row about-inner-section">

                        <div class="col-xl-6 col-lg-6  col-md-6 about-right">
                            <img height="100%" src={c1} alt=" " />
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 about-inner-column">
                            <ul >
                                <li className="li">We take prototype as well as bulk production orders.</li>
                                <li className="li">We deal in Single side, Double side and Multilayer PCBs</li>
                                <li className="li">Board thickness available - 0.2mm to 3.2mm</li>
                                <li className="li">PCB Routing/ CNC V-SCoring</li>
                                <li className="li">Semi Automatic Electroless PTH Line</li>
                                <li className="li">CNC Drilling/ CNC Routing/ CNC Aluminium</li>
                                <li className="li">10 MIL TRACK AND CLEARANCE</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}