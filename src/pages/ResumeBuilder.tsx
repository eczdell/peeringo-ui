'use client';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import jsPDF from "jspdf";

interface ExperienceType { role: string; company: string; duration: string; }
interface EducationType { degree: string; institution: string; year: string; }
interface ProjectType { name: string; description: string; link?: string; }

const exampleCV = {
  format: "american",
  fullName: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 415-555-0123",
  address: "San Francisco, CA, USA",
  summary: "Lead Software Engineer with 8+ years of experience in designing scalable web applications, cloud architecture, and team leadership.",
  experience: [
    { role: "Lead Software Engineer", company: "TechNova Solutions", duration: "2020-Present" },
    { role: "Senior Software Engineer", company: "CloudWorks Inc.", duration: "2016-2020" },
    { role: "Software Engineer", company: "Innovatech Labs", duration: "2013-2016" }
  ],
  education: [
    { degree: "MSc in Computer Science", institution: "Stanford University", year: "2013" },
    { degree: "BSc in Software Engineering", institution: "University of California, Berkeley", year: "2011" }
  ],
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "Microservices", "Team Leadership", "System Design"],
  projects: [
    { name: "Property Management System", description: "Built a multi-tenant PMS for hotels", link: "https://github.com/johndoe/pms" },
    { name: "Internal DevOps Tool", description: "Automated CI/CD pipelines for multiple teams" }
  ],
  certifications: ["AWS Solutions Architect", "Scrum Master Certified"],
  hobbies: ["Cycling", "Photography", "Reading Tech Blogs"],
  languages: ["English", "Spanish"]
};

