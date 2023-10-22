import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import css from "./LoginForm.module.css"

export const LoginForm = () =>{
    const dispath = useDispatch()
    const handleSubmit = evt =>{
        evt.preventDefault();
        const form = evt.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        dispath(logIn({email,password}))
        form.reset();
    }
    return(
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Email
                <input type="email" name="email" />
            </label>
            <label className={css.label}>
                Password
                <input type="password" name="password" />
             </label>
            <button type="submit">Log In</button>
        </form>
    )
}