import { useMemo } from "react"

export const DOTS = '...';

const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
}) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5;
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};


const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div className=" w-96 h-auto ">
          <ul className={className}>
            {currentPage === 1 ? "" :
                (<li
                    className={`cursor-pointer ${currentPage === 1 ? " absolute inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-5" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50  inline-flex relative items-center px-4 py-2 border text-sm font-medium"}`}
                    onClick={onPrevious}
                    disabled={currentPage === 1 ? true : false}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 my-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </li>)
            }

            {paginationRange.map((pageNumber, i) => {
                if (pageNumber === DOTS) {
                    return <li key={i} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 ">&#8230;</li>;
                }

                return (
                    <li
                        key={i}
                        className={`cursor-pointer ${pageNumber === currentPage ? "z-10 bg-indigo-50 border-red-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium " : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50  inline-flex relative items-center px-4 py-2 border text-sm font-medium"}`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {
                currentPage === pageSize ? "" : "" 
                // (
                //     <li
                //         className={`${currentPage === lastPage ? "cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-5" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50  inline-flex relative items-center px-4 py-2 border text-sm font-medium"}`}
                //         onClick={onNext}
                //     >
                //         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 my-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                //         </svg>
                //     </li>
                // )
            }
        </ul>  
        </div>
        
    );
};

export default Pagination;
