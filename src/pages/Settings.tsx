"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const loggedInUser = {
  name: "Sabin Silwal",
  email: "sabin.silwal@example.com",
  role: "Administrator",
  avatarUrl: "https://i.pravatar.cc/150?u=sabin.silwal@example.com",
};

export default function Settings() {
  const [appName, setAppName] = useState("ConstructPro");
  const [timezone, setTimezone] = useState("Asia/Kathmandu");
  const [language, setLanguage] = useState("en");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const [passwordPolicyEnabled, setPasswordPolicyEnabled] = useState(true);
  const [twoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(false);

  const [theme, setTheme] = useState("light");

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8 lg:py-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left panel - Settings */}
          <section className="flex-1 space-y-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Settings
            </h1>

            {/* General */}
            <Card className="rounded-xl shadow-md border border-gray-200">
              <CardHeader className="border-b border-gray-200 px-6 py-4">
                <CardTitle className="text-xl font-semibold">General</CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6 space-y-6">
                <div>
                  <label
                    htmlFor="appName"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Application Name
                  </label>
                  <Input
                    id="appName"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder="Enter application name"
                    className="max-w-md"
                  />
                </div>

                <div>
                  <label
                    htmlFor="timezone"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Timezone
                  </label>
                  <Select value={timezone} onValueChange={setTimezone}>
                    <SelectTrigger className="max-w-md w-full">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Asia/Kathmandu">Asia/Kathmandu</SelectItem>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="America/New_York">America/New_York</SelectItem>
                      <SelectItem value="Europe/London">Europe/London</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="language"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Language
                  </label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="max-w-md w-full">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="np">Nepali</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
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
                  <Switch
                    id="emailNotifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between max-w-md">
                  <span className="font-medium text-gray-700">SMS Notifications</span>
                  <Switch
                    id="smsNotifications"
                    checked={smsNotifications}
                    onCheckedChange={setSmsNotifications}
                  />
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
                  <span className="font-medium text-gray-700">
                    Enforce Strong Password Policy
                  </span>
                  <Switch
                    id="passwordPolicyEnabled"
                    checked={passwordPolicyEnabled}
                    onCheckedChange={setPasswordPolicyEnabled}
                  />
                </div>

                <div className="flex items-center justify-between max-w-md">
                  <span className="font-medium text-gray-700">
                    Enable Two-Factor Authentication (2FA)
                  </span>
                  <Switch
                    id="twoFactorAuthEnabled"
                    checked={twoFactorAuthEnabled}
                    onCheckedChange={setTwoFactorAuthEnabled}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Theme */}
            <Card className="rounded-xl shadow-md border border-gray-200">
              <CardHeader className="border-b border-gray-200 px-6 py-4">
                <CardTitle className="text-xl font-semibold">Theme</CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6 max-w-md">
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System Default</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Save */}
            <div className="max-w-md flex justify-end">
              <Button
                className="bg-gradient-construction shadow-construction"
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </div>
          </section>

          {/* Right panel - User Profile */}
          <aside className="w-full max-w-sm sticky top-10 self-start">
            <Card className="rounded-xl shadow-md border border-gray-200 p-6 text-center">
              <img
                src={loggedInUser.avatarUrl}
                alt={`${loggedInUser.name} avatar`}
                className="mx-auto h-28 w-28 rounded-full object-cover mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-900">{loggedInUser.name}</h2>
              <p className="text-gray-600 mb-2">{loggedInUser.email}</p>
              <p className="inline-block rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium">
                {loggedInUser.role}
              </p>
              <Button
                variant="outline"
                className="mt-6 w-full"
                onClick={() => alert("Edit Profile clicked")}
              >
                Edit Profile
              </Button>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}

