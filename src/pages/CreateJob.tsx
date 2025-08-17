import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { companies, jobs } from "@/data/mockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

const CreateJob = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const company = companies.find(c => c.id === id);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(company?.location || "");
  const [status, setStatus] = useState<"open" | "closed" | "paused">("open");
  const [applicationsReceived, setApplicationsReceived] = useState(0);
  const [postedDate, setPostedDate] = useState(new Date().toISOString().split("T")[0]);

  if (!company) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-foreground">Company Not Found</h2>
        <p className="text-muted-foreground mt-2">Cannot create a job for this company.</p>
        <Button className="mt-4" onClick={() => navigate("/companies")}>
          Go Back
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock job creation
    const newJob = {
      id: (jobs.length + 1).toString(),
      title,
      companyId: company.id,
      companyName: company.name,
      location,
      status,
      applicationsReceived,
      postedDate,
    };
    jobs.push(newJob); // In real app, send to API
    alert("Job created successfully!");
    navigate(`/companies/${company.id}`);
  };

  return (
    <div className="mx-auto p-4 space-y-6 animate-fade-in">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center gap-2">
        <ArrowLeft size={16} />
        Back
      </Button>

      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>Create Job for {company.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <Label>Job Title</Label>
              <Input value={title} onChange={e => setTitle(e.target.value)} required />
            </div>

            <div className="flex flex-col">
              <Label>Location</Label>
              <Input value={location} onChange={e => setLocation(e.target.value)} required />
            </div>

            <div className="flex flex-col">
              <Label>Status</Label>
              <select
                value={status}
                onChange={e => setStatus(e.target.value as "open" | "closed" | "paused")}
                className="p-2 border rounded-md"
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="paused">Paused</option>
              </select>
            </div>

            <div className="flex flex-col">
              <Label>Applications Received</Label>
              <Input
                type="number"
                value={applicationsReceived}
                onChange={e => setApplicationsReceived(parseInt(e.target.value))}
                min={0}
              />
            </div>

            <div className="flex flex-col">
              <Label>Posted Date</Label>
              <Input
                type="date"
                value={postedDate}
                onChange={e => setPostedDate(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-gradient-construction hover:bg-primary-hover shadow-construction">
                Create Job
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateJob;

