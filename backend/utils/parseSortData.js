
const parseSortOrder = (order) => {
    const orders = ['asc', 'desc'];
    const isKnownOrder = orders.includes(order);

    if (isKnownOrder) {
        return order;
    }
console.log(orders[0])
    return orders[0];
}

const parseSortField = (field) => {

    const eventsFields = [
        'name',
        'description',
        'organizer',
        'isCanceled',
        'date',
        'participants',
    ]

    if (eventsFields.includes(field)) {
        return field;
    }

    return eventsFields[0];
}

export const parseSortData = (query) => {
    const { order, field } = query;

    return {
        order: parseSortOrder(order),
        field: parseSortField(field),
    }
}