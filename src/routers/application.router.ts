import {Router} from "express";
import ApplicationController from "../controllers/application.controller";

const router = Router();
export default router;

router.post('/', ApplicationController.create)
router.post('/:id', ApplicationController.updateStatus)


