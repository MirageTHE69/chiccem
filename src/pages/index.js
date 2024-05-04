import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Topnavbar from "../components/topnavbar"
import Navbar from "../components/navbar"
import HeroSection from "../components/herosection"
import Offers from "../components/offers"
import Speciality from "../components/specaility"
import Services from "../components/services"
import TeamMember from "../components/team"
import InfoSection from "../components/infosection"


const IndexPage = () => (
  
   
  <div className=" min-w-screen h-screen">
    <Topnavbar/>
    <Navbar/>
    <HeroSection/>
    <Offers/>
    <h1 className=" w-full text-2xl flex items-center justify-center mt-16 font-bold" >Essential Features</h1>
    <Speciality/>
    <Services/>
    <InfoSection/>
    

  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
