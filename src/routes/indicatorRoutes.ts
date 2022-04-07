import { Router } from "express";

import { IndicatorDataController } from "../controllers/IndicatorDataController";

const indicatorRouter = Router();

indicatorRouter.get("/", new IndicatorDataController().getAllData);

export default indicatorRouter;
