import React from 'react'
//import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Link } from "gatsby"; 
const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
  const nextPage = '/page/' + (currentPage + 1).toString()
  return (
  
  <div className="paging-container">
        {!isFirstPage && <Link to={previousPage}>Previous</Link>}
        {[...Array(numberOfPages)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/" : `/page/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </div>
  )
}

export default PaginationLinks
