import { BsPeople, BsPerson } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { HomeIcon } from "lucide-react";
import { BiBarChart, BiCalendar, BiLogOut } from "react-icons/bi";

export const menuItems = [
  { id: "analytics", label: "Analytics", icon: BiBarChart },
  { id: "course", label: "Courses", icon: BsPeople },
  { id: "quiz", label: "Quiz", icon: FiFileText },
  { id: "result", label: "Result", icon: BiCalendar },
];

export const bottomItems = [
  { id: "/", label: "Home", icon: HomeIcon },
  { id: "profile", label: "Profile", icon: BsPerson },
  { id: "settings", label: "Settings", icon: CiSettings },
  { id: "logout", label: "Logout", icon: BiLogOut },
];
