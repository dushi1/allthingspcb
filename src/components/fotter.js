import React from "react"
import "./fotter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <>
            {/* <footer className="main">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="grid">
                            <div style={{ fontSize: "2rem" }}>Contact</div>
                            <div style={{ paddingTop: "10px", fontSize: "1.5rem" }}>
                                Address
                        </div>
                            <div style={{ lineHeight: "5px" }}>
                                A3/19a green appartments paschim vihar new delhi-110063
                        </div>
                            <div style={{ paddingTop: "20px", fontSize: "1.5rem" }}>
                                Mobile
                        </div>
                            <div style={{}}>
                                9911707478
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="grid">
                            <FontAwesomeIcon icon={["fal", "coffee"]} />
                        </div>
                    </div>
                </div>

            </footer> */}
            <div style={{ display: "flex", width: "100%", height: "50px", backgroundColor: "#313639", alignItems: "center", justifyContent: "center", color: "white" }}>
                Copyright © 2020 allthingspcb.in
            </div>
        </>
    )
}


export default Footer
