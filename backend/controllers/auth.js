import createHttpError from "http-errors";
import { loginUser, logoutUser, registerUser } from "../services/auth.js";
import { setupSession } from '../utils/setupSession.js'

export const registerUserController = async (req, res, next) => {
    const payload = req.body;

    await registerUser(payload)

    const data = await loginUser(payload)

    setupSession(res, data.session);

    res.status(201).json({
        message: 'Successfully registered a user!',
        user: data.user ,
        accessToken: data.session.accessToken,

    })
}

export const loginUserController = async (req, res, next) => {
    const payload = req.body;

    const data = await loginUser(payload)

    setupSession(res, data.session);

    res.status(201).json({
        message: 'Successfully login a user!',
        user: data.user,
        accessToken: data.session.accessToken,

    })
}

export const logoutUserController = async (req, res, next) => {
    if (req.cookies.sessionId) {
        await logoutUser(req.cookies.sessionId)
    } else {
        throw createHttpError(400, 'Not found cookies of session!')
    }

    res.clearCookie('sessionId', {
        httpOnly: true,
      });
      res.clearCookie('refreshToken', {
        httpOnly: true,
      });
    
      res.status(204).send();
}