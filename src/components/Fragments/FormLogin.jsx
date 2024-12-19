import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginfailed, setLoginfailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginfailed(res.response.data);
      }
    });
  };

  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="John Doe"
        name="username"
        ref={userNameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />

      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginfailed && <p className="text-red-600 text-center mt-5">{loginfailed}</p>}
    </form>
  );
};

export default FormLogin;
