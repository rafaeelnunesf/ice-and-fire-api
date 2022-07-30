import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/index.js";
import { handleApplicationErrors } from "./middlewares/errorHandlingMiddleware.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.use(handleApplicationErrors);

export default app;
