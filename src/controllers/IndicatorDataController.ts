import { Request, Response } from "express";

import { AppDataSource } from "../config/data-source";
import { IndicatorData } from "../models/IndicatorDataEntity";

interface IReqProps {
  order: "ASC" | "DESC";
  initialDate: Date;
  lastDate: Date;
  indicator: "alo" | "cpc" | "cpca" | "pp";
  sortBy: "hora" | "regiao";
}

export class IndicatorDataController {
  public async getDataGroupedBy(req: Request, res: Response) {
    try {
      const repository = AppDataSource.getRepository(IndicatorData);

      const { order, initialDate, lastDate, indicator, sortBy } =
        req.query as unknown as IReqProps;

      const response = await repository
        .createQueryBuilder("indicator_data")
        .select(`${sortBy}`)
        .addSelect(`SUM(${indicator})`, "sum")
        .where("data between :initial and :last", {
          initial: `${initialDate}`,
          last: `${lastDate}`,
        })
        .groupBy(`${sortBy}`)
        .orderBy(`${sortBy}`, `${order}`)
        .getRawMany();

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json(JSON.stringify(error));
    }
  }

  public async getDataSum(req: Request, res: Response) {
    try {
      const repository = AppDataSource.getRepository(IndicatorData);

      const { indicator, initialDate, lastDate } =
        req.query as unknown as IReqProps;

      const response = await repository
        .createQueryBuilder("indicator_data")
        .select(`SUM(${indicator})`, "sum")
        .where("data between :initial and :last", {
          initial: `${initialDate}`,
          last: `${lastDate}`,
        })
        .getRawMany();

      console.log(response);

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json(JSON.stringify(error));
    }
  }
}
