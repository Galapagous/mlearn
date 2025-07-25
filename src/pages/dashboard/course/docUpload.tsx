import React, { useState } from "react";
import { colorClasses, colors } from "./data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { courseSchema } from "../../../validation/course.validation";
import Input from "../../../component/form/Input";
import Textarea from "../../../component/form/textarea";
import { useMakeRequest } from "../../../hook/useMakeRequest";
import { COURSE_API } from "../../../api/resources";
import { CgSpinner } from "react-icons/cg";

const DocUpload = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const makeRequest = useMakeRequest();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(courseSchema),
  });

  const handleColor = (color: string) => {
    setValue("color", color);
    setSelectedColor(color);
  };

  const onSubmit = (data: any) => {
    setLoading(true);
    makeRequest(
      COURSE_API + "/create",
      "POST",
      data,
      console.log,
      (error) => console.log(error),
      () => setLoading(false)
    );
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl p-6 w-full max-w-md mx-4"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Create New Course
        </h2>
      </div>

      <div className="space-y-4">
        <div className="mb-3">
          <Input
            type="text"
            errors={errors}
            name="name"
            register={register}
            placeholder="course name"
          />
        </div>
        <div>
          <Textarea
            errors={errors}
            register={register}
            name="description"
            placeholder="course description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Color Theme
          </label>
          <div className="flex space-x-2">
            {colors.map((color) => {
              return (
                <span
                  key={color}
                  onClick={() => handleColor(color)}
                  className={`w-8 h-8 rounded-full ${colorClasses[color]} ${
                    selectedColor === color
                      ? "ring-2 ring-offset-2 ring-gray-400"
                      : ""
                  }`}
                />
              );
            })}
          </div>
          {errors?.color && (
            <p className="mt-2 text-red-500">{errors?.color?.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-3 mt-6">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {loading ? <CgSpinner className="animate-spin" /> : "Create Course"}
        </button>
      </div>
    </form>
  );
};

export default DocUpload;
