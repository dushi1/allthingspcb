import React from 'react'
import "../All.css"
import { ItemBox } from '../ItemBox'
import c1 from "../../images/c1.png"
import c7 from "../../images/c7.png"
import c4 from "../../images/c4.png"
import c5 from "../../images/c5.png"

export const Product = () => {
    return (
        <section id="product">
            <div id="aboutus" class="about-section aboutusl">
                <div class="container">
                    <div class="site-title text-center">
                        <h3>Products</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ItemBox name="Single side PCB" img={c1} />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ItemBox name="Double side PCB" img={c4} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ItemBox name="Multi layer PCB" img={c5} />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ItemBox name="Metal core PCB" img={c7} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
