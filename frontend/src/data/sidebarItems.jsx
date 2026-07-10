import {
  LayoutDashboard,
  Upload,
  MessageSquare,
  FileText,
  GitBranch,
  ShieldCheck,
  Settings,
} from "lucide-react";


const items = [
    {
        id: 1,
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/"
    },
    {
        id: 2,
        name: "Upload PDF",
        icon: Upload,
        path: "/upload"
    },
    {
        id: 3,
        name: "AI Chat",
        icon: MessageSquare,
        path: "/aichat"
    },
    {
        id: 4,
        name: "Documents",
        icon: FileText,
        path: "/documents"
    },
    {
        id: 5,
        name: "Knowledge Graph",
        icon: GitBranch,
        path: "/knowledgegraph"
    },
    {
        id: 6,
        name: "Compliance",
        icon: ShieldCheck,
        path: "/compliance"
    },
    {
        id: 7,
        name: "Settings",
        icon: Settings,
        path: "/settings"
    }

]

export default items;