import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { companies, jobs } from "@/data/mockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Briefcase, MapPin, Phone, User } from "lucide-react";

const CompanyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const company = companies.find(c => c.id === id);

  if (!company) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-foreground">Company Not Found</h2>
        <p className="text-muted-foreground mt-2">The requested company does not exist.</p>
        <Button className="mt-4" onClick={() => navigate("/companies")}>
          Go Back
        </Button>
      </div>
    );
  }

  const companyJobs = jobs.filter(job => job.companyId === company.id);
  const openJobs = companyJobs.filter(j => j.status === "open").length;
  const closedJobs = companyJobs.filter(j => j.status === "closed").length;
  const pausedJobs = companyJobs.filter(j => j.status === "paused").length;

  return (
    <div className="mx-auto space-y-6 p-4 animate-fade-in">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center gap-2">
        <ArrowLeft size={16} />
        Back to Companies
      </Button>

      {/* Company Info */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>{company.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><span className="font-medium">Owner:</span> {company.owner}</p>
          <p className="flex items-center gap-1"><MapPin className="h-4 w-4 text-muted-foreground" /> {company.location}</p>
          <p className="flex items-center gap-1"><Phone className="h-4 w-4 text-muted-foreground" /> {company.phoneNumber}</p>
          <p className="flex items-center gap-1"><Briefcase className="h-4 w-4 text-muted-foreground" /> Total Jobs: {company.totalJobs}</p>
          <p><span className="font-medium">Status:</span> {company.status.toUpperCase()}</p>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <User className="h-6 w-6 text-construction-primary" />
            <div>
              <p className="text-2xl font-bold">{openJobs}</p>
              <p className="text-sm text-muted-foreground">Open Jobs</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <User className="h-6 w-6 text-danger" />
            <div>
              <p className="text-2xl font-bold">{closedJobs}</p>
              <p className="text-sm text-muted-foreground">Closed Jobs</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <User className="h-6 w-6 text-equipment" />
            <div>
              <p className="text-2xl font-bold">{pausedJobs}</p>
              <p className="text-sm text-muted-foreground">Paused Jobs</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Jobs Table */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>Jobs at {company.name}</CardTitle>
          <Button
            onClick={() => navigate(`/companies/${company.id}/create-job`)}
            className="bg-construction-primary text-white hover:bg-primary-hover"
          >
            + Create Job
          </Button>

        </CardHeader>
        <CardContent>
          {companyJobs.length === 0 ? (
            <p className="text-center text-muted-foreground">No jobs posted yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applications</TableHead>
                    <TableHead>Posted Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {companyJobs.map(job => (
                    <TableRow key={job.id} className="hover:bg-muted/30">
                      <TableCell>{job.title}</TableCell>
                      <TableCell>{job.location}</TableCell>
                      <TableCell>{job.status.toUpperCase()}</TableCell>
                      <TableCell>{job.applicationsReceived}</TableCell>
                      <TableCell>{new Date(job.postedDate).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyDetails;

