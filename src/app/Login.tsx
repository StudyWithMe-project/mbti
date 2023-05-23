import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="login_page">
      <div className="login_titleWrap">
        <div className="head">
          <h1 style={{ margin: "5px" }}>
            <Link to="/">
              <img src={main_logo} alt="logo" width="300px;" height="75px;" />
            </Link>
          </h1>
          <br />
          <h5>Login with</h5>
        </div>
        <div className="log_btn">
          <button type="button" className="google">
            <img src={google} alt="google" />
          </button>
          <button type="button" className="kakao">
            <img src={kakao} alt="kakao" />
          </button>
          <button type="button" className="github">
            <img src={github} alt="github" />
          </button>
        </div>
        <div className="hr-sect ">OR</div>
        <br />
      </div>

      <div className="contentWrap">
        <div className="inputTitle"></div>

        <div className="inputWrap">
          <input type="text" ref={id} placeholder="ID" size="40" />
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle"></div>
        <div className="inputWrap">
          <input
            type="password"
            ref={password}
            placeholder="Password"
            size="40"
          />
        </div>

        <button
          className="bottomButton"
          type="submit"
          color="secondary"
          onClick={handleSubmit}
        >
          <div>Login</div>
        </button>

        <div className="nav">
          <Link to="/Signup" style={{ textDecoration: "none" }}>
            <button className="account">회원 가입</button>
          </Link>
          <Link to="/find_id" style={{ textDecoration: "none" }}>
            <button className="id">아이디 찾기</button>
          </Link>
          <Link to="/find_pw" style={{ textDecoration: "none" }}>
            <button className="pw">비밀번호 찾기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
