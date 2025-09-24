import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-screen overflow-hidden w-screen flex items-start">
      <div className="h-full">
        <Sidebar />
      </div>
      <div className="h-screen w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
