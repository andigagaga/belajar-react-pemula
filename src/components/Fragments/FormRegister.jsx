import InputForm from "../Elements/Input/Index";
import ButtonBlack from "../Elements/Button";

const FormRegister = () => {
    return(
        <form action="" className="mt-5">
        <InputForm label="FullName" type="text" placeholder="insert your name here..." name="email"></InputForm>
          <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"></InputForm>
          <InputForm label="Password" type="password" placeholder="******" name="password"></InputForm>
          <InputForm label="ConfirmPassword" type="password" placeholder="******" name="password"></InputForm>
          <ButtonBlack>Register</ButtonBlack>
        </form>
    )
}
export default FormRegister;