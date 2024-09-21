import createHttpError from "http-errors"
import { SessionsCollection } from "../db/models/session.js"
import { UsersCollection } from "../db/models/users.js"

export const authentication = async (req, res, next) => {
    const header = req.get('Authorization')

    if (!header) {
        next(createHttpError(401, 'Provide auth header!'))
        return;
    }

    const bearer = header.split(' ')[0]
    const token = header.split(' ')[1]

    if (bearer !== 'Bearer' || !token) {
        next(createHttpError(401, 'Auth header should be of type Bearer'))
    return;
    }

    const session = await SessionsCollection.findOne({ accessToken: token })

    if (!session) {
        next(createHttpError(401, 'Session not found!'))
        return;
    }

    const isAccessTokenExpired =
    new Date() > new Date(session.accessTokenValidUntil);
  
    if (isAccessTokenExpired) {
        next(createHttpError(401, 'Access token expired!'));
    }
  
    const user = await UsersCollection.findById(session.userId);
  
    if (!user) {
      next(createHttpError(401, 'User not found!'));
      return;
    }
  
    req.user = user;
  
    next();
}