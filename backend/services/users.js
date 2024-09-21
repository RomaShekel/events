import { EventsCollection } from "../db/models/events.js"
import { UsersCollection } from "../db/models/users.js"
import createHttpError from 'http-errors'


export const registerInEvent = async (eventId, payload)  => {
    const event  = await EventsCollection.findByIdAndUpdate(
        eventId,
        { $push: { participants:  payload.userId} },
        { new: true }
    )

    if (!event) throw createHttpError(404, 'Event not found!')

    if (payload.userId === null) {
        return {
            event,
            user: false,
        }
    }

    const user = await UsersCollection.findByIdAndUpdate(
        payload.userId,
        { $push: { memberIn: eventId} },
        { new: true },
    )

    if (!user) throw createHttpError(404, 'User not found')

    return {
        event,
        user,
    }
    
}







