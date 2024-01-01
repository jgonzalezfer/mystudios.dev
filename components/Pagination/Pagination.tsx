// Pagination.tsx

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const getPageLink = (page: number) => `/blog/page/${page}`;

  return (
    <div className="wow fadeInUp -mx-4 flex flex-wrap" data-wow-delay=".15s">
      <div className="w-full px-4">
        <ul className="flex items-center justify-center pt-8">
          {/* Previous Page */}
          {currentPage > 1 && (
            <li className="mx-1">
              <a href={getPageLink(currentPage - 1)}>
                <a className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                  Prev
                </a>
              </a>
            </li>
          )}

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;

            // Display only a few page links for simplicity (adjust as needed)
            if (
              pageNumber === 1 ||
              pageNumber === currentPage ||
              pageNumber === totalPages ||
              (currentPage > 3 && currentPage - 1 <= pageNumber && pageNumber <= currentPage + 1)
            ) {
              return (
                <li key={pageNumber} className="mx-1">
                  <a href={getPageLink(pageNumber)}>
                    <a className={`flex h-9 min-w-[36px] items-center justify-center rounded-md ${currentPage === pageNumber ? 'bg-primary text-white' : 'bg-body-color bg-opacity-[15%] text-body-color'} px-4 text-sm transition hover:bg-primary hover:bg-opacity-100 hover:text-white`}>
                      {pageNumber}
                    </a>
                  </a>
                </li>
              );
            }

            return null;
          })}

          {/* Next Page */}
          {currentPage < totalPages && (
            <li className="mx-1">
              <a href={getPageLink(currentPage + 1)}>
                <a className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                  Next
                </a>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
