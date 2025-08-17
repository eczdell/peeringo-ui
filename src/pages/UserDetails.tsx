import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { users, applications, jobs } from "@/data/mockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, User, Calendar, Briefcase, FileText } from "lucide-react";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const user = users.find(u => u.id === id);
  if (!user) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-foreground">User Not Found</h2>
        <p className="text-muted-foreground mt-2">The requested user does not exist.</p>
        <Button className="mt-4" onClick={() => navigate("/users")}>
          Go Back
        </Button>
      </div>
    );
  }

  const userApplications = applications.filter(app => app.userId === user.id);

  return (
    <div className="mx-auto space-y-6 p-4 animate-fade-in">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center gap-2">
        <ArrowLeft size={16} />
        Back to Users
      </Button>

      {/* User Info */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="flex items-center gap-1"><User className="h-4 w-4 text-muted-foreground" /> Role: {user.role}</p>
          <p className="flex items-center gap-1"><Calendar className="h-4 w-4 text-muted-foreground" /> Joined: {new Date(user.joinDate).toLocaleDateString()}</p>
          <p className="flex items-center gap-1"><FileText className="h-4 w-4 text-muted-foreground" /> Resumes Uploaded: {user.resumesUploaded}</p>
          <p className="flex items-center gap-1"><Briefcase className="h-4 w-4 text-muted-foreground" /> Email: {user.email}</p>
          <p className="flex items-center gap-1"><User className="h-4 w-4 text-muted-foreground" /> Phone: {user.phone}</p>
        </CardContent>
      </Card>

      {/* Applied Jobs Table */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>Applied Jobs ({userApplications.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {userApplications.length === 0 ? (
            <p className="text-center text-muted-foreground">No job applications yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userApplications.map(app => {
                    const job = jobs.find(j => j.id === app.jobId);
                    return (
                      <TableRow key={app.id} className="hover:bg-muted/30">
                        <TableCell>{job?.title || app.jobTitle}</TableCell>
                        <TableCell>{job?.companyName || app.companyName}</TableCell>
                        <TableCell>{job?.location || "-"}</TableCell>
                        <TableCell>{app.status.toUpperCase()}</TableCell>
                        <TableCell>{new Date(app.appliedDate).toLocaleDateString()}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;

