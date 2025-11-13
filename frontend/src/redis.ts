// Lightweight stub for redis client so backend can start without a running Redis.
export const redisClient = {
  connect: async () => {
    if (process.env.REDIS_URL) {
      console.log("redisClient: REDIS_URL is set (connection deferred in stub)");
    } else {
      console.log("redisClient: no REDIS_URL set — running with stub");
    }
    return Promise.resolve();
  },
};
