export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Overview of users, companies, jobs, and system metrics.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold">Total Users</h2>
          <p className="text-3xl mt-2">1234</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold">Total Companies</h2>
          <p className="text-3xl mt-2">56</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold">Total Jobs</h2>
          <p className="text-3xl mt-2">78</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold">Pending Applications</h2>
          <p className="text-3xl mt-2">12</p>
        </div>
      </div>
    </div>
  );
}

