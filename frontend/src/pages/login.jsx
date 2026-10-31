import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { dataContext } from "../context/userContext";

function Login() {
  const navigate = useNavigate();
  const { setUserData, serverUrl } = useContext(dataContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${serverUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setMessage(data.message || "Login failed. Please try again.");
        setMessageType("error");
        return;
      }

      setMessageType("success");
      setMessage(data.message || "Login successful!");

      // Fetch user profile data so context is populated immediately
      try {
        const userResponse = await axios.get(`${serverUrl}/api/auth/getuserdata`, {
          withCredentials: true,
        });
        setUserData(userResponse.data);
      } catch (err) {
        console.error("Failed to fetch user data after login", err);
      }

      // Navigate to the homepage correctly
      navigate("/home");

    } catch (error) {
      console.error("Login error:", error);

      setMessage(
        "Unable to connect to the server. Please try again."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setMessage("Password recovery is not connected yet.");
    setMessageType("error");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-10 text-black">
      <div className="w-full max-w-[420px]">

        {/* Brand */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black shadow-[0_5px_0_#d1d5db]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22c55e"
              strokeWidth="1.8"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <rect x="4" y="10" width="16" height="11" rx="2.5" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              <path d="M12 14v3" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue to your account
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_15px_45px_rgba(0,0,0,0.07)] sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Email address
              </label>

              <div className="group relative">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-green-600"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m4 7 8 6 8-6" />
                </svg>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-black outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-800"
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs font-medium text-green-700 transition hover:text-green-900 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <div className="group relative">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-green-600"
                  aria-hidden="true"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2.5" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 text-sm text-black outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 transition hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {showPassword ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M3 3l18 18" />
                      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                      <path d="M9.9 5.2A11 11 0 0 1 12 5c5 0 8.5 4.5 9.5 7-.4 1-1.2 2.1-2.2 3" />
                      <path d="M6.2 6.2C3.8 7.7 2.6 10 2.5 12c1 2.5 4.5 7 9.5 7 1.1 0 2.1-.2 3-.6" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex w-fit cursor-pointer items-center gap-2.5">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 cursor-pointer accent-green-600"
              />

              <span className="text-sm text-gray-600">
                Remember me
              </span>
            </label>

            {/* Feedback */}
            {message && (
              <p
                role="status"
                aria-live="polite"
                className={`rounded-lg border p-3 text-sm ${
                  messageType === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {message}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl border border-green-500 bg-green-600 py-3.5 font-semibold text-white shadow-[0_5px_0_#166534,0_8px_18px_rgba(22,101,52,0.12)] transition-all duration-150 hover:bg-green-500 active:translate-y-1 active:shadow-[0_1px_0_#166534] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-7 border-t border-gray-100 pt-6 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-green-700 transition hover:text-green-900 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Simple. Secure. Yours.
        </p>
      </div>
    </div>
  );
}

export default Login;