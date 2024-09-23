
import { 
    createEvent,
    deleteEvent,
    getAllEvents,
    getOneEvent,
    patchEvent,
} from "../services/events.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js"
import { parseSortData } from "../utils/parseSortData.js";

export const getAllEventsController = async (req, res, next) => {

    const { page, perPage } = parsePaginationParams(req.query);
    const { order, name, date, location } = parseSortData(req.query);

    const events = await getAllEvents({ page, perPage, order, name, date, location})

    res.status(200).json(events);

}

export const getOneEventController = async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const event = await getOneEvent(id);

    res.status(200).json({event});
}

export const createEventController = async (req, res, next) => {
    const payload = req.body;
    const userId = req.user._id;
    const event = await createEvent(payload, userId);

    res.status(201).json(event)
}

export const deleteEventController = async (req, res, next) => {
    const { id } = req.params

    await deleteEvent(id)

    res.status(204)
}

export const patchEventController = async (req, res, next) => {
    const payload = req.body;
    const { id } = req.params;

    const event = await patchEvent(id, payload);

    res.status(201).json(event)
}

export const getParticipants = async (eventId) => {
    const participants = await EventsCollection
}