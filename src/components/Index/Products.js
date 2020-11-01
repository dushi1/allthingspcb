import React from 'react'
import "../All.css"
import { ItemBox } from '../ItemBox'
import c1 from "../../images/c1.png"

export const Product = () => {
    return (
        <section id="product">
            <div id="aboutus" class="about-section aboutusl">
                <div class="container">
                    <div class="site-title text-center">
                        <h3>Product</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ItemBox name="Single side PCB" img={c1} />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ItemBox name="Double side PCB" img={c1} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ItemBox name="Multi layer PCB" img={c1} />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ItemBox name="Metal core PCB" img={c1} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
