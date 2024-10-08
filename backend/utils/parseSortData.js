
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
        'location',
        'email'
    ]

    if (eventsFields.includes(field)) {
        return field;
    }

    return eventsFields[0];
}

export const parseSortData = (query) => {
    const { order, name, date, location } = query;

    return {
        order: parseSortOrder(order),
        name: parseSortField(name),
        date: parseSortField(date),
        location: parseSortField(location)
    }
}