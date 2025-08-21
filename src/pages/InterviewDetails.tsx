export default function Interviews() {
  const interviews = [
    { id: 1, job: "Frontend Developer", company: "ABC Corp", interviewer: "Alice", date: "2025-08-25 10:00" },
    { id: 2, job: "Backend Developer", company: "XYZ Ltd", interviewer: "Bob", date: "2025-08-26 14:00" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Interviews</h1>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Job</th>
            <th className="p-2 border">Company</th>
            <th className="p-2 border">Interviewer</th>
            <th className="p-2 border">Date & Time</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((i) => (
            <tr key={i.id} className="hover:bg-gray-50">
              <td className="p-2 border">{i.job}</td>
              <td className="p-2 border">{i.company}</td>
              <td className="p-2 border">{i.interviewer}</td>
              <td className="p-2 border">{i.date}</td>
              <td className="p-2 border">
                <a href={`/interviews/${i.id}`} className="text-blue-600 hover:underline">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

