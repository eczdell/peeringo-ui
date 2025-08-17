"use client"; // if using Next.js app router

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // or use Next.js router
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  Phone,
  MapPin,
  Calendar,
  Search,
  Filter,
  UserPlus,
  Eye,
  Edit,
  CheckCircle,
  XCircle
} from "lucide-react";
import { companies } from "@/data/mockData";

const Companies = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || company.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => status === "active" ? "default" : "destructive";

  const totalCompanies = companies.length;
  const activeCompanies = companies.filter(c => c.status === "active").length;
  const inactiveCompanies = companies.filter(c => c.status === "inactive").length;

  const handleClick = () => {
    navigate("/companies/create"); // route for Create Company page
  };

  return (
    <div className="space-y-6 animate-fade-in p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Companies Management</h1>
          <p className="text-muted-foreground">Manage all partner companies</p>
        </div>
        <Button className="bg-gradient-construction hover:bg-primary-hover shadow-construction"
          onClick={handleClick}
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Add Company
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <Users className="h-8 w-8 text-construction-primary" />
            <div>
              <p className="text-2xl font-bold">{totalCompanies}</p>
              <p className="text-sm text-muted-foreground">Total Companies</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <CheckCircle className="h-8 w-8 text-status" />
            <div>
              <p className="text-2xl font-bold text-status">{activeCompanies}</p>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <XCircle className="h-8 w-8 text-danger" />
            <div>
              <p className="text-2xl font-bold text-danger">{inactiveCompanies}</p>
              <p className="text-sm text-muted-foreground">Inactive</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" /> Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search companies by name, owner, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Companies Table */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>Companies List ({filteredCompanies.length})</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {filteredCompanies.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Total Jobs</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCompanies.map(company => (
                  <TableRow key={company.id} className="hover:bg-muted/30">
                    <TableCell>{company.name}</TableCell>
                    <TableCell>{company.owner}</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      {company.location}
                    </TableCell>
                    <TableCell>{company.totalJobs}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(company.status)}>{company.status}</Badge>
                    </TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Phone className="h-3 w-3 text-muted-foreground" />
                      {company.phoneNumber}
                    </TableCell>
                    <TableCell className="flex gap-1">
                      <Button variant="outline" size="sm" onClick={() => navigate(`/companies/${company.id}`)}>
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No Companies Found</h3>
              <p className="text-muted-foreground">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your filters"
                  : "Add your first company to get started"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Companies;

