import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/operations"
import css from "./UserMenu.module.css"

export const UserMenu = () =>{
    const userName = useSelector(state=> state.auth.user.name)
    const dispatch = useDispatch()

    return(
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {userName}!</p>
            <button type="button" onClick={()=> dispatch(logOut())}>
                Logout
            </button>
        </div>
    )
}