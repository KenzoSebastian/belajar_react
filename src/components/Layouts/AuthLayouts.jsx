import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = ({ children, title, type }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        <p className="Text-sm mt-5 text-center">
          {type === "Login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "Login" && (
            <Link to="/register" className="text-blue-600 font-bold">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-600 font-bold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

// bisa pake navigation sesudah children
const Navigation = ({ type }) => {
  if (type === "Login") {
    return (
      <p className="Text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-bold">
          Register
        </Link>
      </p>
    );
  }
  return (
    <p className="Text-sm mt-5 text-center">
      Already have an account?{" "}
      <Link to="/login" className="text-blue-600 font-bold">
        Login
      </Link>
    </p>
  );
};

export default AuthLayouts;
