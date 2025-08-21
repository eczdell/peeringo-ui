export default function AdminUsers() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "USER" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "HR" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Users</h1>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="hover:bg-gray-50">
              <td className="p-2 border">{u.name}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">{u.role}</td>
              <td className="p-2 border">
                <button className="text-blue-600 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

