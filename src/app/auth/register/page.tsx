import { generateCuid2ID } from "~/utils/cuid2";

export default function RegisterPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="inline-flex flex-col items-center mt-24 border border-gray-200 p-8 rounded">
        <h2 className="text-2xl font-bold">
          Register your account with{" "}
          <span className="text-green-600">Cabinet</span>
        </h2>
        <p className="text-gray-600">
          You will be getting started in a matter of minutes
        </p>
        <p>{generateCuid2ID({ length: 24 })}</p>
        <div className="my-6 h-px w-full bg-gray-200"></div>
        <form className="flex flex-col gap-y-6">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-1 rounded border border-gray-400"
              placeholder="Email address"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-1 rounded border border-gray-400"
              placeholder="●●●●●●●●●●●●●●●●"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="confirm-password"
              name="confirm-password"
              id="confirm-password"
              className="p-1 rounded border border-gray-400"
              placeholder="●●●●●●●●●●●●●●●●"
            />
          </div>

          <input
            type="submit"
            className="mt-8 bg-green-500 text-white py-3 rounded font-bold hover:bg-green-600 cursor-pointer"
            value="Create Account"
          />
        </form>
      </div>
    </main>
  );
}
