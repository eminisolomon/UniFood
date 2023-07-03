import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === "true";
export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } =
  process.env;
export const { DB_PASSWORD, DB_USERNAME, DB_DATABASE } = process.env;

export const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = process.env
