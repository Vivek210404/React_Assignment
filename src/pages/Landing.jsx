import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[246px] h-[533px] border border-gray-400 p-5 bg-white relative overflow-hidden">
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="absolute top-0 left-4 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold shadow-md hover:bg-blue-500 transition">
              1
            </div>
            <div className="absolute top-10 left-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold shadow-md hover:bg-blue-500 transition">
              2
            </div>
            <div className="absolute top-20 left-2 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold shadow-md hover:bg-blue-500 transition">
              3
            </div>
            <div className="absolute top-30 left-6 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold shadow-md hover:bg-blue-500 transition">
              4
            </div>
            <div className="absolute top-40 left-12 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold shadow-md hover:bg-blue-500 transition">
              5
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 w-full px-4">
          <div className="text-start">
            <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
            <p className="text-sm text-gray-500 mt-2">
              Join us and explore amazing features to manage your account effortlessly.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Link
              to="/signup"
              className="w-full py-2 px-2 bg-purple-700 text-white font-semibold text-center rounded cursor-pointer hover:bg-purple-800 transition"
            >
              Create Account
            </Link>

            <Link
              to="/login"
              className="w-full text-center px-2 py-2 bg-purple-200 text-sm font-semibold text-black rounded transition-all"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
