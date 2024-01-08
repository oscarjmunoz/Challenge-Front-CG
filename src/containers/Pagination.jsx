import React, { useState } from 'react';
import "../styles/pagination.css";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => i + 1);
    const [currentPage, setCurrentPage] = useState(1);
    const handleClick = (number) => {
      setCurrentPage(number);
      paginate(number);
    };
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className={currentPage === number ? 'active' : ''}>
              <a onClick={() => handleClick(number)} href="!#">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
};

export default Pagination;
