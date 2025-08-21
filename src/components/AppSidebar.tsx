import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Briefcase,
  FileText,
  FileUser,
  Bell,
  ClipboardCheck,
  Settings,
  ChevronDown,
  ChevronRight,
  Star,
  BarChart3,
  KeyRound,
  UserCog,
  Landmark,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

// === Main Modules ===
const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Applications", url: "/applications", icon: FileText },
  { title: "Companies", url: "/companies", icon: FileUser },
  { title: "Jobs", url: "/jobs", icon: Briefcase },
  { title: "Users", url: "/users", icon: Users },
  { title: "Posts", url: "/posts", icon: FileText },
  { title: "Resumes", url: "/resumes", icon: FileUser },
];

// === HR & Hiring ===
const hrItems = [
  { title: "Interviews", url: "/interviews", icon: ClipboardCheck },
];

// === Engagement ===
const engagementItems = [
  { title: "Reviews", url: "/reviews", icon: ClipboardCheck },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Favorites", url: "/favorites", icon: Star },
  { title: "Points", url: "/points", icon: Landmark },
];

// === Reports ===
const reportItems = [
  { title: "Reports", url: "/reports", icon: BarChart3 },
];

// === System / Settings ===
const systemItems = [
  { title: "Roles", url: "/roles", icon: KeyRound },
  { title: "Settings", url: "/settings", icon: Settings },
];

// === Admin ===
const adminItems = [
  { title: "Admin Dashboard", url: "/admin/dashboard", icon: UserCog },
  { title: "Admin Users", url: "/admin/users", icon: Users },
  { title: "Admin Companies", url: "/admin/companies", icon: FileUser },
  { title: "Admin Jobs", url: "/admin/jobs", icon: Briefcase },
  { title: "Admin Posts", url: "/admin/posts", icon: FileText },
];

// === Auth ===
const authItems = [
  { title: "Login", url: "/auth/login", icon: UserCog },
  { title: "Register", url: "/auth/register", icon: UserCog },
  { title: "Forgot Password", url: "/auth/forgot-password", icon: UserCog },
];

const getNavClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "bg-primary text-white font-semibold border-l-4 border-primary pl-2 shadow-sm"
    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground pl-2";

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  // States for collapsible sidebar groups
  const [openMain, setOpenMain] = useState(true);
  const [openHR, setOpenHR] = useState(true);
  const [openEngagement, setOpenEngagement] = useState(true);
  const [openReports, setOpenReports] = useState(false);
  const [openSystem, setOpenSystem] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);

  const renderGroup = (
    label: string,
    items: { title: string; url: string; icon: any }[],
    open: boolean,
    toggle: () => void,
    extraClass?: string
  ) => (
    <SidebarGroup>
      <SidebarGroupLabel
        onClick={toggle}
        className={`flex justify-between items-center cursor-pointer ${extraClass || ""}`}
      >
        <span>{label}</span>
        {!collapsed && (open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />)}
      </SidebarGroupLabel>
      {open && (
        <SidebarGroupContent>
          <SidebarMenu className="space-y-1">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${getNavClass({
                        isActive,
                      })}`
                    }
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      )}
    </SidebarGroup>
  );

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r border-border bg-card transition-all duration-300`}
      collapsible="icon"
    >
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className="mb-6 px-2">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500">
              <Home className="h-4 w-4 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-bold text-foreground">Peeringo</h2>
                <p className="text-xs text-muted-foreground">Job & Career Platform</p>
              </div>
            )}
          </div>
        </div>

        {/* Groups */}
        {renderGroup("Main Modules", mainItems, openMain, () => setOpenMain(!openMain))}
        {renderGroup("HR & Hiring", hrItems, openHR, () => setOpenHR(!openHR), "mt-4")}
        {renderGroup("Engagement", engagementItems, openEngagement, () => setOpenEngagement(!openEngagement), "mt-4")}
        {renderGroup("Reports", reportItems, openReports, () => setOpenReports(!openReports), "mt-4")}
        {renderGroup("System", systemItems, openSystem, () => setOpenSystem(!openSystem), "mt-4")}
        {renderGroup("Admin", adminItems, openAdmin, () => setOpenAdmin(!openAdmin), "mt-4")}
        {renderGroup("Auth", authItems, openAuth, () => setOpenAuth(!openAuth), "mt-4")}
      </SidebarContent>
    </Sidebar>
  );
}

