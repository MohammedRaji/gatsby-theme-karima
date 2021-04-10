import React from 'react'
//import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Link } from "gatsby"; 
import Icon from '../Icons/icon';
import * as styles from "./paginationlinks.module.css";

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
  const nextPage = '/page/' + (currentPage + 1).toString();
  
 
  return (
  
  
  <div className={styles.pagingContainer}>
  
        {!isFirstPage && <Link to={previousPage}></Link>}
        {[...Array(numberOfPages)].map((_val, index) => {
                
           let className = "";
           if ((currentPage - 1) === index ) className = styles.active;

          const pageNum = index + 1;
          //const active = ((currentPage - 1) === index )? "active" : "";
          return (
            <Link
              className={className}
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/" : `/page/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}><Icon name="next"/></Link>}
      </div>
  )
}

export default PaginationLinks
