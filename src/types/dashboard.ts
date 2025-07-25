export interface QuizAttempt {
  score: number;
  date: string;
  status: string;
  timeSpent: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizResult {
  attemptId: number;
  quizId: number;
  courseId: number;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
  status: string;
  date: string;
  userAnswers: { [questionId: number]: number };
  questions: Question[];
}

export interface Quiz {
  id: number;
  courseId: number;
  title: string;
  questions: number;
  timeLimit: number;
  difficulty: string;
  attempts: number;
  bestScore: number | null;
  lastScore: number | null;
  status: string;
  results?: QuizResult[];
}

export interface Course {
  id: number;
  name: string;
  description: string;
  category: string;
  documents?: number;
  students?: number;
  lastModified?: string;
  status?: string;
  thumbnail?: string | null;
  color: string;
  totalQuizzes?: number;
  completedQuizzes?: number;
  averageScore?: number | null;
  lastAttempt?: QuizAttempt | null;
  availableQuizzes?: Quiz[];
}
