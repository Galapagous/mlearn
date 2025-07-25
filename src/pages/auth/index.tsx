import { useContext, useState, useEffect } from "react";
import Background1 from "../../assets/image/about1.jpeg";
import Background2 from "../../assets/image/about4.jpeg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../validation/auth.validation";
import { useMakeRequest } from "../../hook/useMakeRequest";
import { SIGNUP_API } from "../../api/resources";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Input from "../../component/form/Input";
import { LogoIcon } from "../../component/svg/icon";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const makeRequest = useMakeRequest();
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const { setLoginStatus, setUserInfo } = useContext(AppContext);

  const toggleMode = () => {
    setIsTransitioning(true);
    setIsSignUp((prev) => !prev);
    reset();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [isSignUp]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isSignUp ? registerSchema : loginSchema),
  });

  useEffect(() => {
    reset();
  }, [isSignUp, reset]);

  const onSubmit = (data: any) => {
    setIsloading(true);

    const payload = isSignUp
      ? data
      : { email: data?.email, password: data?.password };

    const endpoint = isSignUp ? "/register" : "/login";

    const handleSuccess = (data: any) => {
      localStorage.setItem("_ml_token", data?.token);
      setLoginStatus(true);
      setUserInfo({ fullName: data?.fullName });
      navigate("/dashboard");
    };

    makeRequest(
      SIGNUP_API + endpoint,
      "POST",
      payload,
      (data) => {
        isSignUp ? setIsSignUp(!isSignUp) : handleSuccess(data);
      },
      (error) => {
        console.log("error", error);
      },
      () => {
        setIsloading(false);
      }
    );
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-neutral-50 to-gray-100 p-4">
      <div
        className={`w-full max-w-6xl bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl flex flex-col-reverse md:flex-row transition-all duration-700 border border-gray-100 ${
          isTransitioning ? "filter blur-sm scale-95" : "scale-100"
        }`}
      >
        {/* Form Side */}
        <div
          className={`w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform ${
            isSignUp
              ? "md:translate-x-full opacity-100"
              : "md:translate-x-0 opacity-100"
          }`}
        >
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LogoIcon />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="text-gray-500 text-base md:text-lg">
                {isSignUp
                  ? "Start your learning journey today"
                  : "Sign in to continue your journey"}
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {isSignUp && (
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  register={register}
                  errors={errors}
                />
              )}
              <Input
                type="email"
                placeholder="Email"
                register={register}
                errors={errors}
                name="email"
              />
              <Input
                type="password"
                placeholder="Password"
                register={register}
                errors={errors}
                name="password"
              />
              {isSignUp && (
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  register={register}
                  errors={errors}
                />
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black hover:shadow-lg hover:scale-105 active:scale-95"
                }`}
              >
                {isLoading ? (
                  <CgSpinner className="animate-spin text-2xl" />
                ) : (
                  <span className="flex items-center gap-2">
                    {isSignUp ? "Create Account" : "Sign In"}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-500">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  onClick={toggleMode}
                  className="text-gray-800 hover:text-black font-semibold underline-offset-4 hover:underline transition-all duration-200"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Image + Description Side */}
        <div
          className={`w-full md:w-1/2 relative flex flex-col items-center justify-center p-6 md:p-12 transition-all duration-700 ease-in-out transform ${
            isSignUp
              ? "md:-translate-x-full opacity-100"
              : "md:translate-x-0 opacity-100"
          }`}
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20"></div>
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="mb-8 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-500/10 to-gray-800/10 rounded-3xl blur-xl"></div>
              <img
                src={isSignUp ? Background1 : Background2}
                alt="Auth illustration"
                className="relative w-full h-60 md:h-80 object-cover rounded-3xl shadow-2xl transition-all duration-700 ease-in-out"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                {isSignUp
                  ? "Join the Mlearn community"
                  : "Welcome back to Mlearn"}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto">
                {isSignUp
                  ? "Sign up and unlock powerful tools to enhance your learning journey with personalized experiences."
                  : "Sign in to continue exploring new ways to learn and grow with our advanced platform."}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {[
                  "Interactive Learning",
                  "AI-Powered",
                  "Progress Tracking",
                ].map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg border border-gray-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
