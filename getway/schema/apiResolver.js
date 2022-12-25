const { axiosApp } = require("../config/axios");
const { redis } = require("../config/redis");

const MovieResolvers = {
  Query: {
    getMovies: async (_, arg) => {
      try {
        const cache = await redis.get(`application:movies:${arg.category}`);
        const categoryCache = await redis.get("application:category");

        if (cache && JSON.parse(categoryCache).category == arg.category) {
          return JSON.parse(cache);
        } else {
          const { data } = await axiosApp.get(`/movie/${arg.category}`);
          await redis.set(
            "application:category",
            JSON.stringify({ category: arg.category })
          );
          await redis.set(
            `application:movies:${arg.category}`,
            JSON.stringify(data.results)
          );
          return data.results;
        }
      } catch (err) {
        throw err;
      }
    },
    getMovieById: async (_, arg) => {
      try {
        const { data } = await axiosApp.get(`/movie/${arg.id}`);
        const response = await axiosApp.get(`/movie/${arg.id}/credits`);

        const result = {
          ...data,
          cast: response.data.cast,
        };

        return result;
      } catch (err) {
        throw err;
      }
    },
    getCast: async () => {
      try {
        const cache = await redis.get(`application:person`);
        if (cache) {
          return JSON.parse(cache);
        } else {
          const { data } = await axiosApp.get("/person/popular");
          await redis.set(`application:person`, JSON.stringify(data.results));
          return data.results;
        }
      } catch (err) {
        throw err;
      }
    },
    getCastById: async (_, arg) => {
      try {
        const { data } = await axiosApp.get(`/person/${arg.id}`);
        const movies = await axiosApp.get(`/person/${arg.id}/movie_credits`);

        const result = {
          ...data,
          movie: movies.data.cast,
        };

        return result;
      } catch (err) {
        throw err;
      }
    },
  },
};

module.exports = {
  resolvers: MovieResolvers,
};
