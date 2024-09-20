import mongoose from "mongoose";
import { env } from "../utils/env.js";
import { MONGODB } from "../constants/index.js";

export const initMongoConnection = async () => {
    try {
        const user = env(MONGODB.MONGODB_USER);
        const pwd = env(MONGODB.MONGODB_PASSWORD);
        const url = env(MONGODB.MONGODB_URL);
        const db = env(MONGODB.MONGODB_DB)

        await mongoose.connect(
            `mongodb+srv://${user}:${pwd}@${url}/${db}`)
            
        console.log('Mongo connection successfully established!')
    } catch (error) {
        console.log('failed connection with data base', error)
        throw error
    }
}

