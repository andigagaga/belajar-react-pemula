import AuthLayouth from "../components/Layouts/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";
const RegisterPage = () => {
    return(
        <AuthLayouth title="Register">
            <FormRegister></FormRegister>
        </AuthLayouth>
    )
}
export default RegisterPage;