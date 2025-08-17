import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Briefcase,
  FileText,
  FileUser,
  Clock
} from "lucide-react";
import { dashboardStats, recentApplications, recentCompanies } from "@/data/mockData";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Job & Career Platform Overview</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Companies</CardTitle>
            <FileUser className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{dashboardStats.totalCompanies}</div>
            <p className="text-xs text-muted-foreground">
              Active companies on platform
            </p>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{dashboardStats.totalJobs}</div>
            <p className="text-xs text-muted-foreground">
              Open job positions
            </p>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{dashboardStats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              Registered job seekers
            </p>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <FileText className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{dashboardStats.totalApplications}</div>
            <p className="text-xs text-muted-foreground">
              Submitted applications
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Companies */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Recent Companies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {recentCompanies.slice(0, 5).map((company) => (
            <div key={company.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/20">
              <div>
                <p className="text-sm font-medium">{company.name}</p>
                <p className="text-xs text-muted-foreground">{company.location}</p>
              </div>
              <Badge className="text-xs">{company.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Applications */}
      <Card className="shadow">
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {recentApplications.slice(0, 5).map((app) => (
            <div key={app.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/20">
              <div>
                <p className="text-sm font-medium">{app.userName}</p>
                <p className="text-xs text-muted-foreground">{app.jobTitle}</p>
              </div>
              <Badge
                variant={app.status === "approved" ? "default" :
                  app.status === "pending" ? "secondary" : "destructive"}
                className="text-xs"
              >
                {app.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

