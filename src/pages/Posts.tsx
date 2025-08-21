"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FileText,
  Building,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
} from "lucide-react";

// Mock Data (replace with API later)
const posts = [
  {
    id: 1,
    title: "We are hiring Frontend Engineers",
    company: "TechCorp",
    author: "Alice Johnson",
    createdAt: "2025-08-01",
    status: "published",
    likes: 120,
    comments: 34,
  },
  {
    id: 2,
    title: "Company Retreat Highlights",
    company: "Buildify",
    author: "Mark Smith",
    createdAt: "2025-07-28",
    status: "draft",
    likes: 0,
    comments: 0,
  },
  {
    id: 3,
    title: "New Product Launch",
    company: "InnoSoft",
    author: "Sarah Lee",
    createdAt: "2025-07-15",
    status: "published",
    likes: 200,
    comments: 50,
  },
];

const CompanyPosts = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) =>
    status === "published" ? "default" : "secondary";

  const totalPosts = posts.length;
  const publishedPosts = posts.filter((p) => p.status === "published").length;
  const draftPosts = posts.filter((p) => p.status === "draft").length;

  return (
    <div className="space-y-6 animate-fade-in p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Company Posts</h1>
          <p className="text-muted-foreground">Manage posts created by companies</p>
        </div>
        <Button className="bg-gradient-construction shadow-construction">
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-construction-primary" />
            <div>
              <p className="text-2xl font-bold">{totalPosts}</p>
              <p className="text-sm text-muted-foreground">Total Posts</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <CheckCircle className="h-8 w-8 text-status" />
            <div>
              <p className="text-2xl font-bold text-status">{publishedPosts}</p>
              <p className="text-sm text-muted-foreground">Published</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-construction">
          <CardContent className="flex items-center gap-3">
            <XCircle className="h-8 w-8 text-danger" />
            <div>
              <p className="text-2xl font-bold text-danger">{draftPosts}</p>
              <p className="text-sm text-muted-foreground">Drafts</p>
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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by title, company, or author..."
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
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Posts Table */}
      <Card className="shadow-construction">
        <CardHeader>
          <CardTitle>Posts List ({filteredPosts.length})</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {filteredPosts.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Likes</TableHead>
                  <TableHead>Comments</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id} className="hover:bg-muted/30">
                    <TableCell>{post.title}</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Building className="h-3 w-3 text-muted-foreground" />
                      {post.company}
                    </TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>{post.createdAt}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(post.status)}>{post.status}</Badge>
                    </TableCell>
                    <TableCell>{post.likes}</TableCell>
                    <TableCell>{post.comments}</TableCell>
                    <TableCell className="flex gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/posts/${post.id}`)}
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-danger">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No Posts Found</h3>
              <p className="text-muted-foreground">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your filters"
                  : "Create your first company post"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyPosts;

