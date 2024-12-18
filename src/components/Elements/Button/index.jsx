const Button = ({
  children,
  classname = "bg-black",
  onClick = () => {},
  type = "button",
}) => {
  return (
    <button
      className={`h-10 px-6 font-semibold text-white ${classname} rounded-md`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
