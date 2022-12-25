require("dotenv").config();
const axios = require("axios");

const axiosApp = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: process.env.API_KEY },
});

module.exports = { axiosApp };
