
import React from "react"
//import PostLink from "./post-link"
import { useStaticQuery, graphql} from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"




const query  = graphql`
  query {
    
    
    image:file(relativePath: { eq: "logos/author.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    
    info:site{
    siteMetadata{
      authorname
      authordes
    }
  }
  }
`

function Bio() {
  const data = useStaticQuery(query);
 
  return (
<div className="info" id="logo">
<GatsbyImage image={data.image.childImageSharp.gatsbyImageData} alt="author image"/>
    <h1>{data.info.siteMetadata.authorname}</h1>
    <p>{data.info.siteMetadata.authordes}</p>

</div>
    )
}



export  default Bio












