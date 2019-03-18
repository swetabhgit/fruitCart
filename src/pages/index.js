import React from "react"
import { Link } from "gatsby"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Head from "../../src/components/head"
import Carousel from 'react-bootstrap/Carousel'
import ReverseHorizontalCard from '../components/card'
import HorizontalCard from '../components/horizontal-card'
import CarouselComponent from '../components/carousel'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Footer from '../../src/components/footer'
//import Carousel from '../components/carousel'


const IndexPage = ({data}) => (

  <div>
    <script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin
/>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Head/>
    <CarouselComponent allImage={data.allFile.edges}/>
    
    <ReverseHorizontalCard detail={data.file.childImageSharp.fixed.src}/>
    <HorizontalCard detail={data.file.childImageSharp.fixed.src}/>
    <ReverseHorizontalCard detail={data.file.childImageSharp.fixed.src}/>
    <HorizontalCard detail={data.file.childImageSharp.fixed.src}/>
    {console.log()}
    <Footer/>
    {data.allFile.edges.forEach(edge=>{console.log(edge.node.childImageSharp.fixed.src)})}
    </div> 
     
)

export default IndexPage
export const query = graphql`
query{
  
    file(relativePath:{eq:"logo.png"})
    {
     childImageSharp
      {
        fixed
        {
          src
        }
      }
    }
    
      allFile(filter:{relativeDirectory:{eq:"carousel_image"}}){
        edges
        {
          node
          {
            childImageSharp
            {
              fixed {
                src
              }
            }
          }
        }
      }
    
  
}`