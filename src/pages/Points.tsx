"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function PointsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const pointsData = [
    { id: 1, name: "John Doe", email: "john@example.com", points: 120 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", points: 95 },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", points: 150 },
    { id: 4, name: "Bob Williams", email: "bob@example.com", points: 80 },
  ];

  const filteredData = pointsData.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Points</h1>

      {/* Search */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" /> Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-w-sm">
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Users Points ({filteredData.length})</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.length > 0 ? (
                filteredData.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{p.name}</td>
                    <td className="px-4 py-2">{p.email}</td>
                    <td className="px-4 py-2">{p.points}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-500">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

