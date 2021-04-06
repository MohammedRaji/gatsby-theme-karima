import * as React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import PostListing from "../components/PostListing/PostListing";
import Sidebar from "../components/Sidebar/Sidebar";



const IndexPage = ({data})=> {
const postEdges = data.allMarkdownRemark.edges;
  return (
      <Layout>
      
      <section className="sectionStyles container">
      	<PostListing postEdges={postEdges} />
      	<Sidebar/>
      </section>
      </Layout>
  )
}

export default IndexPage


export const listingQuery = graphql`
  query IndexQuery($limit: Int) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            category
            featured{
              childImageSharp {
                gatsbyImageData(
                width: 330
         		
         		layout: FIXED)
              }
            }
            date(formatString: "MMMM DD, YYYY")
            author
          }
        }
      }
    }
  }
`;

