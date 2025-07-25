import { BookOpen, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { colorClasses } from "./data";

const CourseCard = ({ courseData }: { courseData: any }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/dashboard/quiz_details/${courseData?.id}`);
      }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer group"
    >
      <div
        className={`h-32 bg-gradient-to-br ${
          colorClasses[courseData?.color]
        } rounded-t-xl relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <BookOpen size={24} />
        </div>
        {courseData?.lastAttempt && (
          <div className="absolute top-4 right-4">
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                courseData?.lastAttempt.status === "passed"
                  ? "bg-green-500/20 text-green-100"
                  : "bg-red-500/20 text-red-100"
              }`}
            >
              Last: {courseData?.lastAttempt?.score}%
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {courseData?.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{courseData?.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">
              {courseData?.totalQuizzes}
            </div>
            <div className="text-xs text-gray-500">Total Quizzes</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-green-600">
              {courseData?.completedQuizzes}
            </div>
            <div className="text-xs text-gray-500">Completed</div>
          </div>
        </div>

        {courseData?.lastAttempt && (
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Last Attempt:</span>
              <span className="font-medium">
                {courseData?.lastAttempt?.date}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-600">Score:</span>
              <span
                className={`font-medium ${
                  courseData?.lastAttempt?.status === "passed"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {courseData?.lastAttempt?.score}% (
                {courseData?.lastAttempt?.status})
              </span>
            </div>
          </div>
        )}

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
          <span>View Quizzes</span>
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
