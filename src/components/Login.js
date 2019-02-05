import React from "react";
import PropTypes from "prop-types";
import { Translatable } from "../multilingual/Translatable";

const Login = props => (
    <nav className="login">
    <p><Translatable text={{
        vi: "Đăng nhập",
        en: "Login"    }}/>
    </p>
    <button className="facebook"
    onClick={()=>props.authenticate("Facebook")}>
    <Translatable text={{
        vi: "Đăng nhập qua Facebook",
        en: "Login with Facebook"    }}/></button>

<button className="github"
    onClick={()=>props.authenticate("Github")}>
    <Translatable text={{
        vi: "Đăng nhập qua Github",
        en: "Login with Github"    }}/></button>
    </nav>
);

export default Login;