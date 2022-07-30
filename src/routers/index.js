import { Router } from "express";
import characterRouter from "./characterRouter.js";

const router = Router();

router.use("/characters", characterRouter);

export default router;
