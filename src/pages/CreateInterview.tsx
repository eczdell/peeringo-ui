"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const CreateInterview = () => {
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState("");
  const [interviewer, setInterviewer] = useState("");
  const [interviewee, setInterviewee] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("scheduled");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with API call to create interview
    console.log({ jobTitle, interviewer, interviewee, date, time, status });
    navigate("/interviews"); // redirect back to interviews list
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Schedule New Interview</h1>

      <Card className="shadow">
        <CardHeader>
          <CardTitle>Interview Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
              <Input
                placeholder="Interviewer Name"
                value={interviewer}
                onChange={(e) => setInterviewer(e.target.value)}
                required
              />
              <Input
                placeholder="Interviewee Name"
                value={interviewee}
                onChange={(e) => setInterviewee(e.target.value)}
                required
              />
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
                <div className="relative flex-1">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end">
              <Button type="submit">Schedule Interview</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateInterview;

