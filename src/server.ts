import app from "./app";

import { AppDataSource } from "./config/data-source";

const PORT = process.env.PORT || 4000;

const start = async (): Promise<void> => {
  await AppDataSource.initialize();
  await AppDataSource.runMigrations();
  console.log(`Migrations done`);

  app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
  });
};

if (process.env.NODE_ENV !== "test") start();
