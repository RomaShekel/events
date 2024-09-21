import EventsRouter from './events.js'
import AuthRouter from './auth.js'
import UsersRouter from './users.js'
import { Router } from 'express'

const router = Router()

router.use('/auth', AuthRouter)
router.use('/users', UsersRouter)
router.use('/events', EventsRouter);

export default router