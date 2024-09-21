import { Schema, model } from "mongoose";

const sessionSchema = new Schema(
{
    userId: { type: String, ref: 'users', required: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, require: true },
    refreshTokenValidUntil: { type: Date, required: true }
},
{
    versionKey: false,
}
)

export const SessionsCollection = model('sessions', sessionSchema)