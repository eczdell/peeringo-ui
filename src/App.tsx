import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";

// Main modules
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import Jobs from "./pages/Jobs";
import Users from "./pages/Users";
import Applications from "./pages/Applications";
// HR & Finance

// Reports

// System
import Roles from "./pages/Roles";
import Settings from "./pages/Settings";
import CompanyDetails from "./pages/ViewDetails";
import JobDetails from "./pages/JobDetails";
import UserDetails from "./pages/UserDetails";
import ResumesListing from "./pages/Resumes";
import CreateJob from "./pages/CreateJob";
import CreateCompany from "./pages/CreateCompany";
import NotificationsPage from "./pages/Notifications";
import ReviewsPage from "./pages/Reviews";
import FavoritesPage from "./pages/Favorites";
import CVBuilder from "./pages/ResumeBuilder";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Main */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/create" element={<CreateCompany />} />
            <Route path="/companies/:id" element={<CompanyDetails />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/companies/:id/create-job" element={<CreateJob />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/posts" element={<Companies />} />
            <Route path="/resumes" element={<ResumesListing />} />
            <Route path="/resumes/create" element={<CVBuilder />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            {/* System */}
            <Route path="/roles" element={<Roles />} />
            <Route path="/settings" element={<Settings />} />

            {/* Fallback 
            <Route path="*" element={<NotFound />} />
            */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

