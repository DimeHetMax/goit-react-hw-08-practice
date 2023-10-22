import css from "./RegisterForm.module.css"
import { useDispatch} from "react-redux";
import { register} from "../../redux/auth/operations";

export const RegisterForm = () =>{
    const dispath = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)

        dispath(register({name,email,password}))
        form.reset();
      };
    return(
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    )
}