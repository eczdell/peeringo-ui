export default function AdminJobs() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "ABC Corp", location: "NY" },
    { id: 2, title: "Backend Developer", company: "XYZ Ltd", location: "SF" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Jobs</h1>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Company</th>
            <th className="p-2 border">Location</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((j) => (
            <tr key={j.id} className="hover:bg-gray-50">
              <td className="p-2 border">{j.title}</td>
              <td className="p-2 border">{j.company}</td>
              <td className="p-2 border">{j.location}</td>
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

