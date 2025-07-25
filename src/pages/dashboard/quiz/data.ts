export const getCourse = (data: any) => {
  const result = data?.map((eachData: any) => {
    return {
      id: eachData?._id,
      name: eachData?.name,
      description: eachData?.description,
      color: eachData?.color,
      totalQuizzes: 3,
      completedQuizzes: 2,
      averageScore: 85,
      lastAttempt: {
        date: "2024-06-28",
        score: 85,
        status: "passed",
        timeSpent: "12 minutes",
      },
      availableQuizzes: [
        {
          id: 101,
          title: "React Components & Props",
          questions: 10,
          timeLimit: 15,
          difficulty: "Easy",
          attempts: 2,
          bestScore: 90,
          lastScore: 85,
          status: "completed",
        },
        {
          id: 102,
          title: "State Management & Hooks",
          questions: 12,
          timeLimit: 20,
          difficulty: "Medium",
          attempts: 1,
          bestScore: 78,
          lastScore: 78,
          status: "completed",
        },
        {
          id: 103,
          title: "Advanced Patterns",
          questions: 15,
          timeLimit: 25,
          difficulty: "Hard",
          attempts: 0,
          bestScore: null,
          lastScore: null,
          status: "not_started",
        },
      ],
    };
  });
  return result;
};

export const sampleQuestions = [
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
];

export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export const colorClasses = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  purple: "from-purple-500 to-purple-600",
  orange: "from-orange-500 to-orange-600",
  pink: "from-pink-500 to-pink-600",
};

export const getQuestionData = (data: any) => {
  const result = data?.map((questData: any) => {
    return {
      id: questData?._id,
      options: questData?.options,
      question: questData?.question,
    };
  });
  return result;
};
