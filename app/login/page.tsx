import React from "react";

import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <div className="mt-28">
        <form className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6 border-black border-2">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Login
          </h2>
          <input
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
            type="text"
            placeholder="username/email"
            name="usernameEmail"
          />
          <input
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
            type="password"
            placeholder="password"
            name="password"
          />
          <div className="text-center">
            {" "}
            <button className="  px-8 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium hover:border-gray-400 transition">
              Login
            </button>
            <Link
              href="/home"
              className="text-xs  px-8 py-3 text-blue-200 font-light hover:text-blue-900 "
            >
              need help?{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
