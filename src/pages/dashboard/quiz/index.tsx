import { COURSE_API } from "../../../api/resources";
import { useFetchData } from "../../../hook/useFetchData";
import CourseCard from "./courseCard";
import { getCourse } from "./data";

const Quiz = () => {
  const { data: quizData, loading } = useFetchData(COURSE_API + "/user");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* <div className="max-w-6xl mx-auto"> */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Quiz Dashboard
        </h1>
        <p className="text-gray-600">
          Select a course to view and take available quizzes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {getCourse(quizData)?.map((course: any) => (
          <CourseCard courseData={course} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Quiz;
