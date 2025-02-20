import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ClassIcon from "@mui/icons-material/Class";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import WorkIcon from "@mui/icons-material/Work";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

export const PLACEMENT_CORE_SIDEBAR = [ 
  {
    base: "/placement-core-dashboard",
    title: "",
    links: [
      {
        label: "Dashboard",
        path: "",
        icon: DashboardIcon,
      },
      {
        label: "Job Openings",
        path: "/job-openings",
        icon: WorkIcon,
      },
      {
        label: "Events",
        path: "/events",
        icon: EventIcon,
      },
      {
        label: "Track Applications",
        path: "/track-applications",
        icon: PersonSearchIcon,
      },
    ],
  },
  {
    base: "/placement-core",
    title: "",
    links: [
      {
        label: "Placement Years",
        path: "/placement-years",
        icon: CalendarMonthIcon,
      },
      {
        label: "Job Types",
        path: "/job-types",
        icon: ClassIcon,
      },
      {
        label: "Feedback",
        path: "/feedback",
        icon: FeedbackIcon,
      },
      {
        label: "FAQs",
        path: "/faq",
        icon: LiveHelpIcon,
      },
    ],
  },
];
