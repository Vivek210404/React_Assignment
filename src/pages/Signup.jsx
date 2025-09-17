import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUserData }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: "Marry Doe",
    phone: "Marry Doe",
    email: "Marry@Gmail.com",
    password: "Marry Doe",
    company: "Marry Doe",
    agency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setUserData(form);
    navigate("/profile");
  };

  const allEmpty = Object.values(form).every((value) => value === "");

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[250px] h-[533px] border border-gray-400 p-4 bg-white flex flex-col">
        <div className="flex-1 overflow-y-auto pr-1">
          <div className="text-start">
            <h1 className="text-xl font-semibold text-gray-900">
              Create your <br /> PopX account
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Fill in the details below to get started
            </p>
          </div>

          <div className="mt-4 space-y-4">
            <div className="relative">
              <label
                htmlFor="fullname"
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600"
              >
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                value={form.fullname}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="phone"
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="company"
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600"
              >
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
              />
            </div>

            <div className="mt-2">
              <p className="text-sm font-medium text-gray-700">
                Are you an Agency?
              </p>
              <div className="flex items-center gap-4 mt-1">
                <label className="flex items-center gap-1 text-sm">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={form.agency === "yes"}
                    onChange={handleChange}
                    className="accent-purple-600 w-4 h-4"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-1 text-sm">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={form.agency === "no"}
                    onChange={handleChange}
                    className="accent-purple-600 w-4 h-4"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={handleSubmit}
            disabled={allEmpty}
            className={`w-full py-2 text-white text-sm font-semibold rounded-md transition ${
              allEmpty
                ? "bg-purple-600 cursor-not-allowed"
                : "bg-purple-600 cursor-pointer"
            }`}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
