// Mock data for the Peeringo Career Platform

export interface Company {
  id: string;
  name: string;
  location: string;
  owner: string;
  phoneNumber: string;
  totalJobs: number;
  status: 'active' | 'inactive';
}

export interface Job {
  id: string;
  title: string;
  companyId: string;
  companyName: string;
  location: string;
  postedDate: string;
  applicationsReceived: number;
  status: 'open' | 'closed' | 'paused';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'job-seeker' | 'recruiter';
  joinDate: string;
  resumesUploaded: number;
}

export interface Application {
  id: string;
  userId: string;
  userName: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  appliedDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

// Mock Companies
export const companies: Company[] = [
  { id: '1', name: 'TechNova Pvt. Ltd.', location: 'Kathmandu', owner: 'Ramesh Thapa', phoneNumber: '+977-9841234567', totalJobs: 12, status: 'active' },
  { id: '2', name: 'Himalayan Soft', location: 'Pokhara', owner: 'Sita Sharma', phoneNumber: '+977-9856789012', totalJobs: 8, status: 'active' },
  { id: '3', name: 'Innovate Solutions', location: 'Lalitpur', owner: 'Narayan Acharya', phoneNumber: '+977-9823456789', totalJobs: 5, status: 'active' },
  { id: '4', name: 'FutureTech Labs', location: 'Bhaktapur', owner: 'Anita Gurung', phoneNumber: '+977-9812345678', totalJobs: 6, status: 'inactive' }
];

// Mock Jobs
export const jobs: Job[] = [
  { id: '1', title: 'Frontend Developer', companyId: '1', companyName: 'TechNova Pvt. Ltd.', location: 'Kathmandu', postedDate: '2025-08-01', applicationsReceived: 20, status: 'open' },
  { id: '2', title: 'Backend Developer', companyId: '1', companyName: 'TechNova Pvt. Ltd.', location: 'Kathmandu', postedDate: '2025-07-25', applicationsReceived: 15, status: 'open' },
  { id: '3', title: 'UI/UX Designer', companyId: '2', companyName: 'Himalayan Soft', location: 'Pokhara', postedDate: '2025-07-20', applicationsReceived: 12, status: 'open' },
  { id: '4', title: 'Project Manager', companyId: '3', companyName: 'Innovate Solutions', location: 'Lalitpur', postedDate: '2025-07-15', applicationsReceived: 8, status: 'paused' },
  { id: '5', title: 'DevOps Engineer', companyId: '4', companyName: 'FutureTech Labs', location: 'Bhaktapur', postedDate: '2025-08-05', applicationsReceived: 5, status: 'closed' }
];

// Mock Users
export const users: User[] = [
  { id: '1', name: 'Krishna Tamang', email: 'krishna@example.com', phone: '+977-9841111111', role: 'job-seeker', joinDate: '2024-01-15', resumesUploaded: 2 },
  { id: '2', name: 'Maya Gurung', email: 'maya@example.com', phone: '+977-9842222222', role: 'job-seeker', joinDate: '2024-02-01', resumesUploaded: 1 },
  { id: '3', name: 'Suman Rai', email: 'suman@example.com', phone: '+977-9843333333', role: 'job-seeker', joinDate: '2024-03-01', resumesUploaded: 3 },
  { id: '4', name: 'Anita Shrestha', email: 'anita@example.com', phone: '+977-9844444444', role: 'recruiter', joinDate: '2023-12-15', resumesUploaded: 0 },
  { id: '5', name: 'Bhim Magar', email: 'bhim@example.com', phone: '+977-9845555555', role: 'job-seeker', joinDate: '2024-01-10', resumesUploaded: 2 }
];

// Mock Applications
export const applications: Application[] = [
  { id: '1', userId: '1', userName: 'Krishna Tamang', jobId: '1', jobTitle: 'Frontend Developer', companyName: 'TechNova Pvt. Ltd.', appliedDate: '2025-08-02', status: 'pending' },
  { id: '2', userId: '2', userName: 'Maya Gurung', jobId: '2', jobTitle: 'Backend Developer', companyName: 'TechNova Pvt. Ltd.', appliedDate: '2025-08-03', status: 'approved' },
  { id: '3', userId: '3', userName: 'Suman Rai', jobId: '3', jobTitle: 'UI/UX Designer', companyName: 'Himalayan Soft', appliedDate: '2025-08-04', status: 'rejected' },
  { id: '4', userId: '5', userName: 'Bhim Magar', jobId: '1', jobTitle: 'Frontend Developer', companyName: 'TechNova Pvt. Ltd.', appliedDate: '2025-08-05', status: 'pending' },
  { id: '5', userId: '1', userName: 'Krishna Tamang', jobId: '3', jobTitle: 'UI/UX Designer', companyName: 'Himalayan Soft', appliedDate: '2025-08-06', status: 'pending' }
];

export const recentApplications = applications.slice(-5);
export const recentCompanies = companies.slice(-5);

export const dashboardStats = {
  totalCompanies: companies.length,
  totalJobs: jobs.length,
  totalUsers: users.length,
  totalApplications: applications.length,
  recentApplications,
  recentCompanies
};

