"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./config/data-source");
const PORT = process.env.PORT || 4000;
const start = async () => {
    await data_source_1.AppDataSource.initialize();
    await data_source_1.AppDataSource.runMigrations();
    app_1.default.listen(PORT, () => {
        console.log(`Server running on: ${PORT}`);
    });
};
if (process.env.NODE_ENV !== "test")
    start();
//# sourceMappingURL=server.js.map