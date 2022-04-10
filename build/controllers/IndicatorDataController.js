"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicatorDataController = void 0;
const typeorm_1 = require("typeorm");
const data_source_1 = require("../config/data-source");
const IndicatorDataEntity_1 = require("../models/IndicatorDataEntity");
class IndicatorDataController {
    async getAllData(req, res) {
        try {
            const repository = data_source_1.AppDataSource.getRepository(IndicatorDataEntity_1.IndicatorData);
            const { limit, order, initialDate, lastDate } = req.query;
            const indicators = await repository.find({
                where: [
                    {
                        data: (0, typeorm_1.Between)(initialDate, lastDate),
                    },
                ],
                order: {
                    id: order,
                },
                take: parseInt(limit),
            });
            return res.status(200).json(indicators);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(JSON.stringify(error));
        }
    }
}
exports.IndicatorDataController = IndicatorDataController;
//# sourceMappingURL=IndicatorDataController.js.map