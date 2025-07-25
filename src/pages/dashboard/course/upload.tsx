import { COURSE_API } from "../../../api/resources";
import { useFetchData } from "../../../hook/useFetchData";
import { getCourse } from "./data";
import Select from "../../../component/form/selectInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { uploadSchema } from "../../../validation/course.validation";
import { CgSpinner } from "react-icons/cg";
import FileInput from "../../../component/form/fileInput";
import { useState } from "react";
import { useMakeRequest } from "../../../hook/useMakeRequest";

const UploadCourse = ({ refetch }: { refetch: () => void }) => {
  const { data, loading: loadingCourses } = useFetchData(COURSE_API + "/user");
  const [loading, setLoading] = useState<boolean>(false);
  const courses = getCourse(data);
  const makeRequest = useMakeRequest();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(uploadSchema),
  });
  const onSubmit = (data: any) => {
    setLoading(true);
    const payload = new FormData();
    if (data?.document && data.document.length > 0) {
      payload.append("document", data.document[0]);
    }
    payload.append("courseId", data?.name);
    makeRequest(
      COURSE_API + "/upload",
      "PUT",
      payload,
      (data) => {
        console.log(data);
        reset();
        refetch();
      },
      (error) => console.log(error),
      () => setLoading(false)
    );
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl p-6 w-full max-w-lg mx-4"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Upload Documents
        </h2>
      </div>

      <FileInput
        name="document"
        label="Upload Files"
        accept=".pdf,.doc,.docx"
        multiple={true}
        register={register}
        errors={errors}
      />

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Course
        </label>
        {!loadingCourses ? (
          <Select
            options={courses}
            errors={errors}
            register={register}
            name="name"
          />
        ) : (
          <div className="w-full flex items-center justify-center gap-5 p-2 border-2 rounded-sm">
            <p>Loading courses</p>
            <CgSpinner className="animate-spin" />
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-3 mt-6">
        <button
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {loading ? <CgSpinner className="animate-spin" /> : "Upload"}
        </button>
      </div>
    </form>
  );
};

export default UploadCourse;
