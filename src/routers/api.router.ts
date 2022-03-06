import {Router} from "express";
import ApplicationController from "../controllers/application.controller";
import applicationRouter from "./application.router";

const router = Router();
export default router;

router.use('/application', applicationRouter)
router.post('/', ApplicationController.updateStatus)


