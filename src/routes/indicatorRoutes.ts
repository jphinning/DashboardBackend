import { Router } from "express";

import { IndicatorDataController } from "../controllers/IndicatorDataController";

const indicatorRouter = Router();

indicatorRouter.get("/groupBy", new IndicatorDataController().getDataGroupedBy);
indicatorRouter.get("/sum", new IndicatorDataController().getDataSum);

export default indicatorRouter;
