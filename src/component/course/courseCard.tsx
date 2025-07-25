import {
  BookOpen,
  Clock,
  Edit,
  Eye,
  FileText,
  MoreVertical,
  Trash2,
} from "lucide-react";
import { colorClasses } from "../../pages/dashboard/course/data";
import { MdGeneratingTokens } from "react-icons/md";
import { useMakeRequest } from "../../hook/useMakeRequest";
import { COURSE_API } from "../../api/resources";
import { useState } from "react";

interface ICourse {
  color: any;
  label: string;
  description: string;
  lastModified: string;
  documents: number;
  id: string;
  status: string;
}

const CourseCard = ({ course }: { course: ICourse }) => {
  const makeRequest = useMakeRequest();
  const [loading, setLoading] = useState(false);
  const handleDeleteCourse = (courseId: string) => {
    alert(`course ${courseId} to be deleted`);
  };

  const handleGenerateQuestions = (courseId: string) => {
    setLoading(true);
    makeRequest(
      COURSE_API + "/generate-questions",
      "POST",
      { courseId },
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.error("Error generating questions:", error);
      },
      () => {
        setLoading(false);
      }
    );
  };

  const courseColor: string = colorClasses[course?.color];
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group">
      {/* Course Header */}
      <div
        className={`h-32 ${courseColor} rounded-t-xl relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10"></div>
        <div className="absolute top-4 right-4">
          <div className="relative">
            <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <MoreVertical size={16} className="text-white" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-2">
            <BookOpen size={20} className="text-white" />
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                course.status === "active"
                  ? "bg-green-500/20 text-green-100"
                  : "bg-yellow-500/20 text-yellow-100"
              }`}
            >
              {course.status}
            </span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {course.label}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <FileText size={14} className="mr-1" />
              {course.documents} docs
            </span>
          </div>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {course.lastModified}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <Eye size={16} />
            </button>
            <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
              <Edit size={16} />
            </button>
            <button
              onClick={() => handleDeleteCourse(course.id)}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={16} />
            </button>
            <button
              onClick={() => handleGenerateQuestions(course.id)}
              className="p-2 text-gray-400 hover:text-cyan-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              {loading ? (
                <MdGeneratingTokens className="animate-spin" size={16} />
              ) : (
                <MdGeneratingTokens size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
