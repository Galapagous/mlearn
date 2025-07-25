import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import useLogout from "../../hook/useLogout";
import { bottomItems, menuItems } from "./data";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const navigate = useNavigate();
  const logout = useLogout();

  const handleItemClick = (itemId: any) => {
    setActiveItem(itemId);
    if (itemId === "logout") return logout();
    if (itemId === "/") return navigate("/");
    navigate(itemId === "analytics" ? `/dashboard` : `/dashboard/${itemId}`);
  };

  return (
    <div
      className={`bg-neutral-900 text-white h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-24" : "w-auto"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MLearn
            </h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isCollapsed ? (
              <BiChevronRight size={20} />
            ) : (
              <BiChevronLeft size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "hover:bg-slate-800 text-slate-300 hover:text-white"
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="ml-3 font-medium">{item.label}</span>
                  )}
                  {isCollapsed && (
                    <div className="absolute left-16 bg-slate-800 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                      {item.label}
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-slate-700">
        <ul className="space-y-2">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "hover:bg-slate-800 text-slate-300 hover:text-white"
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="ml-3 font-medium">{item.label}</span>
                  )}
                  {isCollapsed && (
                    <div className="absolute left-16 bg-slate-800 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                      {item.label}
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* User Info (when expanded) */}
      {!isCollapsed && (
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <CgProfile size={20} />
            </div>
            <div>
              <p className="font-medium text-sm">John Doe</p>
              <p className="text-slate-400 text-xs">john@example.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
