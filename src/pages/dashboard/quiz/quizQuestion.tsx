import { ChevronLeft, ChevronRight, Clock, Flag } from "lucide-react";
import { formatTime, getQuestionData } from "./data";
import { useEffect, useState } from "react";
import { useFetchData } from "../../../hook/useFetchData";
import { QUIZ_API, RESULT_API } from "../../../api/resources";
import { useParams } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import { useMakeRequest } from "../../../hook/useMakeRequest";

const QuizQuestion = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({});
  const makeRequest = useMakeRequest();
  const [loading, setLoading] = useState(false);

  const { quizId } = useParams();

  const { data, loading: dataLoading } = useFetchData<any>(
    QUIZ_API + `/question/${quizId}`
  );

  const sampleQuestions = getQuestionData(data);

  // console.log("ques -->", sampleQuestions);

  let question: any = {};
  if (!loading && sampleQuestions?.length)
    question = sampleQuestions[currentQuestion];

  useEffect(() => {
    if (timeLeft > 0 && quizStarted && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && quizStarted) {
      handleQuizSubmit();
    }
  }, [timeLeft, quizStarted, showResults]);

  const handleAnswerSelect = (answerId: string, index: number) => {
    setAnswers((prev) => ({ ...prev, [answerId]: index }));
  };

  const nextQuestion = () => {
    if (currentQuestion < sampleQuestions?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuizSubmit = () => {
    setLoading(true);
    const payload = {
      courseId: quizId,
      result: answers,
    };
    makeRequest(
      RESULT_API,
      "POST",
      payload,
      (data) => console.log(data),
      (error) => console.log(error),
      () => {
        setLoading(false);
      }
    );
  };

  if (dataLoading) return <CgSpinner className="animate-spin" />;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 w-2/3 mx-auto mt-20">
      <div className="mb-6 ">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {questionIndex + 1} of {sampleQuestions?.length}
          </span>
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                timeLeft < 300
                  ? "bg-red-100 text-red-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              <Clock size={14} className="mr-1" />
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {question?.question}
        </h2>
      </div>

      <div className="space-y-3 mb-8">
        {question?.options?.map((option: any, index: number) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(question?.id, index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
              answers[question.id] === index
                ? "border-blue-500 bg-blue-50 text-blue-900"
                : "border-gray-200 hover:border-gray-300 bg-white"
            }`}
          >
            <div className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                  answers[question.id] === index
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {answers[question.id] === index && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-base">{option}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            currentQuestion === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <ChevronLeft size={16} className="mr-1" />
          Previous
        </button>

        <div className="flex space-x-2">
          {sampleQuestions?.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                index === currentQuestion
                  ? "bg-blue-600 text-white"
                  : answers[sampleQuestions[index].id] !== undefined
                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {currentQuestion === sampleQuestions?.length - 1 ? (
          <button
            onClick={handleQuizSubmit}
            className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            {loading ? (
              <CgSpinner className="animate-spin" />
            ) : (
              <div>
                <Flag size={16} className="mr-2" />
                Submit Quiz
              </div>
            )}
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next
            <ChevronRight size={16} className="ml-1" />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
