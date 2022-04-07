import { Request, Response } from "express";

import { AppDataSource } from "../config/data-source";
import { IndicatorData } from "../models/IndicatorDataEntity";

interface IReqProps {
  limit: string;
  order: "ASC" | "DESC";
}

export class IndicatorDataController {
  public async getAllData(req: Request, res: Response) {
    try {
      const repository = AppDataSource.getRepository(IndicatorData);

      const { limit, order } = req.query as unknown as IReqProps;

      const indicators = await repository.find({
        order: {
          id: order,
        },
        take: parseInt(limit),
      });

      return res.status(200).json(indicators);
    } catch (error) {
      console.log(error);
      return res.status(500).json(JSON.stringify(error));
    }
  }
}
