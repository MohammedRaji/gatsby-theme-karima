import React from "react";
import { Helmet } from "react-helmet";
import { graphql} from "gatsby";
import Layout from '../components/Layout/layout'
import PostListing from "../components/PostListing/PostListing";
import Seo from "../components/SEO/seo";
import Sidebar from "../components/Sidebar/Sidebar";

import config from "../../data/SiteConfig";
//import "./listing.css";

function Listing({ pageContext, data }) {
//const { currentPage, numberOfPages } = pageContext;
const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      
      <section className="sectionStyles container">
       <Helmet title={config.siteTitle} />
       <Seo/>
      <div>
      	<PostListing postEdges={postEdges} pageContext={pageContext}/>
      	
      	</div>
      	<Sidebar/>
      	
      </section>
      </Layout>
  );
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
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
