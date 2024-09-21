import { EventsCollection } from "../db/models/events.js";
import createHttpError from "http-errors";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export const getAllEvents = async ({ page, perPage, order, field}) => {

    const eventsCount = await EventsCollection.countDocuments();

    const filteredEvents = await EventsCollection.find()
    .skip(perPage * (page - 1))
    .limit(perPage)
    .sort({ [field]: order })
    .exec()

    if (!filteredEvents) {
        throw createHttpError(404, 'Error, events not found!')
    }

    const paginationData = calculatePaginationData(eventsCount, page, perPage);

    if (filteredEvents.length === 0) {

        const events = await EventsCollection.find()
        .skip(perPage * (paginationData.totalPage - 1))
        .limit(perPage)
        .sort({ [field]: order })
        .exec()

        return {
            message: 'The page does not exist, return last existed page!',
            data: events,
            ...paginationData,
        }
    }

    return {
        data: filteredEvents,
        ...paginationData,
    }
}

export const getOneEvent = async (id) => {
    const event = await EventsCollection.findById(id)
    if (!event) throw createHttpError(404, 'Error, the event not found!');

    return event;
}

export const createEvent = async (payload, userId) => {
    const event = await EventsCollection.create({ ...payload, organizerId: userId })
    if (!event) throw createHttpError(500, 'Error, event was not created!')
    
    return event;
}

export const deleteEvent = async (id) => {
    const event = await EventsCollection.findByIdAndUpdate(id, { isCanceled: true }, { new: true });
    if (!event) throw createEvent(404, 'Error, event was not deleted!');
    return;
}

export const patchEvent = async (id, payload) => {
    const event = await EventsCollection.findById(id);
    if (event.isCanceled === true) return null;

    const newEvent = await EventsCollection.findByIdAndUpdate(id, payload, { new: true })
    if (!newEvent) throw createHttpError(404, 'Error,the event was not changed, cause not found!');
    return newEvent;
}