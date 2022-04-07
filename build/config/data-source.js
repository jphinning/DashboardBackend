"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "app",
    synchronize: false,
    logging: true,
    entities: ["build/models/**/*{.js,.ts}"],
    subscribers: [],
    migrations: ["src/database/migrations/**/*{.js,.ts}"],
});
//# sourceMappingURL=data-source.js.map