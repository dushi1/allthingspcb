import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/Caresol"
import "../components/layout.css"
import { Aboutus } from "../components/Index/Aboutus"
import { Production } from "../components/Index/Production"
import { Product } from "../components/Index/Products"
import Form from "../components/Index/Form"
import "../components/All.css"
import { Yus } from "../components/Index/Yus"


const IndexPage = () => (
  <div style={{ overflowX: "hidden" }}>
    <Layout>
      <SEO title="Home" description="PCB on order" lang="en" meta="pcb" />
      <div className="adjust">
        <Carousel />
        <Form />
      </div>
      <Aboutus />
      <Production />
      <Product />
      <Yus />
    </Layout>
  </div>
)

export default IndexPage
