import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING;
if (!CONNECTION_STRING) {
  throw new Error("Cannot find the .env variable DATABASE_CONNECTION_STRING");
}

const migrationConnection = postgres(CONNECTION_STRING!, { max: 1 });

const main = async () => {
  await migrate(drizzle(migrationConnection), { migrationsFolder: "drizzle" });
  await migrationConnection.end();
  process.exit(0);
};

main();
