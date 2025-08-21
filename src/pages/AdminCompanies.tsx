export default function AdminCompanies() {
  const companies = [
    { id: 1, name: "ABC Corp", industry: "IT", employees: 120 },
    { id: 2, name: "XYZ Ltd", industry: "Finance", employees: 80 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Companies</h1>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Industry</th>
            <th className="p-2 border">Employees</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((c) => (
            <tr key={c.id} className="hover:bg-gray-50">
              <td className="p-2 border">{c.name}</td>
              <td className="p-2 border">{c.industry}</td>
              <td className="p-2 border">{c.employees}</td>
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

