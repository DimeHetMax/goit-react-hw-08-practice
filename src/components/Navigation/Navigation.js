import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectIsLoggedIn } from "redux/auth/selector";
import css from "./Navigation.module.css"

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const Navigation = () =>{
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return(
        <nav>
            <StyledLink className={css.link} to="/">
                Home
            </StyledLink>
            {isLoggedIn && <StyledLink className={css.link} to="/Contacts">
                Contacts
            </StyledLink>}
        </nav>
    )
}