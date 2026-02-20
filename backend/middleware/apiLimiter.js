const rateLimit = require('express-rate-limit');

// Example: limit to 100 requests per 15 minutes per IP
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  standardHeaders: true, // return rate limit info in headers
  legacyHeaders: false, // disable X-RateLimit headers
  message: { message: 'Too many requests from this IP, please try again later' }
});

module.exports = apiLimiter;