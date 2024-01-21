import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./login.css";
import Link from "next/link";
const Login = () => {
  return (
    <div className="login">
      <div className="sign p-[40px] flex flex-col justify-center ">
        <div className="logo text-white text-center my-[50px]">Login</div>
        <div className="group_input mb-[10px]">
          <div className="group">
            <div className="textInputWrapper">
              <input
                placeholder="Type Here"
                type="text"
                className="textInput"
              />
            </div>
          </div>
          <div className="group">
            <div className="textInputWrapper">
              <input
                placeholder="Type Here"
                type="text"
                className="textInput"
              />
            </div>
          </div>
        </div>
        <div className="remember mb-[30px]">
          <label className="material-checkbox">
            <input type="checkbox" />
            <span className="checkmark" />
            Checkbox Label
          </label>
        </div>
        <div className="btn">
          <button className="w-full bg-[#2f80ed] py-[10px] text-white rounded-[16px]">
            Sign in
          </button>
        </div>
        <p className="my-[10px] text-white text-center">or</p>
        <div className="social mb-[40px] ">
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaGoogle />
            </li>
          </ul>
        </div>
        <div className="forgot text-white text-center">
          <p className="text-[12px]">
            Dont have an account? <Link href="">Sign up!</Link>
          </p>
          <p className="text-[12px]">Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
