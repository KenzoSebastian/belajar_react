import Input from "./Input";
import Label from "./label";

const InputForm = ({ label, name, type, placeholder }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} placeholder={placeholder} type={type}></Input>
    </div>
  );
};

export default InputForm;
