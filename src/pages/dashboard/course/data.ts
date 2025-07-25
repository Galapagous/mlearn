import { Label } from "recharts";

export const colorClasses = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
  indigo: "bg-indigo-500",
  pink: "bg-pink-500",
  yellow: "bg-yellow-500",
};

export const colors = [
  "blue",
  "green",
  "purple",
  "orange",
  "red",
  "indigo",
  "pink",
  "yellow",
];

export const getCourse = (data: any) => {
  return data?.map((course: any) => {
    return {
      id: course._id,
      label: course?.name,
      value: course?._id,
      documents: course?.documents?.length || 0,
      description: course?.description,
      color: course?.color,
    };
  });
};

export const getUserCourse = (data: any) => {
  const resData = data?.map((eachData: any) => {
    return {
      id: eachData?._id,
      name: eachData?.name,
      color: eachData?.color,
      label: eachData?.name,
      description: eachData?.description,
      lastModified: eachData?.lastModified,
      documents: eachData?.documents?.length || 0,
    };
  });
  return resData;
};
