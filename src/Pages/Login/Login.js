import React, { useState } from "react";
import "./Login.css";
import {
  PasswordValidation,
  emailValidation,
} from "../../Validations/Validations";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { LoginActions } from "../../Store/LoginSlice";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  // state values for form validatoin

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [formErrorLogic, setFormErrorLogic] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState(false);

  // form submition functoin
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(emailValue, " ", passwordValue);
    if (!emailValidation(emailValue)[0]) {
      // console.log(emailValidation(emailValue)[1]);

      if (!formErrorLogic) {
        setFormErrorLogic(true);
      }
      setFormErrorMessage(emailValidation(emailValue)[1]);

      return;
    }

    if (!PasswordValidation(passwordValue)[0]) {
      if (!formErrorLogic) {
        setFormErrorLogic(true);
      }
      setFormErrorMessage(PasswordValidation(passwordValue)[1]);

      return;
    }

    setFormErrorLogic(false);
    // props.logginState(true);
    dispatch(LoginActions.setStatus({ logic: true }));
    navigation("/product");
  };

  // input value handling functions

  const emailHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const passwordHandler = (e) => {
    setPasswordValue(e.target.value);
  };
  return (
    <div className="login_main">
      <form className="login_form" onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="email"
          placeholder="email"
          className="LF_input"
          onChange={emailHandler}
          value={emailValue}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="LF_input"
          onChange={passwordHandler}
          value={passwordValue}
        />
        <button type="submit" className="LF_button">
          {" "}
          Login
        </button>
      </form>

      {formErrorLogic && <span>{formErrorMessage}</span>}
    </div>
  );
};

export default Login;
