
export const calculatePaginationData = (count, page, perPage) => {
    const totalPage = Math.ceil(count / perPage);
    let hasNextPage = Boolean(totalPage - page);
    let hasPreviousPage = page !== 1;

    if(page > totalPage) {
        hasNextPage = false;
        page - 1 === totalPage ? 
        hasPreviousPage = true : hasPreviousPage = false;
    }

    return {
        page,
        perPage,
        totalPage,
        totalItems: count,
        hasNextPage,
        hasPreviousPage,
    }
}