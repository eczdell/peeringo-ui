export default function AdminPosts() {
  const posts = [
    { id: 1, title: "New Company Policy", author: "HR Dept", likes: 12 },
    { id: 2, title: "Upcoming Job Fair", author: "Admin", likes: 20 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Posts</h1>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Likes</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="p-2 border">{p.title}</td>
              <td className="p-2 border">{p.author}</td>
              <td className="p-2 border">{p.likes}</td>
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

