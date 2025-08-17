import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye, Edit, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data
interface Resume {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  skills: string;
  education: string;
  resumeFile: string; // filename or URL
}

const mockResumes: Resume[] = [
  { id: "1", fullName: "Krishna Tamang", email: "krishna@example.com", phone: "+977-9841111111", experience: "Frontend Developer - 2 yrs", skills: "React, TypeScript, Tailwind", education: "BSc IT", resumeFile: "krishna_resume.pdf" },
  { id: "2", fullName: "Maya Gurung", email: "maya@example.com", phone: "+977-9842222222", experience: "UI/UX Designer - 3 yrs", skills: "Figma, Photoshop, CSS", education: "BDes Graphic", resumeFile: "maya_resume.pdf" },
  { id: "3", fullName: "Suman Rai", email: "suman@example.com", phone: "+977-9843333333", experience: "Backend Developer - 4 yrs", skills: "Node.js, Express, MongoDB", education: "BSc CS", resumeFile: "suman_resume.pdf" },
];

const ResumesListing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResumes = mockResumes.filter(resume =>
    resume.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resume.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resume.skills.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-4 mx-auto animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Resumes</h1>
          <p className="text-muted-foreground">List of resumes submitted by job seekers</p>
        </div>
        <Button onClick={() => navigate("/resumes/create")} className="bg-gradient-construction hover:bg-primary-hover shadow-construction">
          Upload Resume
        </Button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resumes by name, email, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Resumes Table */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>Resumes List ({filteredResumes.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Skills</TableHead>
                  <TableHead>Education</TableHead>
                  <TableHead>Resume</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResumes.map((resume) => (
                  <TableRow key={resume.id} className="hover:bg-muted/30">
                    <TableCell>{resume.fullName}</TableCell>
                    <TableCell>{resume.email}</TableCell>
                    <TableCell>{resume.phone}</TableCell>
                    <TableCell>{resume.experience}</TableCell>
                    <TableCell>{resume.skills}</TableCell>
                    <TableCell>{resume.education}</TableCell>
                    <TableCell>
                      <a href={`/resumes/files/${resume.resumeFile}`} target="_blank" className="text-blue-600 underline">
                        {resume.resumeFile}
                      </a>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline" onClick={() => navigate(`/resumes/${resume.id}`)}>
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => navigate(`/resumes/edit/${resume.id}`)}>
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => alert(`Downloading ${resume.resumeFile}`)}>
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredResumes.length === 0 && (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium text-foreground mb-2">No Resumes Found</h3>
              <p className="text-muted-foreground">
                {searchTerm ? "Try adjusting your search term" : "No resumes uploaded yet"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumesListing;

