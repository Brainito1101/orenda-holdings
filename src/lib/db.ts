import { neon } from "@neondatabase/serverless";

/**
 * Neon's HTTP driver.
 *
 * Resolved per call rather than at module load: the whole site is statically
 * prerendered, and reading DATABASE_URL at import time would make a missing
 * env var fail the build instead of only the request that actually needs it.
 */
export function db() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  return neon(url);
}
