import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  type Course,
  type Quiz,
  type QuizResult,
} from "../../../types/dashboard";
import {
  Search,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Clock,
  ChevronLeft,
  Play,
  RotateCcw,
  Target,
  AlertCircle,
  BarChart2,
  CheckCircle,
} from "lucide-react";
import { courses } from "./data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface QuizResultsProps {
  courses: Course[];
}

const QuizResults = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<number | "all">(
    "all"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedQuizzes, setExpandedQuizzes] = useState<{
    [quizId: number]: boolean;
  }>({});

  // Mock quiz data with results (replace with API call)
  const mockQuizzes: Quiz[] = [
    {
      id: 101,
      courseId: 1,
      title: "React Components & Props",
      questions: 10,
      timeLimit: 15,
      difficulty: "Easy",
      attempts: 2,
      bestScore: 90,
      lastScore: 85,
      status: "completed",
      results: [
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
                "React components are primarily used to create reusable UI elements.",
            },
            {
              id: 2,
              question:
                "Which hook is used to manage component state in React?",
              options: ["useEffect", "useState", "useContext", "useReducer"],
              correctAnswer: 1,
              explanation:
                "useState is the primary hook for managing local component state.",
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
              explanation: "JSX stands for JavaScript XML.",
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
          questions: [],
        },
      ],
    },
    {
      id: 102,
      courseId: 1,
      title: "State Management & Hooks",
      questions: 12,
      timeLimit: 20,
      difficulty: "Medium",
      attempts: 1,
      bestScore: 78,
      lastScore: 78,
      status: "completed",
      results: [
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
                "useEffect is used to handle side effects in functional components.",
            },
          ],
        },
      ],
    },
    {
      id: 103,
      courseId: 1,
      title: "Advanced Patterns",
      questions: 15,
      timeLimit: 25,
      difficulty: "Hard",
      attempts: 0,
      bestScore: null,
      lastScore: null,
      status: "not_started",
    },
    {
      id: 201,
      courseId: 2,
      title: "Python Basics for Data Science",
      questions: 8,
      timeLimit: 12,
      difficulty: "Easy",
      attempts: 1,
      bestScore: 72,
      lastScore: 72,
      status: "completed",
      results: [
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
                "A DataFrame in Pandas is a 2D data structure used for data manipulation.",
            },
          ],
        },
      ],
    },
    {
      id: 202,
      courseId: 2,
      title: "Pandas & NumPy",
      questions: 14,
      timeLimit: 22,
      difficulty: "Medium",
      attempts: 0,
      bestScore: null,
      lastScore: null,
      status: "not_started",
    },
    {
      id: 301,
      courseId: 3,
      title: "Closures & Scope",
      questions: 10,
      timeLimit: 18,
      difficulty: "Medium",
      attempts: 0,
      bestScore: null,
      lastScore: null,
      status: "not_started",
    },
    {
      id: 302,
      courseId: 3,
      title: "Async Programming",
      questions: 12,
      timeLimit: 20,
      difficulty: "Hard",
      attempts: 0,
      bestScore: null,
      lastScore: null,
      status: "not_started",
    },
    {
      id: 401,
      courseId: 4,
      title: "Database Schema Quiz",
      questions: 8,
      timeLimit: 15,
      difficulty: "Medium",
      attempts: 0,
      bestScore: null,
      lastScore: null,
      status: "not_started",
    },
  ];

  useEffect(() => {
    // Simulate API call (replace with actual API)
    setQuizzes(mockQuizzes);
    // Example API call:
    // fetch('/api/quizzes')
    // //   .then(res => res.json())
    // //   .then(data => setQuizzes(data))
    // //   .catch(err => console.error('Failed to fetch quizzes:', err));
  }, []);

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesCourse =
      selectedCourseId === "all" || quiz.courseId === selectedCourseId;
    const matchesSearch = quiz.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCourse && matchesSearch;
  });

  const toggleQuiz = (quizId: number) => {
    setExpandedQuizzes((prev) => ({
      ...prev,
      [quizId]: !prev[quizId],
    }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-50";
      case "Medium":
        return "text-yellow-600 bg-yellow-50";
      case "Hard":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={16} className="text-green-500" />;
      case "not_started":
        return <Play size={16} className="text-blue-500" />;
      default:
        return <AlertCircle size={16} className="text-yellow-500" />;
    }
  };

  const getScoreChartData = (results: QuizResult[] | undefined) => {
    if (!results || results.length === 0) return null;
    return {
      labels: results.map((_, index) => `Attempt ${index + 1}`),
      datasets: [
        {
          label: "Score (%)",
          data: results.map((result) => result.score),
          borderColor: "rgba(59, 130, 246, 0.8)", // Blue-500
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.4,
        },
      ],
    };
  };

  const getCorrectAnswersChartData = (results: QuizResult[] | undefined) => {
    if (!results || results.length === 0) return null;
    return {
      labels: results.map((_, index) => `Attempt ${index + 1}`),
      datasets: [
        {
          label: "Correct Answers",
          data: results.map((result) => result.correctAnswers),
          backgroundColor: "rgba(34, 197, 94, 0.6)", // Green-500
        },
        {
          label: "Incorrect Answers",
          data: results.map(
            (result) => result.totalQuestions - result.correctAnswers
          ),
          backgroundColor: "rgba(239, 68, 68, 0.6)", // Red-500
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: { display: true, text: "Score (%)" },
      },
    },
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Score Trend" },
    },
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Number of Questions" },
      },
    },
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Correct vs Incorrect Answers" },
    },
  };

  const groupedQuizzes = courses.reduce((acc, course) => {
    const courseQuizzes = filteredQuizzes.filter(
      (quiz) => quiz.courseId === course.id
    );
    if (courseQuizzes.length > 0) {
      acc.push({ course, quizzes: courseQuizzes });
    }
    return acc;
  }, [] as { course: Course; quizzes: Quiz[] }[]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => navigate("/courses")}
            className="flex items-center text-gray-700 hover:text-gray-900 mb-4 transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to Courses
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Quiz Performance Dashboard
          </h1>
          <p className="text-gray-600">
            View quizzes and analyze your performance with charts
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-64 bg-white"
              />
            </div>
            <div className="relative">
              <select
                value={selectedCourseId}
                onChange={(e) =>
                  setSelectedCourseId(
                    e.target.value === "all" ? "all" : Number(e.target.value)
                  )
                }
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none pr-10"
              >
                <option value="all">All Courses</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>

        {groupedQuizzes.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No quizzes found
            </h3>
            <p className="text-gray-600">
              Select a course or adjust your search criteria
            </p>
          </div>
        ) : (
          groupedQuizzes.map(({ course, quizzes }) => (
            <div key={course.id} className="mb-8">
              <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br from-${course.color}-400 to-${course.color}-500 rounded-md flex items-center justify-center`}
                  >
                    <BookOpen size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {course.name}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {course.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-md font-semibold text-gray-900">
                    {course.completedQuizzes}/{course.totalQuizzes}
                  </div>
                  <div className="text-xs text-gray-500">Quizzes Completed</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900 text-md">
                        {quiz.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(quiz.status)}
                        <button
                          onClick={() => toggleQuiz(quiz.id)}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {expandedQuizzes[quiz.id] ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Target size={12} className="mr-1" />
                        {quiz.questions} questions
                      </span>
                      <span className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {quiz.timeLimit} min
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                          quiz.difficulty
                        )}`}
                      >
                        {quiz.difficulty}
                      </span>
                    </div>
                    {quiz.attempts > 0 && (
                      <div className="bg-gray-50 rounded-md p-2 mb-3 text-xs">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <span className="text-gray-600">Attempts:</span>
                            <span className="font-medium ml-1">
                              {quiz.attempts}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Best Score:</span>
                            <span className="font-medium ml-1 text-green-600">
                              {quiz.bestScore}%
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Last Score:</span>
                            <span className="font-medium ml-1">
                              {quiz.lastScore}%
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex space-x-2">
                      <button
                        onClick={() =>
                          navigate(
                            `/quiz/${quiz.courseId}/${quiz.id}/${
                              quiz.status === "not_started"
                                ? "start"
                                : "continue"
                            }`
                          )
                        }
                        className="flex-1 py-1.5 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition-colors flex items-center justify-center"
                      >
                        {quiz.status === "not_started" ? (
                          <>
                            <Play size={14} className="mr-1" />
                            Start
                          </>
                        ) : (
                          <>
                            <RotateCcw size={14} className="mr-1" />
                            Retake
                          </>
                        )}
                      </button>
                      {quiz.attempts > 0 && (
                        <button
                          onClick={() =>
                            navigate(
                              `/dashboard/result/attempt/${
                                quiz.results![0].attemptId
                              }`
                            )
                          }
                          className="flex-1 py-1.5 rounded-md bg-gray-600 text-white text-sm hover:bg-gray-700 transition-colors flex items-center justify-center"
                        >
                          <BarChart2 size={14} className="mr-1" />
                          View Details
                        </button>
                      )}
                    </div>
                    {expandedQuizzes[quiz.id] &&
                      quiz.results &&
                      quiz.results.length > 0 && (
                        <div className="mt-4 space-y-4">
                          <div className="h-48">
                            <Line
                              data={getScoreChartData(quiz.results)!}
                              options={chartOptions}
                            />
                          </div>
                          <div className="h-48">
                            <Bar
                              data={getCorrectAnswersChartData(quiz.results)!}
                              options={barChartOptions}
                            />
                          </div>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QuizResults;