export default function ResumeBuilder() {
  const navigate = useNavigate();
  const [cv, setCV] = useState(exampleCV);

  const addExperience = () => setCV({ ...cv, experience: [...cv.experience, { role: "", company: "", duration: "" }] });
  const updateExperience = (i: number, key: keyof ExperienceType, value: string) => {
    const newExp = [...cv.experience]; newExp[i][key] = value; setCV({ ...cv, experience: newExp });
  };
  const removeExperience = (i: number) => setCV({ ...cv, experience: cv.experience.filter((_, idx) => idx !== i) });

  const addEducation = () => setCV({ ...cv, education: [...cv.education, { degree: "", institution: "", year: "" }] });
  const updateEducation = (i: number, key: keyof EducationType, value: string) => {
    const newEdu = [...cv.education]; newEdu[i][key] = value; setCV({ ...cv, education: newEdu });
  };
  const removeEducation = (i: number) => setCV({ ...cv, education: cv.education.filter((_, idx) => idx !== i) });

  const addProject = () => setCV({ ...cv, projects: [...cv.projects, { name: "", description: "" }] });
  const updateProject = (i: number, key: keyof ProjectType, value: string) => {
    const newProj = [...cv.projects]; newProj[i][key] = value; setCV({ ...cv, projects: newProj });
  };
  const removeProject = (i: number) => setCV({ ...cv, projects: cv.projects.filter((_, idx) => idx !== i) });

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    let y = 20;
    doc.setFontSize(18); doc.text(cv.fullName, 20, y); y += 10;
    doc.setFontSize(12);
    doc.text(`Email: ${cv.email} | Phone: ${cv.phone}`, 20, y); y += 6;
    doc.text(`Address: ${cv.address}`, 20, y); y += 10;

    doc.setFontSize(14); doc.text("Professional Summary:", 20, y); y += 6;
    const summaryLines = doc.splitTextToSize(cv.summary, 170);
    doc.text(summaryLines, 20, y); y += summaryLines.length * 6;

    doc.text("Experience:", 20, y); y += 6;
    cv.experience.forEach(exp => { const lines = doc.splitTextToSize(`- ${exp.role} at ${exp.company} (${exp.duration})`, 170); doc.text(lines, 20, y); y += lines.length * 6; });

    doc.text("Education:", 20, y); y += 6;
    cv.education.forEach(edu => { const lines = doc.splitTextToSize(`- ${edu.degree} from ${edu.institution} (${edu.year})`, 170); doc.text(lines, 20, y); y += lines.length * 6; });

    if (cv.projects?.length) { doc.text("Projects:", 20, y); y += 6; cv.projects.forEach(p => { const lines = doc.splitTextToSize(`- ${p.name}: ${p.description} ${p.link || ""}`, 170); doc.text(lines, 20, y); y += lines.length * 6; }); }

    if (cv.certifications?.length) { doc.text("Certifications:", 20, y); y += 6; doc.text(cv.certifications.join(", "), 20, y); y += 10; }
    if (cv.hobbies?.length) { doc.text("Hobbies:", 20, y); y += 6; doc.text(cv.hobbies.join(", "), 20, y); y += 10; }
    if (cv.languages?.length) { doc.text("Languages:", 20, y); y += 6; doc.text(cv.languages.join(", "), 20, y); y += 10; }

    doc.save(`${cv.fullName.replace(" ", "_")}_Resume.pdf`);
  };

  const handleSaveAndRedirect = () => { handleDownloadPDF(); navigate("/resumes"); };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/")}>Home</span> /{" "}
        <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/resumes")}>Resumes</span> / Create
      </nav>

      <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>

      <div className="flex gap-6">
        {/* Left Panel - Form */}
        <section className="flex-1 space-y-6 overflow-y-auto max-h-[calc(100vh-120px)]">
          <Card className="rounded-xl shadow-md border border-gray-200">
            <CardHeader><CardTitle className="text-xl font-semibold">CV Format</CardTitle></CardHeader>
            <CardContent>
              <Select value={cv.format} onValueChange={val => setCV({ ...cv, format: val })}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Select format" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="american">American</SelectItem>
                  <SelectItem value="canadian">Canadian</SelectItem>
                  <SelectItem value="asian">Asian</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                  <SelectItem value="european">European</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-md border border-gray-200 space-y-4">
            <CardContent className="space-y-4">
              <Input placeholder="Full Name" value={cv.fullName} onChange={e => setCV({ ...cv, fullName: e.target.value })} />
              <Input placeholder="Email" value={cv.email} onChange={e => setCV({ ...cv, email: e.target.value })} />
              <Input placeholder="Phone" value={cv.phone} onChange={e => setCV({ ...cv, phone: e.target.value })} />
              <Input placeholder="Address" value={cv.address} onChange={e => setCV({ ...cv, address: e.target.value })} />
              <textarea className="w-full border p-3 rounded-md min-h-[100px]" placeholder="Professional Summary" value={cv.summary} onChange={e => setCV({ ...cv, summary: e.target.value })} />

              {/* Experience */}
              <div>
                <h3 className="font-semibold mb-2">Experience</h3>
                {cv.experience.map((exp, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <Input placeholder="Role" value={exp.role} onChange={e => updateExperience(i, 'role', e.target.value)} />
                    <Input placeholder="Company" value={exp.company} onChange={e => updateExperience(i, 'company', e.target.value)} />
                    <Input placeholder="Duration" value={exp.duration} onChange={e => updateExperience(i, 'duration', e.target.value)} />
                    <Button onClick={() => removeExperience(i)}>Remove</Button>
                  </div>
                ))}
                <Button onClick={addExperience}>Add Experience</Button>
              </div>

              {/* Education */}
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                {cv.education.map((edu, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <Input placeholder="Degree" value={edu.degree} onChange={e => updateEducation(i, 'degree', e.target.value)} />
                    <Input placeholder="Institution" value={edu.institution} onChange={e => updateEducation(i, 'institution', e.target.value)} />
                    <Input placeholder="Year" value={edu.year} onChange={e => updateEducation(i, 'year', e.target.value)} />
                    <Button onClick={() => removeEducation(i)}>Remove</Button>
                  </div>
                ))}
                <Button onClick={addEducation}>Add Education</Button>
              </div>

              {/* Projects */}
              <div>
                <h3 className="font-semibold mb-2">Projects</h3>
                {cv.projects.map((p, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <Input placeholder="Project Name" value={p.name} onChange={e => updateProject(i, 'name', e.target.value)} />
                    <Input placeholder="Description" value={p.description} onChange={e => updateProject(i, 'description', e.target.value)} />
                    <Input placeholder="Link (optional)" value={p.link || ""} onChange={e => updateProject(i, 'link', e.target.value)} />
                    <Button onClick={() => removeProject(i)}>Remove</Button>
                  </div>
                ))}
                <Button onClick={addProject}>Add Project</Button>
              </div>

              {/* Skills */}
              <Input placeholder="Skills (comma separated)" value={cv.skills.join(', ')} onChange={e => setCV({ ...cv, skills: e.target.value.split(',').map(s => s.trim()) })} />

              {/* Certifications */}
              <Input placeholder="Certifications (comma separated)" value={cv.certifications?.join(', ')} onChange={e => setCV({ ...cv, certifications: e.target.value.split(',').map(s => s.trim()) })} />

              {/* Hobbies */}
              <Input placeholder="Hobbies (comma separated)" value={cv.hobbies?.join(', ')} onChange={e => setCV({ ...cv, hobbies: e.target.value.split(',').map(s => s.trim()) })} />

              {/* Languages */}
              <Input placeholder="Languages (comma separated)" value={cv.languages?.join(', ')} onChange={e => setCV({ ...cv, languages: e.target.value.split(',').map(s => s.trim()) })} />

              <div className="flex justify-end gap-4 mt-4">
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white" onClick={handleDownloadPDF}>Download PDF</Button>
                <Button className="bg-green-600 text-white" onClick={handleSaveAndRedirect}>Save & Go Back</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Right Panel - Preview */}
        <aside className="w-[45%] sticky top-6 self-start h-[calc(100vh-48px)] overflow-y-auto">
          <Card className="rounded-xl shadow-lg border border-gray-200 p-6 bg-white">
            <h2 className="text-2xl font-bold mb-2">{cv.fullName}</h2>
            <p className="text-sm text-gray-500 mb-2">{cv.email} | {cv.phone}</p>
            <p className="text-sm text-gray-500 mb-4">{cv.address}</p>

            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-1">Professional Summary</h3>
              <p className="text-gray-700">{cv.summary}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-1">Experience</h3>
              {cv.experience.map((exp, i) => (
                <p key={i} className="text-gray-700">- {exp.role} at {exp.company} ({exp.duration})</p>
              ))}
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-1">Education</h3>
              {cv.education.map((edu, i) => (
                <p key={i} className="text-gray-700">- {edu.degree} from {edu.institution} ({edu.year})</p>
              ))}
            </div>

            {cv.projects?.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-1">Projects</h3>
                {cv.projects.map((p, i) => <p key={i} className="text-gray-700">- {p.name}: {p.description} {p.link && `(Link: ${p.link})`}</p>)}
              </div>
            )}

            {cv.certifications?.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-1">Certifications</h3>
                <p className="text-gray-700">{cv.certifications.join(', ')}</p>
              </div>
            )}

            {cv.hobbies?.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-1">Hobbies</h3>
                <p className="text-gray-700">{cv.hobbies.join(', ')}</p>
              </div>
            )}

            {cv.languages?.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-1">Languages</h3>
                <p className="text-gray-700">{cv.languages.join(', ')}</p>
              </div>
            )}

            <div className="mt-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium rounded-full">
                {cv.format.charAt(0).toUpperCase() + cv.format.slice(1)} Format
              </span>
            </div>
          </Card>
        </aside>
      </div>
    </main>
  );
}

