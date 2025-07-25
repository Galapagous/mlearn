import {
  BookOpen,
  Calendar,
  Edit,
  Eye,
  FileText,
  Share,
  Trash2,
  Users,
} from "lucide-react";
import { colorClasses } from "./data";

const CourseListItem = ({ course }: { course: any }) => {
  const handleDeleteCourse = (courseId: string) => {
    console.log(courseId);
  };
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            className={`w-12 h-12 ${
              colorClasses[course?.color]
            } rounded-lg flex items-center justify-center`}
          >
            <BookOpen size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">
              {course.name}
            </h3>
            <p className="text-gray-600 text-sm">{course.description}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center">
                <FileText size={14} className="mr-1" />
                {course.documents} documents
              </span>
              <span className="flex items-center">
                <Users size={14} className="mr-1" />
                {course.students} students
              </span>
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {course.lastModified}
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {course.category}
              </span>
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  course.status === "active"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {course.status}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Eye size={16} />
          </button>
          <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
            <Edit size={16} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Share size={16} />
          </button>
          <button
            onClick={() => handleDeleteCourse(course.id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseListItem;
