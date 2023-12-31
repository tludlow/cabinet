import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING;
if (!CONNECTION_STRING) {
  throw new Error("Cannot find the .env variable DATABASE_CONNECTION_STRING");
}

const migrationConnection = postgres(CONNECTION_STRING!, { max: 1 });
const queryConnection = postgres(CONNECTION_STRING!);

export const db = drizzle(queryConnection);
