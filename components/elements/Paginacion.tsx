import React from 'react';

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  handlePageChange
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="container-fluid">
      <div className="row py-4">
        <div className="col d-flex justify-content-center align-items-center">
          <nav aria-label="Page navigation example" className="pagination-container">
            <ul className="pagination gap-2 flex-wrap justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="fs-5 page-link pagination_item border-0 rounded-circle fw-bold bg-600 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  aria-label="Previous"
                  disabled={currentPage === 1}
                >
                  <i className="ri-arrow-left-line" />
                </button>
              </li>
              {Array.from({ length: pageCount }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = currentPage === pageNumber;

                return (
                  <li key={pageNumber} className="page-item">
                    <button
                      className={`fs-5 page-link pagination_item border-0 rounded-circle fw-bold d-flex align-items-center justify-content-center ${isActive ? 'bg-primary text-white' : 'bg-600 text-light'}`}
                      style={{
                        width: '40px',
                        height: '40px',
                        border: isActive ? '2px solid #ffffff' : '2px solid transparent',
                        transition: 'all 0.3s ease-in-out',
                      }}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </li>
                );
              })}
              <li className={`page-item ${currentPage === pageCount ? 'disabled' : ''}`}>
                <button
                  className="fs-5 page-link pagination_item border-0 rounded-circle fw-bold bg-600 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                  onClick={() => handlePageChange(Math.min(currentPage + 1, pageCount))}
                  aria-label="Next"
                  disabled={currentPage === pageCount}
                >
                  <i className="ri-arrow-right-line" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
