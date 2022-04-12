import { Router } from "express";

import indicatorRouter from "./indicatorRoutes";

const router = Router();

router.use("/api/v1/data", indicatorRouter);

export default router;
