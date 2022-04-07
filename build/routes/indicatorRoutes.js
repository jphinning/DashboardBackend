"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndicatorDataController_1 = require("../controllers/IndicatorDataController");
const indicatorRouter = (0, express_1.Router)();
indicatorRouter.get("/", new IndicatorDataController_1.IndicatorDataController().getAllData);
exports.default = indicatorRouter;
//# sourceMappingURL=indicatorRoutes.js.map