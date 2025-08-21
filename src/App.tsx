import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";

// --- Main Modules ---
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import CreateCompany from "./pages/CreateCompany";
import CompanyDetails from "./pages/CompanyDetails";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import CreateJob from "./pages/CreateJob";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Posts from "./pages/Posts";
import Applications from "./pages/Applications";
import ResumesListing from "./pages/Resumes";
import CVBuilder from "./pages/ResumeBuilder";

// --- Engagement ---
import NotificationsPage from "./pages/Notifications";
import ReviewsPage from "./pages/Reviews";
import FavoritesPage from "./pages/Favorites";
import PointsPage from "./pages/Points";

// --- HR & Interviews ---
import InterviewsPage from "./pages/Interviews";
import InterviewDetails from "./pages/InterviewDetails";

// --- System ---
import Roles from "./pages/Roles";
import Settings from "./pages/Settings";

// --- Admin ---
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminCompanies from "./pages/AdminCompanies";
import AdminJobs from "./pages/AdminJobs";
import AdminPosts from "./pages/AdminPosts";

// --- Auth ---
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ForgotPasswordPage from "./pages/ForgotPassword";
import Reports from "./pages/Reports";
import CreateInterview from "./pages/CreateInterview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Main Modules */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/create" element={<CreateCompany />} />
            <Route path="/companies/:id" element={<CompanyDetails />} />
            <Route path="/companies/:id/create-job" element={<CreateJob />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/resumes" element={<ResumesListing />} />
            <Route path="/resumes/create" element={<CVBuilder />} />

            {/* Engagement */}
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/points" element={<PointsPage />} />
            <Route path="/points" element={<PointsPage />} />

            {/* HR & Interviews */}
            <Route path="/interviews" element={<InterviewsPage />} />
            <Route path="/interviews/create" element={<CreateInterview />} />
            <Route path="/interviews/:id" element={<InterviewDetails />} />

            <Route path="/reports" element={<Reports />} />

            {/* System */}
            <Route path="/roles" element={<Roles />} />
            <Route path="/settings" element={<Settings />} />

            {/* Admin */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/companies" element={<AdminCompanies />} />
            <Route path="/admin/jobs" element={<AdminJobs />} />
            <Route path="/admin/posts" element={<AdminPosts />} />

            {/* Auth */}
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

            {/* TODO: Add NotFound fallback */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

