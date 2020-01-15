import React, {useState} from "react";
import classes from "../Users/Users.module.css";

const Paginator = (props) => {

    const portionSize = 10;
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);

    const leftPortion = (portionNumber - 1) * portionSize + 1;
    const rightPortion = portionNumber * portionSize;


    const paginator = pages
        .filter(page => page >= leftPortion && page <= rightPortion)
        .map((page) => <span
            className={props.currentPage === page ? classes.selectedPage : classes.notSelectedPage}
            onClick={() => props.onChangePage(page)}> {page}</span>);

    console.log(portionNumber)

    return (
        <div className={classes.paginatoin}>
            {portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)} className={classes.left}>Prev {portionSize} pages</button>}
            {paginator}
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)} className={classes.right}>Next {portionSize} pages</button>}
        </div>
    )
}

export default Paginator
