import { forwardRef } from "react";
import Input from "./Input";
import Label from "./label";

const InputForm = forwardRef(({ label, name, type, placeholder}, ref) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        ref={ref}
      ></Input>
    </div>
  );
});

export default InputForm;
