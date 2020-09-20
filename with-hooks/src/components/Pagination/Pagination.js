import React from 'react';
import classNames from 'classnames';

import { range } from '@/utils';

const PaginationItem = ({ page, currentPage, dispatch }) => {
  const liClasses = classNames({
    'page-item': true,
    active: currentPage === page,
  });

  const handleChangePageClick = () => {
    dispatch({
      type: 'CHANGE_PAGE',
      payload: page,
    });
  };

  return (
    <li className={liClasses}>
      <button
        type="button"
        onClick={handleChangePageClick}
        className="page-link"
      >
        {page}
      </button>
    </li>
  );
};

const Pagination = ({ total, pageSize, currentPage, dispatch }) => {
  const pagesCount = Math.ceil(total / pageSize);
  const pages = range(1, pagesCount);

  return (
    <ul className="pagination mt-3">
      {pages.map(item => (
        <PaginationItem
          key={item}
          page={item}
          currentPage={currentPage}
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
};

export default Pagination;
