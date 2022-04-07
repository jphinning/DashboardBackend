"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicatorDataController = void 0;
const data_source_1 = require("../config/data-source");
const IndicatorDataEntity_1 = require("../models/IndicatorDataEntity");
class IndicatorDataController {
    async getAllData(req, res) {
        const repository = data_source_1.AppDataSource.getRepository(IndicatorDataEntity_1.IndicatorData);
        const { limit, order } = req.query;
        const indicators = await repository.find({
            order: {
                id: order,
            },
            take: parseInt(limit),
        });
        return res.status(200).json(indicators);
    }
}
exports.IndicatorDataController = IndicatorDataController;
//# sourceMappingURL=IndicatorDataController.js.map