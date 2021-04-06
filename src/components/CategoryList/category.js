import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./category.module.css"

const query = graphql`
query {
  allMarkdownRemark{
		edges{
			node{
				frontmatter{
					category
				}
			}
		}
  }
}
`

function Category(props) {
	const data = useStaticQuery(query)
  	let edges = data.allMarkdownRemark.edges;
	const arr =[];
  	edges.map(edge =>(
  		arr.push(edge.node.frontmatter.category)
  	))

//const arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
	const categories = arr.reduce((acc, curr) => {
  		acc[curr] ??= {[curr]: 0};
  		acc[curr][curr]++;
  		return acc;
	}, {});

//console.log(Object.values(categories))

  return (
    

		<>
          <h3 className={styles.title}> {props.title}</h3>    
		<ul className={styles.labelList}>
		{Object.values(categories).map(function(category, index) {
		
		return(
		
		<li key={index}>
					<Link
            key={index}
            style={{ textDecoration: "none" }}
            to={`/category/${_.kebabCase(Object.keys(category))}`}
          >
          {Object.keys(category)} <span>{Object.values(category)}</span>
          </Link>
					</li>)}
					
					
					
					
					
          
					
					
					
					)}
              
            </ul>
          </>

  	)
}




export default Category

/*export default MainMenu*/
