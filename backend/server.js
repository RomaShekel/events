import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import pino from 'pino-http'
import { env } from './utils/env.js' 
import { notFoundRoute } from './middlewares/notFoundRoute.js'
import { errorMiddleware } from './middlewares/errorMiddleware.js'
import Routers from './routes/index.js'

const PORT = env('PORT') ? Number(env('PORT')) : 8000;

export const setupServer = () => {
    const app = express();

    const corsOptions = {
        origin:['http://localhost:5173', 'https://events-theta-two.vercel.app'],
        credentials: true,
    }

    app.use(cors(corsOptions))

    app.use(
        express.json({
            type:['application/json'],
            limit: '100kb',
        })
    );

    app.use(cookieParser())

    app.use(
        pino({
            transport: {
                target: 'pino-pretty'
            }
        })
    )

    app.use(Routers)
    
    app.use('*', notFoundRoute)

    app.use(errorMiddleware)

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}



