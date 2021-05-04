import React, { useState } from "react";
import classes from "./Paginator.module.css";
// import cn from "classnames";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  /*со старта храним первую порцию страниц в юзСтейте*/
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Prev
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              // className={cn(
              //   { [classes.selectedPage]: currentPage === p },
              //   classes.pageNumber
              // )}

              className={`${
                currentPage === p
                  ? classes.selectedPage
                  : classes.noSelectedPage
              }`}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Next
        </button>
      )}
      {/* {pages.map((p) => {
        return (
          <span
            className={currentPage === p && classes.selected}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })} */}
    </div>
  );
};

export default Paginator;
