import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

import { IndicatorData } from "../models/IndicatorDataEntity";

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
} = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: POSTGRES_HOST || "localhost",
  port: (POSTGRES_PORT as unknown as number) || 5432,
  username: POSTGRES_USER || "postgres",
  password: POSTGRES_PASSWORD || "postgres",
  database: POSTGRES_DATABASE || "app",
  synchronize: false,
  logging: true,
  entities: [IndicatorData],
  subscribers: [],
  migrations: ["build/database/migrations/**/*{.js,.ts}"],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
