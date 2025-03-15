import { Options, rateLimit } from "express-rate-limit";

/**
 * Create new instance with default options
 */

export const defaultLimiterOptions: Partial<Options> = {
  windowMs: 10 * 60 * 1000, // 10 minutes
  limit: 150, // Limit each IP to 150 requests per `window` (here, per 10 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
};

const limiter = (options: Partial<Options>) => rateLimit(options);

export default limiter;
