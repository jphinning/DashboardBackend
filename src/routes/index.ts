import { Router } from "express";

import indicatorRouter from "./indicatorRoutes";

const router = Router();

router.use("/indicators", indicatorRouter);

export default router;
