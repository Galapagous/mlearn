import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Home } from "lucide-react";

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md mx-auto text-center">
        <AlertCircle size={64} className="text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
        >
          <Home size={16} className="mr-2" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
