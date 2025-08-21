"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Search, Plus, Shield } from "lucide-react";

const roles = [
  {
    id: 1,
    roleName: "USER (Job Seeker)",
    description:
      "Default role for registered users. Can view/apply for jobs, create resumes, like/bookmark companies, interact with posts.",
  },
  {
    id: 2,
    roleName: "ORGANIZATION_ADMIN",
    description:
      "Manages a company profile. Can create/edit company details, post jobs, manage company posts, and oversee team HRs.",
  },
  {
    id: 3,
    roleName: "HR",
    description:
      "Responsible for job applications and interviews. Can shortlist candidates, schedule/reschedule/cancel interviews, and review resumes.",
  },
  {
    id: 4,
    roleName: "ADMIN",
    description:
      "System administrator with full access. Manages users, companies, posts, jobs, resumes, and overall system health.",
  },
  {
    id: 5,
    roleName: "FINANCE",
    description:
      "Handles payments, subscription plans, and user points. Can view and manage transaction history, referral bonuses, and rewards.",
  },
];

export default function Roles() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = roles.filter(
    (r) =>
      r.roleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Roles</h1>
          <p className="text-muted-foreground">
            Define and manage user roles and permissions across the platform
          </p>
        </div>
        <Button className="bg-gradient-construction shadow-construction">
          <Plus className="mr-2 h-4 w-4" />
          Add Role
        </Button>
      </div>

      {/* Search */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search roles or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>Roles ({filtered.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role Name</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">
                      {r.roleName}
                    </TableCell>
                    <TableCell>{r.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-8">
              <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                No Roles Found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or add new roles.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

