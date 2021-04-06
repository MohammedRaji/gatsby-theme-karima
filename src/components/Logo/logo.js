
import React from "react"
//import PostLink from "./post-link"
import { useStaticQuery, graphql,Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



const query  = graphql`
  query {
    logo:file(relativePath: { eq: "logos/logo.jpg" }) {
     childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }  
  }
`

function Logo() {
  const data = useStaticQuery(query);
 // console.log(data);


  return (
<div className="logo-area" id="logo">
<Link to="/">
    
    <GatsbyImage image={data.logo.childImageSharp.gatsbyImageData} alt="logo"/>
</Link>
</div>
    )
}

function LogoFooter({pageContext}) {
  const data = useStaticQuery(query);
  console.log(pageContext);


  return (
<div className="logo-area" id="logoFooter">
    <img src={data.logoFooter.childImageSharp.fluid.src} alt='logo'/>
</div>
    )
}





export  {Logo, LogoFooter}












