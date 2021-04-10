import React from "react";
import { Link } from "gatsby";
import { GatsbyImage,StaticImage } from "gatsby-plugin-image"
import PaginationLinks from '../PaginationLink/PaginationLinks'
import * as styles from "./postlist.module.css"

function PostListing(props) {
  const postList = [];
  props.postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      category: postEdge.node.frontmatter.category,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      author: postEdge.node.frontmatter.author,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
      thumbnail: postEdge.node.frontmatter.featured
    });
  });
const { currentPage, numberOfPages } = props.pageContext;

  return (
    <main>
      {
        /* Your post list here. */
        postList.map((post,index) => (
        	<article className={styles.blogBbox}>
        	{post.thumbnail ? (
    			<div className={styles.itemImg}>
      				
      				<GatsbyImage className={styles.imgg} image={post.thumbnail.childImageSharp.gatsbyImageData} layout="fixed"
     width={200}
     height={200} alt="logo"/>
    			</div>
      		) : (
    			<div className={styles.itemImg}>
      				<StaticImage className={styles.imgg} width={400} src="https://via.placeholder.com/150" alt="Logo" />
    			</div>
      		)}
      	
      	<div className="item-content">
        	<div className={styles.postLabel}>{post.category}</div>
        	<Link to={post.path} key={index}>
            	<h1 className={styles.itemTitle}>{post.title}</h1>
         	</Link>
          
         	<div className={styles.postMeta}>
      			<span className={styles.postAuthor}>{post.author}</span>
      			<span className={styles.postDate}>{post.date}</span>
    		</div>
    		<p className={styles.excerpt}>{post.excerpt}</p>
    		
			<div className={styles.postMore}>
			<Link  to={post.path} className={styles.link} key={index}>
Read more
<svg className={styles.arrowIcon} height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<g fill="none" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5">
<circle className={styles.arrowIconCircle} cx="16" cy="16" r="15.12"></circle>
<path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
</g>
</svg>
</Link>
</div>
			
			
    	
    	</div>
    </article>
        ))
      }
       
      <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages} />
    </main>
  );
}

export default PostListing;
