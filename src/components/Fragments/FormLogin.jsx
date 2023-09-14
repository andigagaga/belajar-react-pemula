import InputForm from "../Elements/Input/Index";
import ButtonBlack from "../Elements/Button";

const FormLogin = () => {
    return(
        <form action="" className="mt-5">
          <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"></InputForm>
          <InputForm label="Password" type="password" placeholder="******" name="password"></InputForm>
          <ButtonBlack>Login</ButtonBlack>
        </form>
    )
}
export default FormLogin;