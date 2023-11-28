import { Helmet } from "react-helmet";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import css from "./form.module.css"

export const Register = () =>{
    return(
        <div className={css.formContainer}>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm/>
        </div>
    )
}