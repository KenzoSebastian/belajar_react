import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type }) => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        <Navigation type={type} />
        {/* <p className="Text-sm mt-5 text-center">
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
        </p> */}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "Login") {
    return (
      <p className="Text-sm mt-5 text-center">
        Don't have an account? {" "}  
        <Link to="/register" className="text-blue-600 font-bold">
          Register
        </Link>
      </p>
    );
  }
  return (
    <p className="Text-sm mt-5 text-center">
      Already have an account? {" "}
      <Link to="/login" className="text-blue-600 font-bold">
        Login
      </Link>
    </p>
  );
};

export default AuthLayouts;
