import React from 'react'

const Pagination = ({changePage, elem, page}) => {
  return (
    <li className="section-content__item-pagination">
        <button onClick={ () => changePage(elem)} 
            className={page === elem ? "section-content__button-page section-content__button-page_active"  : "section-content__button-page"}>
            {elem}
        </button>
    </li>
  )
}

export default Pagination