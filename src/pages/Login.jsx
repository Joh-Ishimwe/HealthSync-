import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSignIn = () => {
    // Redirect user based on selected role
    if (role === "administrator") {
      window.location.href = "/admin";
    } else if (role === "doctor") {
      window.location.href = "/Dashboard";
    } else if (role === "receptionist") {
      window.location.href = "/Reception";
    } else {
      // Default redirect if role is not selected
      window.location.href = "/"; // Change the default redirect URL if needed
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-start px-6 py-56 lg:py-24 lg:px-8 bg-[#011c36]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/">
          <img
            className="mx-auto h-auto w-auto"
            src="./src/assets/logo.png"
            alt="Logo"
          />
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-50">
          Log in
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-50"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                required
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-50"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to="#"
                  className="font-semibold text-[#36799e] transition-opacity hover:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                required
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-gray-50"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={handleRoleChange}
                className="block w-full px-4 py-1.5 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select your role</option>
                <option value="administrator">Administrator</option>
                <option value="doctor">Doctor</option>
                <option value="receptionist">Receptionist</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSignIn}
              className="flex w-full justify-center rounded-md bg-[#00aeef] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#36799e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/Signup"
            className="font-semibold leading-6 text-[#00aeef] hover:text-[#36799e]"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
