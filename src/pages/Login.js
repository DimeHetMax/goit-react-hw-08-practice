import { Helmet } from "react-helmet";
import { LoginForm } from "components/LoginForm/LoginForm";
import css from "./form.module.css"
export const Login = () =>{
    return(
    <div className={css.formContainer}>
         <Helmet>
            <title>Login</title>
        </Helmet>
        <LoginForm/>
    </div>
    )  
}