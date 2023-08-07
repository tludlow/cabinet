import Link from "next/link";
import { getUser } from "./lib/auth/getUser";

export default async function Home() {
  const user = await getUser();

  return (
    <main className="flex min-h-screen flex-col">
      <p>You are: {user?.email ?? "NOBODY!!"}</p>
      <div className="mt-12 ml-12">
        <Link
          href="/auth/register"
          className="px-4 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
