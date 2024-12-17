import FormRegister from "../components/Fragments/formRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister/>
    </AuthLayouts>
  );
};

export default RegisterPage;
