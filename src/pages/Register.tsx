import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registered as ${name} (${email})`);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleRegister} className="bg-white p-8 shadow rounded w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Register</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          required
        />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Register</button>
      </form>
    </div>
  );
}

