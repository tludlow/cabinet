import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { db } from "~/db/db";
import { users } from "~/db/schema";

export async function getUser() {
  const user = cookies().get("cabinet-user-session");

  if (!user) {
    return null;
  }

  const gottenUser = await db
    .select({ id: users.id, email: users.email })
    .from(users)
    .where(eq(users.email, user.value));

  return gottenUser[0];
}
