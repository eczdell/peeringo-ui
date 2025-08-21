"use client";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Mock Applications Data (extended with more info)
const applications = [
  {
    id: "1",
    userId: "1",
    userName: "Krishna Tamang",
    email: "krishna.tamang@example.com",
    phone: "+977-9812345678",
    resume: "https://example.com/resume/krishna.pdf",
    experience: "3 years",
    skills: ["React", "TypeScript", "Tailwind", "Node.js"],
    jobId: "1",
    jobTitle: "Frontend Developer",
    companyName: "TechNova Pvt. Ltd.",
    appliedDate: "2025-08-02",
    status: "pending",
  },
  {
    id: "2",
    userId: "2",
    userName: "Maya Gurung",
    email: "maya.gurung@example.com",
    phone: "+977-9807654321",
    resume: "https://example.com/resume/maya.pdf",
    experience: "5 years",
    skills: ["Java", "Spring Boot", "Postgres", "Docker"],
    jobId: "2",
    jobTitle: "Backend Developer",
    companyName: "TechNova Pvt. Ltd.",
    appliedDate: "2025-08-03",
    status: "approved",
  },
];

const ApplicationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [mode, setMode] = useState("online");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");

  const app = applications.find((a) => a.id === id);

  const getStatusColor = (status: string) =>
    status === "pending"
      ? "secondary"
      : status === "approved"
        ? "success"
        : "destructive";

  if (!app) {
    return (
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>Application Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The requested application does not exist.
            </p>
            <Button onClick={() => navigate("/applications")}>Back</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSchedule = () => {
    alert(
      `Interview Scheduled:\nDate: ${interviewDate}\nTime: ${interviewTime}\nMode: ${mode}\nLocation: ${location}\nNote: ${note}`
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Application Detail</h1>
        <Button variant="outline" onClick={() => navigate("/applications")}>
          Back
        </Button>
      </div>

      {/* Applicant Info */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Applicant Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="text-lg font-medium">{app.userName}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-lg font-medium">{app.email}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="text-lg font-medium">{app.phone}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Resume</p>
            <a
              href={app.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View Resume
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Experience</p>
            <p className="text-lg font-medium">{app.experience}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Skills</p>
            <p className="text-lg font-medium">{app.skills.join(", ")}</p>
          </div>
        </CardContent>
      </Card>

      {/* Job Info */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Job Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Job Title</p>
            <p className="text-lg font-medium">{app.jobTitle}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Job ID</p>
            <p className="text-lg font-medium">{app.jobId}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Company</p>
            <p className="text-lg font-medium">{app.companyName}</p>
          </div>
        </CardContent>
      </Card>

      {/* Application Info */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Application Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Applied Date</p>
            <p className="text-lg font-medium">
              {new Date(app.appliedDate).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <Badge variant={getStatusColor(app.status)}>{app.status}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Interview Scheduling */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Schedule Interview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Date</p>
              <Input
                type="date"
                value={interviewDate}
                onChange={(e) => setInterviewDate(e.target.value)}
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Time</p>
              <Input
                type="time"
                value={interviewTime}
                onChange={(e) => setInterviewTime(e.target.value)}
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Mode</p>
            <Select value={mode} onValueChange={setMode}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Location / Link</p>
            <Input
              placeholder="Meeting link or office address"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Note</p>
            <Textarea
              placeholder="Additional instructions..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSchedule}>Schedule</Button>
            <Button variant="destructive">Reject</Button>
            <Button variant="ghost">Approve</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationDetailPage;

