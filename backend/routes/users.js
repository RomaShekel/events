import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registerInEventController } from "../controllers/users.js";


const router = Router()

router.post('/:eventId', ctrlWrapper(registerInEventController))

export default router