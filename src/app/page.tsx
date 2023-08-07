import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
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
