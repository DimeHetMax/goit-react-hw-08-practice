import { useSelector } from "react-redux";
import { Navigation } from "components/Navigation/Navigation";
import { selectIsLoggedIn } from "redux/auth/selector";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";

import css from "./AppBar.module.css"
export const AppBar = () =>{
    const isLogedIn = useSelector(selectIsLoggedIn)
    return(
        <header className={css.header}>
            <Navigation/>
            {isLogedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}