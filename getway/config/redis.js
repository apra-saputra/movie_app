require("dotenv").config();
const Redis = require("ioredis");

//  const redis = new Redis({
//   host: "redis-18432.c292.ap-southeast-1-1.ec2.cloud.redislabs.com",
//   port: 18432,
//   password: process.env.REDIS_PASSWORD,
// });

const redis = new Redis();

module.exports = { redis };
