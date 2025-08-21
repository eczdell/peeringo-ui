"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";
import { Toaster } from "@/components/ui/toaster";

// Example dummy data
const sampleData = [
  { name: "Companies", count: 12 },
  { name: "Jobs", count: 25 },
  { name: "Users", count: 50 },
  { name: "Applications", count: 30 },
];

export default function Reports() {
  const [data, setData] = useState(sampleData);

  useEffect(() => {
    // TODO: Fetch real report data from API
    // fetch("/api/reports").then(res => res.json()).then(setData)
  }, []);

  // Dynamic summary cards
  const summaryCards = data.map((item) => ({
    title: `Total ${item.name}`,
    value: item.count,
  }));

  return (
    <div className="p-6 space-y-6">
      <Toaster />
      <h1 className="text-3xl font-bold">Reports Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {summaryCards.map((card) => (
          <Card key={card.title} className="shadow hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-500">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-indigo-600">{card.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Section */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Overview Chart</CardTitle>
        </CardHeader>
        <CardContent style={{ height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value: number) => [value, "Count"]} />
              <Legend />
              <Bar dataKey="count" fill="#4f46e5" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={() => alert("Export reports functionality coming soon")}
        >
          Export Reports
        </Button>
      </div>
    </div>
  );
}

