import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  const fullNameRef = useRef(null);

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);
  
  return (
    <form>
      <InputForm
        label="Fullname"
        type="Text"
        placeholder="Insert your name here..."
        name="fullname"
        ref={fullNameRef}
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="*****"
        name="confirmPassword"
      />
    
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
