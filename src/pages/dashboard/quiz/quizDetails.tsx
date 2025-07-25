import {
  AlertCircle,
  CheckCircle,
  Clock,
  Play,
  RotateCcw,
  Target,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const QuizDetails = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const quiz: any = {
    status: "not_started",
  };
  const startQuiz = () => {
    navigate(`/dashboard/test/${courseId}`);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={20} className="text-green-500" />;
      case "not_started":
        return <Play size={20} className="text-blue-500" />;
      default:
        return <AlertCircle size={20} className="text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">
              {quiz?.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                <Target size={14} className="mr-1" />
                {quiz?.questions} questions
              </span>
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />
                {quiz?.timeLimit} min
              </span>
            </div>
          </div>
          {getStatusIcon(quiz?.status)}
        </div>

        {quiz.attempts > 0 && (
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Attempts:</span>
                <span className="font-medium ml-1">{quiz?.attempts}</span>
              </div>
              <div>
                <span className="text-gray-600">Best Score:</span>
                <span className="font-medium ml-1 text-green-600">
                  {quiz?.bestScore}%
                </span>
              </div>
            </div>
            {quiz?.lastScore && (
              <div className="mt-2 text-sm">
                <span className="text-gray-600">Last Score:</span>
                <span className="font-medium ml-1">{quiz?.lastScore}%</span>
              </div>
            )}
          </div>
        )}

        <button
          onClick={startQuiz}
          className={`w-full py-2 rounded-lg transition-colors flex items-center justify-center ${
            quiz?.status === "not_started"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          {quiz?.status === "not_started" ? (
            <>
              <Play size={16} className="mr-2" />
              Start Quiz
            </>
          ) : (
            <>
              <RotateCcw size={16} className="mr-2" />
              Retake Quiz
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default QuizDetails;
