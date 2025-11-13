// Lightweight stub for AppDataSource to avoid requiring TypeORM during frontend dev.
// If you want full TypeORM behavior, replace this with your real DataSource.
export const AppDataSource = {
  initialize: async () => {
    if (process.env.DATABASE_URL) {
      console.log("AppDataSource: DATABASE_URL is set (connection deferred in stub)");
    } else {
      console.log("AppDataSource: no DATABASE_URL set — running with stub");
    }
    return Promise.resolve();
  },
};
