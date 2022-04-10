import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD } =
  process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: POSTGRES_HOST || "localhost",
  port: POSTGRES_PORT || 5432,
  username: POSTGRES_USER || "postgres",
  password: POSTGRES_PASSWORD || "postgres",
  database: "app",
  synchronize: false,
  logging: true,
  entities: [`src/models/*{.js,.ts}`],
  subscribers: [],
  migrations: ["src/database/migrations/**/*{.js,.ts}"],
});
