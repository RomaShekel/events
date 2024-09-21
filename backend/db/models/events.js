import { Schema, model } from "mongoose";

const eventSchema = new Schema(
{
    name: { type: String, required: true },
    description: { type: String, required: true },
    organizer: { type: String, ref: 'users', required: true },
    organizerId: { type: String, ref: 'users', required: true },
    participants: { type: Array, ref: 'users', default: []},
    location: { type: String, required: true },
    isCanceled : { type: Boolean, default: false },
    date: { type: Number, required: true },
},
{
    versionKey: false,
    timestamps: true,
}
)

export const EventsCollection = model('events', eventSchema);