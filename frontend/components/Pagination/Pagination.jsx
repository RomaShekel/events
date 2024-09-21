import ReactPaginate from "react-paginate";
import css from './Pagination.module.css'

export const Pagination = ({ activePage, itemsCountPerPage, pageCount, totalItemsCount, pageChange }) => {
    return (
        <ReactPaginate
         className={css.pagination}
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          pageCount={pageCount}
          totalItemsCount={totalItemsCount}
          onPageChange={pageChange}
          pageRangeDisplayed={5}
        />
      );
}