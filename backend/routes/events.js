import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { 
    createEventController,
    deleteEventController,
    getAllEventsController,
    getOneEventController,
    patchEventController,
} from "../controllers/events.js";
import { authentication } from "../middlewares/authentication.js";

const router = Router()

router.get('/all', ctrlWrapper(getAllEventsController))
router.get('/:id', ctrlWrapper(getOneEventController))

router.use(authentication)
router.delete('/:id', ctrlWrapper(deleteEventController))
router.post('/', ctrlWrapper(createEventController))
router.patch('/:id', ctrlWrapper(patchEventController))

export default router