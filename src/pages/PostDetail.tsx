"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CompanyPostDetailPage = () => {
  const post = {
    id: 1,
    title: "Senior Frontend Developer",
    company: {
      name: "TechWave Solutions Pvt. Ltd.",
      logo: "https://dummyimage.com/100x100/000/fff.png&text=TW",
      location: "Kathmandu, Nepal",
      website: "https://techwave.com",
      about:
        "TechWave is a fast-growing software company focusing on delivering innovative web and mobile solutions for global clients.",
    },
    description:
      "We are looking for a skilled Senior Frontend Developer with strong knowledge of React, TypeScript, and modern frontend frameworks. You will work closely with our product and backend teams to build scalable applications.",
    responsibilities: [
      "Develop and maintain user-facing features using React & TypeScript",
      "Ensure performance, scalability, and security of applications",
      "Collaborate with designers, product managers, and backend developers",
      "Mentor junior developers and participate in code reviews",
    ],
    requirements: [
      "Bachelor’s degree in Computer Science or related field",
      "3+ years of experience with React/Next.js",
      "Strong understanding of REST APIs and state management",
      "Familiarity with CI/CD and cloud platforms",
      "Excellent problem-solving skills",
    ],
    employmentType: "Full-time",
    salary: "NPR 120,000 – 180,000 per month",
    experienceLevel: "Mid-Senior Level",
    postedDate: "2025-08-20",
    deadline: "2025-09-15",
  };

  return (
    <div className="mx-auto py-10 px-6">
      {/* Header */}
      <Card className="mb-6 shadow-lg">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={post.company.logo}
              alt={post.company.name}
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <p className="text-gray-600">{post.company.name}</p>
              <p className="text-sm text-gray-500">{post.company.location}</p>
            </div>
          </div>
          <Button className="mt-4 sm:mt-0">Apply Now</Button>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{post.description}</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Employment Type</p>
              <p>{post.employmentType}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Salary</p>
              <p>{post.salary}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Experience Level</p>
              <p>{post.experienceLevel}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Deadline</p>
              <p>{post.deadline}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responsibilities */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Responsibilities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {post.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {post.requirements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* About Company */}
      <Card>
        <CardHeader>
          <CardTitle>About {post.company.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{post.company.about}</p>
          <div className="mt-2">
            <a
              href={post.company.website}
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Visit Website
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyPostDetailPage;

