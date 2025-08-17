import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobs, applications, users } from "@/data/mockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, User, Calendar, Briefcase, MapPin } from "lucide-react";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-foreground">Job Not Found</h2>
        <p className="text-muted-foreground mt-2">The requested job does not exist.</p>
        <Button className="mt-4" onClick={() => navigate("/jobs")}>
          Go Back
        </Button>
      </div>
    );
  }

  const jobApplications = applications.filter(app => app.jobId === job.id);
  const pending = jobApplications.filter(a => a.status === "pending").length;
  const approved = jobApplications.filter(a => a.status === "approved").length;
  const rejected = jobApplications.filter(a => a.status === "rejected").length;

  return (
    <div className="mx-auto space-y-6 p-4 animate-fade-in">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center gap-2">
        <ArrowLeft size={16} />
        Back to Jobs
      </Button>

      {/* Job Info */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>{job.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="flex items-center gap-1"><Briefcase className="h-4 w-4 text-muted-foreground" /> {job.companyName}</p>
          <p className="flex items-center gap-1"><MapPin className="h-4 w-4 text-muted-foreground" /> {job.location}</p>
          <p><span className="font-medium">Status:</span> {job.status.toUpperCase()}</p>
          <p className="flex items-center gap-1"><Calendar className="h-4 w-4 text-muted-foreground" /> Posted: {new Date(job.postedDate).toLocaleDateString()}</p>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <User className="h-6 w-6 text-construction-primary" />
            <div>
              <p className="text-2xl font-bold">{jobApplications.length}</p>
              <p className="text-sm text-muted-foreground">Total Applications</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <User className="h-6 w-6 text-equipment" />
            <div>
              <p className="text-2xl font-bold">{pending}</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <User className="h-6 w-6 text-status" />
            <div>
              <p className="text-2xl font-bold">{approved}</p>
              <p className="text-sm text-muted-foreground">Approved</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <User className="h-6 w-6 text-danger" />
            <div>
              <p className="text-2xl font-bold">{rejected}</p>
              <p className="text-sm text-muted-foreground">Rejected</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applicants Table */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>Applicants for {job.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {jobApplications.length === 0 ? (
            <p className="text-center text-muted-foreground">No applications yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobApplications.map(app => {
                    const applicant = users.find(u => u.id === app.userId);
                    return (
                      <TableRow key={app.id} className="hover:bg-muted/30">
                        <TableCell>{app.userName || applicant?.name}</TableCell>
                        <TableCell>{applicant?.email || "-"}</TableCell>
                        <TableCell>{applicant?.phone || "-"}</TableCell>
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

export default JobDetails;

