import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dataContext } from "../context/userContext";
import api from "../api";

function SignUp() {
  const { setUserData } = useContext(dataContext);
  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const isSubmittingRef = useRef(false);

  const [dp, setDp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    profileImage: null,
  });

  // Cleanup object URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (dp) {
        URL.revokeObjectURL(dp);
      }
    };
  }, [dp]);

  // Profile image upload with fix for old preview persistence
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Validate file type (MIME type + extension fallback check)
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if (!validTypes.includes(file.type) && !file.type.startsWith("image/")) {
      setMessageType("error");
      setMessage("Please select a valid image file (JPEG, PNG, WEBP).");
      setDp(""); // Clear old preview
      setFormData((prev) => ({ ...prev, profileImage: null }));
      e.target.value = "";
      return;
    }

    // Validate file size (< 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessageType("error");
      setMessage("Your profile image must be smaller than 5 MB.");
      setDp(""); // Clear old preview
      setFormData((prev) => ({ ...prev, profileImage: null }));
      e.target.value = "";
      return;
    }

    // Revoke previous object URL if any exists
    if (dp) {
      URL.revokeObjectURL(dp);
    }

    const imageUrl = URL.createObjectURL(file);
    setDp(imageUrl);
    setFormData((prev) => ({
      ...prev,
      profileImage: file,
    }));
    setMessage("");
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setMessage("");
  };

  const handleNavigateHome = async () => {
    try {
      const response = await api.get("/api/auth/getuserdata");
      if (response.data) {
        setUserData(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch user data after signup:", error);
    } finally {
      navigate("/home");
    }
  };


  // Submit signup form using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions using both state and ref lock
    if (loading || isSubmittingRef.current) return;

    // Client-side password length validation check
    if (formData.password.length < 8) {
      setMessageType("error");
      setMessage("Password must be at least 8 characters long.");
      return;
    }

    isSubmittingRef.current = true;
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();

      data.append("firstName", formData.firstName.trim());
      data.append("lastName", formData.lastName.trim());
      data.append("userName", formData.userName.trim());
      data.append("email", formData.email.trim());
      data.append("password", formData.password);

      if (formData.profileImage) {
        data.append("profileImage", formData.profileImage);
      }

      const response = await api.post("/api/auth/signup", data, {
        timeout: 10000, // 10-second request timeout protection
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessageType("success");
      setMessage(
        response.data.message || "Account created successfully! Redirecting..."
      );

      // Reset form state & preview
      setFormData({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        profileImage: null,
      });
      if (dp) URL.revokeObjectURL(dp);
      setDp("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Redirect to login page after a short success delay
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Signup error:", error);

      setMessageType("error");
      setMessage(
        error.code === "ECONNABORTED"
          ? "Request timed out. Please check your connection and try again."
          : error.response?.data?.message ||
              "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
      isSubmittingRef.current = false;
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-500/10";

  const labelClass = "mb-2 block text-sm font-semibold text-gray-800";

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-10 text-gray-900">
      <div className="w-full max-w-lg">
        {/* Heading */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black shadow-[0_5px_0_#d1d5db]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#34d399"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="10" cy="7" r="4" />
              <path d="M19 8v6M16 11h6" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-black">
            Create account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Join us and get started today
          </p>
        </div>

        {/* Signup Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_15px_45px_rgba(0,0,0,0.07)] sm:p-8">
          {/* Profile Image */}
          <div className="mb-7 flex flex-col items-center">
            <div className="relative">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                aria-label="Choose profile picture"
                className="group relative h-[108px] w-[108px] overflow-hidden rounded-full border-[3px] border-white bg-gray-100 shadow-[0_0_0_1px_#d1d5db,0_7px_18px_rgba(0,0,0,0.12)] transition duration-200 hover:scale-[1.03] hover:shadow-[0_0_0_2px_#059669,0_10px_24px_rgba(0,0,0,0.12)]"
              >
                {dp ? (
                  <img
                    src={dp}
                    alt="Profile preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-white to-gray-100">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      className="h-12 w-12 text-gray-400"
                    >
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M5 20c0-4 2.8-6 7-6s7 2 7 6" />
                    </svg>
                  </div>
                )}

                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/45 text-3xl font-light text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Edit
                </span>
              </button>

              {/* Green plus button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                aria-label="Upload profile picture"
                className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white bg-emerald-600 text-2xl font-medium text-white shadow-md transition hover:bg-emerald-500 active:scale-90"
              >
                +
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Add a profile photo
            </p>

            <p className="mt-1 text-[11px] text-gray-400">
              JPG, PNG or WEBP · Max 5 MB
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First and Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First name
                </label>

                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  autoComplete="given-name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last name
                </label>

                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  autoComplete="family-name"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label htmlFor="userName" className={labelClass}>
                Username
              </label>

              <input
                id="userName"
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Choose a unique username"
                autoComplete="username"
                required
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className={labelClass}>
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className={`${inputClass} pr-12`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 transition hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {showPassword ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
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
                    >
                      <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              <p className="mt-2 text-xs text-gray-400">
                Use at least 8 characters.
              </p>
            </div>

            {/* Feedback */}
            {message && (
              <p
                role="status"
                aria-live="polite"
                className={`rounded-lg border p-3 text-sm ${
                  messageType === "error"
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-emerald-200 bg-emerald-50 text-emerald-800"
                }`}
              >
                {message}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl border border-emerald-500 bg-emerald-600 py-3.5 font-semibold text-white shadow-[0_5px_0_#166534,0_8px_18px_rgba(22,101,52,0.10)] transition-all duration-150 hover:bg-emerald-500 active:translate-y-1 active:shadow-[0_1px_0_#166534] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {/* Login link */}
          <div className="mt-7 border-t border-gray-100 pt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-emerald-700 transition hover:text-emerald-900 hover:underline"
              >
                Login
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

export default SignUp;