import { Router } from "express";
import booksRouter from "./booksRouter.js";
import characterRouter from "./characterRouter.js";

const router = Router();

router.use("/books", booksRouter);
router.use("/characters", characterRouter);

export default router;
