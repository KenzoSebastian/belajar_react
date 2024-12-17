const Button = ({ children, classname = "bg-black" }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold text-white ${classname} rounded-md`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
