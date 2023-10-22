// import { lazy } from "react";
import { Route,Routes} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/selector";
import { Layout } from "./Layout";
import { Home } from "pages/Home";
import { Contacts } from "pages/Contacts";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import "../index.css"
import { useEffect } from "react";

// const HomePage = lazy(()=> import('../pages/Home'))
// const ContactsPage = lazy(()=> import('../pages/Contacts'))
// const LoginPage = lazy(()=> import('../pages/Login'))
// const RegisterPage = lazy(()=> import('../pages/Register'))


export const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    useEffect(()=>{
        dispatch(refreshUser())
    },[dispatch])
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/Contacts" element={<Contacts/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
          </Route>
      </Routes>
    );
}