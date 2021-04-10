import React, {useState } from "react"
import { Link, graphql } from "gatsby"

const SearchPage = ({data}) => {

  //const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""
  

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    //const { data } = props

    const posts = data.allMarkdownRemark.edges || []
    

    const filteredData = posts.filter(post => {
      const {title, tags } = post.node.frontmatter
      return (
        //description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <div className="container" >
    <button className="close"><svg width="28" height="28" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" ratio="2"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></button>
      <h1 style={{ textAlign: `center` }}>Writing</h1>

<div className="searchPage">
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Search this blog..."
          onChange={handleInputChange}
        />
      </div>

      {
      
      hasSearchResults && 
      
      posts.map(({ node }) => {
        //const { excerpt } = node

        const { slug } = node.fields
        const {title, date } = node.frontmatter
        return (
          <article key={slug}>
            <header>
              <h2>
                <Link to={slug}>{title}</Link>
              </h2>

              <p>{date}</p>
            </header>
            <section>
              {/*<p
                dangerouslySetInnerHTML={{
                  __html: description || excerpt,
                }}
              />*/}
            </section>
            <hr />
          </article>
        )
      })}
      </div>
    </div>
  )
}

export default SearchPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            
            date(formatString: "MMMM DD, YYYY")

            
          }

          fields {
            slug
          }
        }
      }
    }
  }
`
