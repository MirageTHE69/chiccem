import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Topnavbar from "../components/topnavbar"
import Navbar from "../components/navbar"


const IndexPage = () => (
  
   
  <div className=" min-w-screen h-screen">
    <Topnavbar/>
    <Navbar/>

  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
