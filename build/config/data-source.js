"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const IndicatorDataEntity_1 = require("../models/IndicatorDataEntity");
const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE, } = process.env;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: POSTGRES_HOST || "localhost",
    port: POSTGRES_PORT || 5432,
    username: POSTGRES_USER || "postgres",
    password: POSTGRES_PASSWORD || "postgres",
    database: POSTGRES_DATABASE || "app",
    synchronize: false,
    logging: true,
    entities: [IndicatorDataEntity_1.IndicatorData],
    subscribers: [],
    migrations: ["build/database/migrations/**/*{.js,.ts}"],
});
//# sourceMappingURL=data-source.js.map