import React, { useState } from "react";
import {
  BiAward,
  BiBookOpen,
  BiCheckCircle,
  BiHelpCircle,
  BiTrendingUp,
} from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { FiFileText, FiTarget } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("7d");

  // Sample data
  const overviewStats = [
    {
      title: "Total Courses",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: BiBookOpen,
      color: "blue",
    },
    {
      title: "Quizzes Created",
      value: "3,892",
      change: "+8%",
      trend: "up",
      icon: BiHelpCircle,
      color: "green",
    },
    {
      title: "Quizzes Taken",
      value: "15,324",
      change: "+23%",
      trend: "up",
      icon: FiTarget,
      color: "purple",
    },
    {
      title: "Avg Score",
      value: "78.5%",
      change: "+5%",
      trend: "up",
      icon: BiAward,
      color: "orange",
    },
  ];

  const courseUploadData = [
    { name: "Mon", uploads: 45, pdfs: 38 },
    { name: "Tue", uploads: 52, pdfs: 44 },
    { name: "Wed", uploads: 38, pdfs: 32 },
    { name: "Thu", uploads: 65, pdfs: 58 },
    { name: "Fri", uploads: 72, pdfs: 65 },
    { name: "Sat", uploads: 28, pdfs: 24 },
    { name: "Sun", uploads: 35, pdfs: 30 },
  ];

  const quizPerformanceData = [
    { name: "Jan", created: 320, taken: 1240, completed: 1180 },
    { name: "Feb", created: 280, taken: 1450, completed: 1320 },
    { name: "Mar", created: 410, taken: 1680, completed: 1520 },
    { name: "Apr", created: 380, taken: 1920, completed: 1750 },
    { name: "May", created: 450, taken: 2240, completed: 2080 },
    { name: "Jun", created: 520, taken: 2680, completed: 2450 },
  ];

  const scoreDistribution = [
    { name: "90-100%", value: 28, color: "#10B981" },
    { name: "80-89%", value: 35, color: "#3B82F6" },
    { name: "70-79%", value: 22, color: "#F59E0B" },
    { name: "60-69%", value: 10, color: "#EF4444" },
    { name: "Below 60%", value: 5, color: "#6B7280" },
  ];

  const topCourses = [
    { name: "React Fundamentals", uploads: 234, quizzes: 45, avgScore: 85.2 },
    { name: "JavaScript Basics", uploads: 189, quizzes: 38, avgScore: 78.9 },
    { name: "Python for Beginners", uploads: 156, quizzes: 32, avgScore: 82.1 },
    { name: "Data Structures", uploads: 142, quizzes: 28, avgScore: 74.5 },
    { name: "Web Development", uploads: 128, quizzes: 25, avgScore: 79.8 },
  ];

  const recentActivity = [
    {
      time: "2 mins ago",
      action: 'New quiz created for "Machine Learning Basics"',
      type: "quiz",
    },
    {
      time: "5 mins ago",
      action: 'PDF uploaded: "Advanced Python Concepts.pdf"',
      type: "upload",
    },
    {
      time: "12 mins ago",
      action: '50 students completed "JavaScript Quiz #3"',
      type: "completion",
    },
    {
      time: "18 mins ago",
      action: 'New course "Database Design" created',
      type: "course",
    },
    {
      time: "25 mins ago",
      action: 'Quiz results analyzed for "React Components"',
      type: "analysis",
    },
  ];

  const StatCard = ({ stat }) => {
    const Icon = stat?.icon;
    const colorClasses = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      green: "bg-green-50 text-green-600 border-green-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      orange: "bg-orange-50 text-orange-600 border-orange-200",
    };

    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              {stat.value}
            </p>
            <div className="flex items-center mt-2">
              <BiTrendingUp size={16} className="text-green-500 mr-1" />
              <span className="text-sm font-medium text-green-500">
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">vs last period</span>
            </div>
          </div>
          <div
            className={`p-3 rounded-xl border-2 ${colorClasses[stat.color]}`}
          >
            <Icon size={24} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Track your platform performance and user engagement
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewStats.map((statData, index) => (
          <StatCard key={index} stat={statData} />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Course Uploads */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Daily Course Uploads
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={courseUploadData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="uploads"
                fill="#3B82F6"
                name="Total Uploads"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="pdfs"
                fill="#10B981"
                name="PDF Files"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Score Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quiz Score Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={scoreDistribution}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {scoreDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quiz Performance Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quiz Performance Over Time
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={quizPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="taken"
              stackId="1"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
              name="Quizzes Taken"
            />
            <Area
              type="monotone"
              dataKey="completed"
              stackId="1"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.5}
              name="Quizzes Completed"
            />
            <Line
              type="monotone"
              dataKey="created"
              stroke="#F59E0B"
              strokeWidth={3}
              name="Quizzes Created"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Courses */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Courses
          </h3>
          <div className="space-y-4">
            {topCourses.map((course, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h4 className="font-medium text-gray-900">{course.name}</h4>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                    <span className="flex items-center">
                      <FiFileText size={14} className="mr-1" />
                      {course.uploads} uploads
                    </span>
                    <span className="flex items-center">
                      <BiHelpCircle size={14} className="mr-1" />
                      {course.quizzes} quizzes
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-green-600">
                    {course.avgScore}%
                  </div>
                  <div className="text-sm text-gray-500">avg score</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => {
              const getIcon = (type) => {
                switch (type) {
                  case "quiz":
                    return <BiHelpCircle size={16} className="text-blue-500" />;
                  case "upload":
                    return <FiFileText size={16} className="text-green-500" />;
                  case "completion":
                    return (
                      <BiCheckCircle size={16} className="text-purple-500" />
                    );
                  case "course":
                    return <BiBookOpen size={16} className="text-orange-500" />;
                  case "analysis":
                    return <BarChart size={16} className="text-red-500" />;
                  default:
                    return <BsClock size={16} className="text-gray-500" />;
                }
              };

              return (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    {getIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
