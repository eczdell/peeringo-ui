"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Eye } from "lucide-react";

// Dummy data for interviews
const interviews = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    interviewer: "Alice Johnson",
    interviewee: "Bob Smith",
    scheduledAt: "2025-08-22T10:00:00Z",
    status: "scheduled",
  },
  {
    id: 2,
    jobTitle: "Backend Developer",
    interviewer: "Charlie Brown",
    interviewee: "Dana White",
    scheduledAt: "2025-08-23T14:00:00Z",
    status: "completed",
  },
  {
    id: 3,
    jobTitle: "UI/UX Designer",
    interviewer: "Emily Clark",
    interviewee: "Frank Lee",
    scheduledAt: "2025-08-24T09:00:00Z",
    status: "cancelled",
  },
];

const InterviewsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredInterviews = interviews.filter(
    (i) =>
      (i.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.interviewer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.interviewee.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "all" || i.status === statusFilter)
  );

  const getStatusColor = (status: string) =>
    status === "scheduled" ? "default" : status === "completed" ? "secondary" : "destructive";

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Interviews</h1>
        <Button onClick={() => navigate("/interviews/create")}>Schedule Interview</Button>
      </div>

      {/* Filters */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" /> Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by Job, Interviewer, or Interviewee..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Interviews ({filteredInterviews.length})</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {filteredInterviews.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job</TableHead>
                  <TableHead>Interviewer</TableHead>
                  <TableHead>Interviewee</TableHead>
                  <TableHead>Scheduled At</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInterviews.map((interview) => (
                  <TableRow key={interview.id} className="hover:bg-muted/30">
                    <TableCell>{interview.jobTitle}</TableCell>
                    <TableCell>{interview.interviewer}</TableCell>
                    <TableCell>{interview.interviewee}</TableCell>
                    <TableCell>{new Date(interview.scheduledAt).toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(interview.status)}>{interview.status}</Badge>
                    </TableCell>
                    <TableCell className="flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigate(`/interviews/${interview.id}`)}
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center py-8">No Interviews Found</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InterviewsPage;

