import { useState } from "react";
import { FolderPlus, Upload, Search, Grid, List } from "lucide-react";
import UploadCourse from "./upload";
import Modal from "../../../component/common/modal";
import DocUpload from "./docUpload";
import { useFetchData } from "../../../hook/useFetchData";
import { COURSE_API } from "../../../api/resources";
import CourseCard from "../../../component/course/courseCard";
import { getUserCourse } from "./data";

const Course = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const { data, loading, refetch } = useFetchData(COURSE_API + "/user");
  const result = getUserCourse(data);

  const handleDragOver = (e: any) => {
    alert("drag course");
  };

  const handleDrop = (e: any) => {
    alert("drop course");
  };

  if (loading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h1>Loadind ....</h1>
      </div>
    );

  return (
    <div
      className="p-6 bg-gray-50 min-h-screen"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Course Management
            </h1>
            <p className="text-gray-600 mt-1">
              Create, organize, and manage your course content
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowUploadModal(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Upload size={20} className="mr-2" />
              Upload Files
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FolderPlus size={20} className="mr-2" />
              New Course
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Course Grid/List */}
      <div
        className={`${
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
        }`}
      >
        {Array.isArray(data) && result
          ? result?.map((course: any) => {
              return <CourseCard course={course} />;
            })
          : null}
      </div>

      {/* Create Course Modal */}
      <Modal
        open={showCreateModal}
        handleClose={() => setShowCreateModal(false)}
        width="xl"
      >
        <DocUpload />
      </Modal>

      {/* Upload Modal */}
      <Modal
        open={showUploadModal}
        handleClose={() => setShowUploadModal(false)}
        width="xl"
      >
        <UploadCourse refetch={refetch} />
      </Modal>
    </div>
  );
};

export default Course;
