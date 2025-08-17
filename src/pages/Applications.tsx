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
import { applications } from "@/data/mockData";

const ApplicationsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredApps = applications.filter(a =>
    (a.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.companyName.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === "all" || a.status === statusFilter)
  );

  const getStatusColor = (status: string) => status === "pending" ? "secondary" : status === "approved" ? "success" : "destructive";

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center"><h1 className="text-3xl font-bold">Applications</h1></div>

      <Card className="shadow">
        <CardHeader><CardTitle className="flex items-center gap-2"><Filter className="h-5 w-5" />Filters</CardTitle></CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className="shadow">
        <CardHeader><CardTitle>Applications ({filteredApps.length})</CardTitle></CardHeader>
        <CardContent className="overflow-x-auto">
          {filteredApps.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Job</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApps.map(a => (
                  <TableRow key={a.id} className="hover:bg-muted/30">
                    <TableCell>{a.userName}</TableCell>
                    <TableCell>{a.jobTitle}</TableCell>
                    <TableCell>{a.companyName}</TableCell>
                    <TableCell>{new Date(a.appliedDate).toLocaleDateString()}</TableCell>
                    <TableCell><Badge variant={getStatusColor(a.status)}>{a.status}</Badge></TableCell>
                    <TableCell className="flex gap-1"><Button size="sm" variant="outline" onClick={() => navigate(`/applications/${a.id}`)}><Eye className="h-3 w-3" /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (<p className="text-center py-8">No Applications Found</p>)}
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationsPage;

