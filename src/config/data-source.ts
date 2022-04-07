import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "app",
  synchronize: false,
  logging: true,
  entities: [`src/models/*{.js,.ts}`],
  subscribers: [],
  migrations: ["src/database/migrations/**/*{.js,.ts}"],
});
