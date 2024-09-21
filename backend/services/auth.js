import createHttpError from "http-errors";
import { UsersCollection } from "../db/models/users.js"
import bcrypt from 'bcrypt'
import { randomBytes } from 'crypto';
import { SessionsCollection } from "../db/models/session.js";


export const registerUser = async (payload) => {

    const matchEmail = await UsersCollection.findOne({ email: payload.email });
    if (matchEmail) throw createHttpError(409, 'Email in use, register with another email!')
    
    const hashPwd = await bcrypt.hash(payload.password, 10);

    const user = await UsersCollection.create({
        ...payload,
        email: payload.email,
        password: hashPwd,

    });

    if (!user) throw createHttpError(500, 'Error, user was not registered!')

    return user;
}

export const loginUser = async (payload) => {

    const user = await UsersCollection.findOne({ email: payload.email })
    if(!user) throw createHttpError(404, 'User not found!');

    const isEqual = await bcrypt.compare(payload.password, user.password)

    if(!isEqual) throw createHttpError(401, 'Wrong login data!')

    await SessionsCollection.deleteOne({ userId: user._id });

    const accessToken = randomBytes(30).toString('base64');
    const refreshToken = randomBytes(30).toString('base64');

    const session = await SessionsCollection.create({
        userId: user._id,
        accessToken,
        refreshToken,
        accessTokenValidUntil: new Date(Date.now() + 60 * 60 * 1000),
        refreshTokenValidUntil: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
        
    return {
        
        user,
        session,
    }
}

export const logoutUser = async (sessionId) => {
    if (!sessionId) {
      throw createHttpError(401, 'Session not found!');
    }
  
    await SessionsCollection.deleteOne({ _id: sessionId });

    return
};
