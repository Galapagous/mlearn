import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { type QuizResult } from "../../../types/dashboard";
import { ChevronLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { courses } from "./data";

const QuizAttemptDetails = () => {
  const { attemptId } = useParams<{ attemptId: string }>();
  const navigate = useNavigate();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [courseName, setCourseName] = useState<string>("Unknown Course");
  const [quizTitle, setQuizTitle] = useState<string>("Unknown Quiz");

  // Mock result data (replace with API call)
  const mockResults: QuizResult[] = [
    {
      attemptId: 1,
      quizId: 101,
      courseId: 1,
      score: 85,
      correctAnswers: 8,
      totalQuestions: 10,
      timeSpent: 720,
      status: "passed",
      date: "2024-06-28",
      userAnswers: {
        1: 1,
        2: 1,
        3: 0,
        4: 2,
        5: 1,
        6: 0,
        7: 1,
        8: 1,
        9: 0,
        10: 1,
      },
      questions: [
        {
          id: 1,
          question: "What is the primary purpose of React components?",
          options: [
            "To style web pages",
            "To create reusable UI elements",
            "To manage databases",
            "To handle server requests",
          ],
          correctAnswer: 1,
          explanation:
            "React components are primarily used to create reusable UI elements that can be composed together to build complex user interfaces.",
        },
        {
          id: 2,
          question: "Which hook is used to manage component state in React?",
          options: ["useEffect", "useState", "useContext", "useReducer"],
          correctAnswer: 1,
          explanation:
            "useState is the primary hook for managing local component state in functional React components.",
        },
        {
          id: 3,
          question: "What does JSX stand for?",
          options: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JavaScript Extension",
            "Java XML",
          ],
          correctAnswer: 0,
          explanation:
            "JSX stands for JavaScript XML and allows you to write HTML-like syntax in JavaScript.",
        },
      ],
    },
    {
      attemptId: 2,
      quizId: 101,
      courseId: 1,
      score: 90,
      correctAnswers: 9,
      totalQuestions: 10,
      timeSpent: 600,
      status: "passed",
      date: "2024-06-27",
      userAnswers: {
        1: 1,
        2: 1,
        3: 0,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
      },
      questions: [
        {
          id: 1,
          question: "What is the primary purpose of React components?",
          options: [
            "To style web pages",
            "To create reusable UI elements",
            "To manage databases",
            "To handle server requests",
          ],
          correctAnswer: 1,
          explanation:
            "React components are primarily used to create reusable UI elements that can be composed together to build complex user interfaces.",
        },
        {
          id: 2,
          question: "Which hook is used to manage component state in React?",
          options: ["useEffect", "useState", "useContext", "useReducer"],
          correctAnswer: 1,
          explanation:
            "useState is the primary hook for managing local component state in functional React components.",
        },
        {
          id: 3,
          question: "What does JSX stand for?",
          options: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JavaScript Extension",
            "Java XML",
          ],
          correctAnswer: 0,
          explanation:
            "JSX stands for JavaScript XML and allows you to write HTML-like syntax in JavaScript.",
        },
      ],
    },
    {
      attemptId: 3,
      quizId: 102,
      courseId: 1,
      score: 78,
      correctAnswers: 9,
      totalQuestions: 12,
      timeSpent: 960,
      status: "passed",
      date: "2024-06-27",
      userAnswers: {
        1: 1,
        2: 0,
        3: 1,
        4: 1,
        5: 2,
        6: 1,
        7: 0,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
      },
      questions: [
        {
          id: 1,
          question: "What is the purpose of useEffect?",
          options: [
            "To manage state",
            "To handle side effects",
            "To create context",
            "To reduce components",
          ],
          correctAnswer: 1,
          explanation:
            "useEffect is used to handle side effects in functional components, such as fetching data or updating the DOM.",
        },
      ],
    },
    {
      attemptId: 4,
      quizId: 201,
      courseId: 2,
      score: 72,
      correctAnswers: 6,
      totalQuestions: 8,
      timeSpent: 600,
      status: "passed",
      date: "2024-06-25",
      userAnswers: { 1: 0, 2: 1, 3: 1, 4: 0, 5: 1, 6: 1, 7: 1, 8: 0 },
      questions: [
        {
          id: 1,
          question: "What is a DataFrame in Pandas?",
          options: [
            "A 2D data structure",
            "A 1D array",
            "A database table",
            "A machine learning model",
          ],
          correctAnswer: 0,
          explanation:
            "A DataFrame in Pandas is a 2D data structure used for data manipulation and analysis.",
        },
      ],
    },
  ];

  useEffect(() => {
    // Simulate API call (replace with actual API)
    const selectedResult = mockResults.find(
      (r) => r.attemptId === Number(attemptId)
    );
    if (selectedResult) {
      setResult(selectedResult);
      const course = courses.find((c) => c.id === selectedResult.courseId);
      if (course) {
        setCourseName(course.name);
        const quiz = course.availableQuizzes?.find(
          (q) => q.id === selectedResult.quizId
        );
        if (quiz) setQuizTitle(quiz.title);
      }
    }
    // Example API call:
    // fetch(`/api/quiz-results/${attemptId}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setResult(data);
    //     const course = courses.find(c => c.id === data.courseId);
    //     if (course) {
    //       setCourseName(course.name);
    //       const quiz = course.availableQuizzes?.find(q => q.id === data.quizId);
    //       if (quiz) setQuizTitle(quiz.title);
    //     }
    //   })
    //   .catch(err => console.error('Failed to fetch result:', err));
  }, [attemptId, courses]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!result) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/dashboard/result")}
            className="flex items-center text-gray-700 hover:text-gray-900 mb-4 transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to Results
          </button>
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Result not found
            </h3>
            <p className="text-gray-600">
              The requested quiz attempt could not be found.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/dashboard/result")}
          className="flex items-center text-gray-700 hover:text-gray-900 mb-4 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back to Results
        </button>
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {quizTitle}
              </h1>
              <p className="text-gray-600 text-sm">
                Course: {courseName} | Attempted on: {result.date}
              </p>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                result.status === "passed"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {result.status === "passed" ? "Passed" : "Failed"}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-indigo-600">
                {result.score}%
              </div>
              <div className="text-xs text-gray-500">Score</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-600">
                {result.correctAnswers}
              </div>
              <div className="text-xs text-gray-500">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-700">
                {result.totalQuestions}
              </div>
              <div className="text-xs text-gray-500">Total Questions</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-600">
                {formatTime(result.timeSpent)}
              </div>
              <div className="text-xs text-gray-500">Time Spent</div>
            </div>
          </div>
          <div className="space-y-4">
            {result.questions.map((question, index) => (
              <div key={question.id} className="border-t border-gray-200 pt-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-sm font-medium text-gray-900">
                    Question {index + 1}: {question.question}
                  </h4>
                  {result.userAnswers[question.id] ===
                  question.correctAnswer ? (
                    <CheckCircle size={16} className="text-green-500" />
                  ) : (
                    <XCircle size={16} className="text-red-500" />
                  )}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Your Answer: </span>
                    {question.options[result.userAnswers[question.id]] ||
                      "Not answered"}
                  </p>
                  <p>
                    <span className="font-medium">Correct Answer: </span>
                    {question.options[question.correctAnswer]}
                  </p>
                  <p className="mt-1 italic">{question.explanation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() =>
                navigate(`/quiz/${result.courseId}/${result.quizId}/start`)
              }
              className="px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center text-sm"
            >
              <RotateCcw size={14} className="mr-1" />
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizAttemptDetails;
