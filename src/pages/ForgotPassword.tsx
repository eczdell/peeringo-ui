import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Forgot Password</h1>
        <p className="mb-4 text-sm text-gray-600">Enter your email to reset your password</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Send Reset Link</button>
      </form>
    </div>
  );
}

