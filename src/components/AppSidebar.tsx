import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Briefcase,
  FileText,
  FileUser,
  ChevronDown,
  ChevronRight,
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

// === Peeringo Modules - simplified ===
const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Applications", url: "/applications", icon: FileText },
  { title: "Companies", url: "/companies", icon: FileUser },
  { title: "Jobs", url: "/jobs", icon: Briefcase },
  { title: "Users", url: "/users", icon: Users },
  { title: "Posts", url: "/posts", icon: FileText },
  { title: "Resumes", url: "/resumes", icon: FileUser },
];

const getNavClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "bg-primary text-white font-semibold border-l-4 border-primary pl-2 shadow-sm"
    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground pl-2";

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  // State for collapsible sidebar groups
  const [openMain, setOpenMain] = useState(true);

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

        {/* Main Modules */}
        <SidebarGroup>
          <SidebarGroupLabel
            onClick={() => setOpenMain(!openMain)}
            className="flex justify-between items-center cursor-pointer"
          >
            <span>Main Modules</span>
            {!collapsed && (openMain ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />)}
          </SidebarGroupLabel>
          {openMain && (
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) =>
                          `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${getNavClass({ isActive })}`
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
      </SidebarContent>
    </Sidebar>
  );
}

