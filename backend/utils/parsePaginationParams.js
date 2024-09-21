
const parseNumber = (number, defaultValue) => {
    const isNumber = typeof number === 'string';
    if(!isNumber) return defaultValue;

    const parsedNumber = parseInt(number);
    if (Number.isNaN(parsedNumber)) return defaultValue

    return parsedNumber;
}

export const parsePaginationParams = (query) => {
    const { page, perPage } = query;

    return {
        page: parseNumber(page, 1),
        perPage: parseNumber(perPage, 12),
    }
}