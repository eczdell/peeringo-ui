'use client';

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const loggedInUser = {
  name: "Sabin Silwal",
  email: "sabin.silwal@example.com",
  role: "Administrator",
  avatarUrl: "https://i.pravatar.cc/150?u=sabin.silwal@example.com",
  resumeVisibility: true, // CV visibility
  preferredJobLocation: "Kathmandu, Nepal",
  preferredJobType: "Full-time",
};

export default function ProfileSettings() {
  const [fullName, setFullName] = useState(loggedInUser.name);
  const [email, setEmail] = useState(loggedInUser.email);
  const [resumeVisible, setResumeVisible] = useState(loggedInUser.resumeVisibility);
  const [preferredLocation, setPreferredLocation] = useState(loggedInUser.preferredJobLocation);
  const [preferredJobType, setPreferredJobType] = useState(loggedInUser.preferredJobType);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [passwordPolicyEnabled, setPasswordPolicyEnabled] = useState(true);
  const [twoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(false);

  const handleSave = () => {
    alert("Profile and settings saved!");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8 lg:py-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left panel - Settings */}
          <section className="flex-1 space-y-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Profile & Settings
            </h1>

            {/* Account Info */}
            <Card className="rounded-xl shadow-md border border-gray-200">
              <CardHeader className="border-b border-gray-200 px-6 py-4">
                <CardTitle className="text-xl font-semibold">Account Info</CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6 space-y-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Full Name</label>
                  <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter full name" />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Email</label>
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </div>
              </CardContent>
            </Card>

            {/* CV / Preferences */}
            <Card className="rounded-xl shadow-md border border-gray-200">
              <CardHeader className="border-b border-gray-200 px-6 py-4">
                <CardTitle className="text-xl font-semibold">CV & Job Preferences</CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6 space-y-6">
                <div className="flex items-center justify-between max-w-md">
                  <span className="font-medium text-gray-700">Make CV Visible to Employers</span>
                  <Switch checked={resumeVisible} onCheckedChange={setResumeVisible} />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">Preferred Job Location</label>
                  <Input value={preferredLocation} onChange={(e) => setPreferredLocation(e.target.value)} placeholder="Enter location" />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">Preferred Job Type</label>
                  <Select value={preferredJobType} onValueChange={setPreferredJobType}>
                    <SelectTrigger className="w-full max-w-md">
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="rounded-xl shadow-md border border-gray-200">
              <CardHeader className="border-b border-gray-200 px-6 py-4">
                <CardTitle className="text-xl font-semibold">Notifications</CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6 space-y-6">
                <div className="flex items-center justify-between max-w-md">
                  <span className="font-medium text-gray-700">Email Notifications</span>
                  <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>
                <div className="flex items-center justify-between max-w-md">
                  <span className="font-medium text-gray-700">SMS Notifications</span>
                  <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="rounded-xl shadow-md border border-gray-200">
              <CardHeader className="border-b border-gray-200 px-6 py-4">
                <CardTitle className="text-xl font-semibold">Security</CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6 space-y-6">
                <div className="flex items-center justify-between max-w-md">
                  <span className="font-medium text-gray-700">Enforce Strong Password Policy</span>
                  <Switch checked={passwordPolicyEnabled} onCheckedChange={setPasswordPolicyEnabled} />
                </div>
                <div className="flex items-center justify-between max-w-md">
                  <span className="font-medium text-gray-700">Enable Two-Factor Authentication (2FA)</span>
                  <Switch checked={twoFactorAuthEnabled} onCheckedChange={setTwoFactorAuthEnabled} />
                </div>
              </CardContent>
            </Card>

            {/* Save */}
            <div className="max-w-md flex justify-end">
              <Button className="bg-gradient-construction shadow-construction" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </section>

          {/* Right panel - Profile Info */}
          <aside className="w-full max-w-sm sticky top-10 self-start">
            <Card className="rounded-xl shadow-md border border-gray-200 p-6 text-center">
              <img src={loggedInUser.avatarUrl} alt="User avatar" className="mx-auto h-28 w-28 rounded-full object-cover mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900">{loggedInUser.name}</h2>
              <p className="text-gray-600 mb-2">{loggedInUser.email}</p>
              <p className="inline-block rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium">{loggedInUser.role}</p>
              <Button variant="outline" className="mt-6 w-full" onClick={() => alert("Edit Profile clicked")}>
                Edit Profile
              </Button>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}

