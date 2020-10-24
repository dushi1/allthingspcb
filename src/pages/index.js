import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/Caresol"
import "../components/layout.css"
import { Aboutus } from "../components/Index/Aboutus"
import { Production } from "../components/Index/Production"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <Aboutus />
    <Production />
  </Layout>
)

export default IndexPage
