"use client";

import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const resumes = [
  {
    id: "1",
    name: "Krishna Tamang",
    email: "krishna.tamang@example.com",
    phone: "+977-9812345678",
    summary:
      "Passionate Frontend Developer with 3 years of experience building scalable and responsive web applications. Skilled in modern JavaScript frameworks, UI design, and performance optimization.",
    education: [
      { degree: "BSc in Computer Science", institution: "Tribhuvan University", year: "2022" },
    ],
    experience: [
      {
        role: "Frontend Developer",
        company: "TechNova Pvt. Ltd.",
        duration: "2022 - Present",
        details: "Worked on React, TypeScript, and Tailwind to deliver SaaS products.",
      },
      {
        role: "Intern",
        company: "Himalayan Soft",
        duration: "2021 - 2022",
        details: "Assisted in UI/UX design and frontend development.",
      },
    ],
    skills: ["React", "TypeScript", "Tailwind", "Node.js", "REST APIs"],
    resumeLink: "https://example.com/resume/krishna.pdf",
  },
];

const ResumeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const resume = resumes.find((r) => r.id === id);

  if (!resume) {
    return (
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>Resume Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The requested resume does not exist.
            </p>
            <Button onClick={() => navigate("/applications")}>Back</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Resume Detail</h1>
        <Button variant="outline" onClick={() => navigate("/applications")}>
          Back
        </Button>
      </div>

      {/* Basic Info */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="text-lg font-medium">{resume.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-lg font-medium">{resume.email}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="text-lg font-medium">{resume.phone}</p>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base">{resume.summary}</p>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {resume.education.map((edu, idx) => (
            <div key={idx}>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">
                {edu.institution} • {edu.year}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {resume.experience.map((exp, idx) => (
            <div key={idx}>
              <p className="font-medium">{exp.role}</p>
              <p className="text-sm">{exp.company} • {exp.duration}</p>
              <p className="text-sm text-muted-foreground">{exp.details}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {resume.skills.map((skill, idx) => (
            <Badge key={idx} variant="secondary">{skill}</Badge>
          ))}
        </CardContent>
      </Card>

      {/* Resume File */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Resume File</CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <a href={resume.resumeLink} target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeDetailPage;

