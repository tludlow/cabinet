"use server";

import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "~/db/db";
import { users } from "~/db/schema";
import { generateCuid2ID } from "~/utils/cuid2";
import { cookies } from "next/headers";
import dayjs from "dayjs";

const createUserSchema = z.object({
  email: z.string().toLowerCase().email(),
  password: z.string(),
  confirmPassword: z.string(),
});

export async function createUser(data: any) {
  const userData = Object.fromEntries(data);
  const parsedUserData = createUserSchema.parse(userData);

  if (parsedUserData.password !== parsedUserData.confirmPassword) {
    redirect("/auth/register?error=Your provided passwords do not match");
  }

  // Check if we already have a user with this email
  const usersWithEmail = await db
    .select()
    .from(users)
    .where(eq(users.email, parsedUserData.email));

  const doesUserExist = usersWithEmail.length > 0;
  if (doesUserExist) {
    redirect("/auth/register?error=A user with that email already exists");
  }

  const hashedUserPassword = await bcrypt.hash(parsedUserData.password, 10);

  const savedUser = await db.insert(users).values({
    id: generateCuid2ID({ length: 24 }),
    email: parsedUserData.email,
    hashedPassword: hashedUserPassword,
  });

  const oneDayInTheFuture = dayjs().add(1, "day");

  cookies().set("cabinet-user-session", parsedUserData.email, {
    httpOnly: true,
    path: "/",
    sameSite: true,
    expires: oneDayInTheFuture.toDate(),
  });

  redirect("/auth/register?success=true");
}
