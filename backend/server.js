import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import pino from 'pino-http'
import { env } from './utils/env.js' 
import { notFoundRoute } from './middlewares/notFoundRoute.js'
import { errorMiddleware } from './middlewares/errorMiddleware.js'

const PORT = env('PORT') ? Number(env('PORT')) : 8000;

export const setupServer = () => {
    const app = express();

    const corsOptions = {
        origin:['http://localhost:5173'],
        credential: true,
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

    //app.use(routers)
    
    app.use('*', notFoundRoute)

    app.use(errorMiddleware)

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}



