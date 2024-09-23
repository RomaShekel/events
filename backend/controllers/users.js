import createHttpError from "http-errors";
import { registerInEvent } from "../services/users.js";


export const registerInEventController = async (req, res, next) => {
    const { eventId } = req.params;
    const payload = req.body;
    // payload: name, email, birth, from, userId(if is a registered user)

    // if (!payload.userId) payload.userId = null

    const data = await registerInEvent(eventId, payload)

    if (!data) {
        next(createHttpError(500, 'Server error, the user was not registered in the event'))
    }

    // if ( data.user === null ) {
    //     res.status(200).json({
    //         message: 'Successfully register you in event!',
    //         event: data.event,
    //     })
    // }

    res.status(200).json({
        message: 'Successfully registered the user in event!',
        event: data.event,
    })
    
}