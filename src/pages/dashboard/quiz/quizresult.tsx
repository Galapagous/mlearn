import { CheckCircle, XCircle } from "lucide-react";
import React from "react";

const QuizResults = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
      <div
        className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
          quizResults.status === "passed" ? "bg-green-100" : "bg-red-100"
        }`}
      >
        {quizResults.status === "passed" ? (
          <CheckCircle size={40} className="text-green-600" />
        ) : (
          <XCircle size={40} className="text-red-600" />
        )}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Quiz {quizResults.status === "passed" ? "Passed!" : "Failed"}
      </h2>
      <p className="text-gray-600 mb-8">
        {quizResults.status === "passed"
          ? "Congratulations! You have successfully completed the quiz."
          : "Don't worry, you can retake the quiz to improve your score."}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">
            {quizResults.score}%
          </div>
          <div className="text-sm text-gray-500">Final Score</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">
            {quizResults.correctAnswers}
          </div>
          <div className="text-sm text-gray-500">Correct Answers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-700">
            {quizResults.totalQuestions}
          </div>
          <div className="text-sm text-gray-500">Total Questions</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600">
            {formatTime(quizResults.timeSpent)}
          </div>
          <div className="text-sm text-gray-500">Time Spent</div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => {
            setShowResults(false);
            setCurrentQuiz(null);
            setQuizStarted(false);
          }}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back to Quizzes
        </button>
        <button
          onClick={() => startQuiz(currentQuiz)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
