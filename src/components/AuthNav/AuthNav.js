import { NavLink } from "react-router-dom";
import styled from "styled-components";
import css from "./AuthNav.module.css"

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const AuthNav = () =>{
    return(
        <div>
            <StyledLink className={css.link} to="/register">
                Register
            </StyledLink>
            <StyledLink className={css.link} to="/login">
                Log In
            </StyledLink>
        </div>
    )
}
