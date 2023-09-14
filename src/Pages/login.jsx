import AuthLayouth from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
const LoginPage = () => {
    return(
        <AuthLayouth title="Login">
            <FormLogin />
        </AuthLayouth>
    )
}
export default LoginPage;