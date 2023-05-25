"use client"; // This is a client component 👈🏽

import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { joinAction } from "../../store/actions/join";

const SignUp = () => {
  // const dispatch = useDispatch();

  /**
   * Email input 관련 state
   * @category 회원가입
   */
  const [emailValue, setEmailValue] = useState("");
  const inputEmailRef = useRef<HTMLInputElement>(null);

  /**
   * Name input 관련 state
   * @category 회원가입
   */
  const [nameValue, setNameValue] = useState("");
  const inputNameRef = useRef<HTMLInputElement>(null);

  /**
   * Id input 관련 state
   * @category 회원가입
   */

  const [idValue, setIdValue] = useState("");
  const inputIdRef = useRef<HTMLInputElement>(null);

  /**
   * Pw input 관련 state
   * @category 회원가입
   */
  const [pwValue, setPwValue] = useState("");
  const inputPwRef = useRef<HTMLInputElement>(null);

  /**
   * 비밀번호 숨기기 버튼 관련 state
   * @category 회원가입
   */
  const [showPw, setShowPw] = useState<boolean>(false);

  /**
   * 가입 버튼 관련 state
   * @category 회원가입
   */
  const [isValid, setIsValid] = useState(false);

  /**
   * Email input 관련 함수
   * @category 회원가입
   */
  const emailInput = () => {
    const inputElement = inputEmailRef.current;
    // 핸드폰 번호 형식 (정규식)
    const regex = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;

    if (!inputElement) return;

    const value = inputElement.value.replace(/[^\d]/g, "");
    setEmailValue(value);

    // 정규식에 어긋날시 className 제어
    if (!regex.test(value)) {
      inputElement.classList.remove("input-valid");
      inputElement.classList.add("input-invalid");
    } else {
      inputElement.classList.remove("input-invalid");
      inputElement.classList.add("input-valid");
    }
  };

  /**
   * name input 관련 함수
   * @category 회원가입
   */
  const nameInput = () => {
    const inputElement = inputNameRef.current;
    // 한글, 소문자, 영어, 숫자 (정규식) + 한글자 이상
    const regex = /^([가-힣a-z0-9]){2,}$/;

    if (!inputElement) return;

    // eslint-disable-next-line
    const value = inputElement.value.replace(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
      ""
    );
    setNameValue(value);

    // 정규식에 어긋날시 className 제어
    if (!regex.test(value)) {
      inputElement.classList.remove("input-valid");
      inputElement.classList.add("input-invalid");
    } else {
      inputElement.classList.remove("input-invalid");
      inputElement.classList.add("input-valid");
    }
  };

  /**
   * Id input 관련 함수
   * @category 회원가입
   */
  const idInput = () => {
    const inputElement = inputIdRef.current;
    // 소문자, 영어, 숫자 (정규식)
    const regex = /^[a-z0-9]+$/;

    if (!inputElement) return;

    // eslint-disable-next-line
    const value = inputElement.value.replace(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
      ""
    );
    setIdValue(value);

    // 정규식에 어긋날시 className 제어
    if (!regex.test(value)) {
      inputElement.classList.remove("input-valid");
      inputElement.classList.add("input-invalid");
    } else {
      inputElement.classList.remove("input-invalid");
      inputElement.classList.add("input-valid");
    }
  };

  /**
   * Pw input 관련 함수
   * @category 회원가입
   */
  const pwInput = () => {
    const inputElement = inputPwRef.current;
    // 영문 대소문자, 숫자 5~20자 (정규식)
    // eslint-disable-next-line
    const regex = /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]{5,20}$/;

    if (!inputElement) return;

    const value = inputElement.value.replace(/\s/g, "");
    setPwValue(value);

    // 정규식에 어긋날시 className 제어
    if (!regex.test(value)) {
      setIsValid(false);
      inputElement.classList.remove("input-valid-pw");
      inputElement.classList.add("input-invalid-pw");
    } else {
      setIsValid(true);
      inputElement.classList.remove("input-invalid-pw");
      inputElement.classList.add("input-valid-pw");
    }
  };

  /**
   * 비밀번호 숨기기 버튼 관련 함수
   * @category 회원가입
   */
  const toggleShowPw = () => {
    setShowPw(!showPw);
  };

  // const userData = useSelector(store => store.userData);

  /**
   * submit 버튼 관련
   * @category 회원가입
   */
  const Submit = useCallback((e: any) => {
    e.preventDefault();

    // dispatch(
    //   joinAction({
    //     realName: nameValue,
    //     password: pwValue,
    //     loginId: idValue,
    //     phoneNumber: emailValue,
    //   })
    // );
  }, []);

  return (
    <SignUpStyled>
      <div className="item-wrap">
        <div className="img-wrap">
          <img
            className="signup-logo"
            src="/images/signup_logo.png"
            alt="logo"
          />
        </div>
        <div className="item-title">
          친구들과 함께 여행 이야기를 공유하고 보세요.
        </div>
        <div className="kakao-wrap">
          <img
            className="kakaologin"
            src="/images/kakaologin.png"
            alt="kakao"
          />
          <div className="kakao-inner">
            <img
              className="kakaologo"
              src="/images/kakaologo.png"
              alt="kakao"
            />
            <span className="kakao-text">카카오 로그인</span>
          </div>
        </div>
        <div className="or">or</div>

        <form onSubmit={Submit}>
          <label htmlFor="input-email" className="icon-input">
            <img className="email" src="/images/icon_email.svg" alt="email" />
            <input
              required
              maxLength={20}
              ref={inputEmailRef}
              type="text"
              value={emailValue}
              onChange={emailInput}
              id="input-email"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
          </label>

          <label htmlFor="input-name" className="icon-input">
            <img className="email" src="/images/icon_name.svg" alt="email" />
            <input
              required
              ref={inputNameRef}
              value={nameValue}
              onChange={nameInput}
              type="text"
              id="input-name"
              placeholder="성명"
            />
          </label>

          <label htmlFor="input-id" className="icon-input">
            <img className="id" src="/images/icon_id.svg" alt="email" />
            <input
              required
              maxLength={20}
              ref={inputIdRef}
              value={idValue}
              onChange={idInput}
              type="text"
              id="input-id"
              placeholder="사용자 이름"
            />
          </label>

          <label htmlFor="input-pw" className="icon-input">
            <img className="pw" src="/images/icon_pw.svg" alt="email" />
            <input
              required
              minLength={5}
              maxLength={20}
              ref={inputPwRef}
              value={pwValue}
              onChange={pwInput}
              type={showPw ? "text" : "password"}
              id="input-pw"
              placeholder="비밀번호"
            />

            <button type="button" onClick={toggleShowPw} className="showpw-btn">
              {showPw ? "숨기기" : "비밀번호 표시"}
            </button>
          </label>

          <button
            className={isValid ? "submit-btn" : "submit-btn-invalid"}
            type="submit"
            disabled={!isValid}
          >
            가입
          </button>
        </form>
      </div>

      <div className="item-mid-wrap">
        계정이 있으신가요? <span className="text-blue"> 로그인 </span>
      </div>

      <div className="item-bottom-wrap">
        <div className="item-bottom-title">앱을 다운로드 하세요.</div>

        <img
          className="google-dl"
          src="/images/icon_dl_google.png"
          alt="googledownload"
        />
        <img
          className="apple-dl"
          src="/images/icon_dl_apple.png"
          alt="appledownload"
        />
      </div>
    </SignUpStyled>
  );
};

export default SignUp;

const SignUpStyled = styled.div`
  box-sizing: border-box;
  max-width: 446px;
  padding: 0 15px;
  font-family: "SF Pro Display";
  font-style: normal;
  text-align: center;
  color: #7f7f7f;
  font-size: 16px;
  line-height: 24px;
  background: #ffffff;
  letter-spacing: -1px;

  .item-wrap {
    max-width: 416px;
    padding: 50px 48px 39px;
    border: 1px solid #cccccc;

    .item-title {
      margin-top: 10px;
      font-weight: 700;
    }

    .kakao-wrap {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #2f1b1a;

      .kakao-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
      }

      .kakao-text {
        margin-left: 4px;
      }
    }

    .or {
      margin: 10px 0;
    }
  }

  .item-mid-wrap {
    margin-top: 11px;
    padding: 36px 0;
    font-weight: 600;
    text-align: center;
    border: 1px solid #cccccc;

    .text-blue {
      color: #2e90fa;
    }
  }

  .item-bottom-title {
    margin: 20px 0 10px;
    font-weight: 500;
  }

  /* input, button */
  input {
    box-sizing: border-box;
    display: block;
    margin: 0 auto 10px;
    padding: 10px;
    width: 320px;
    height: 50px;
    border: 1px solid #b2b2b2;
    border-radius: 30px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

    :last-of-type {
      margin: 0 auto;
    }

    :focus-visible {
      outline: none;
    }
  }

  .input-valid {
    background: url(/images/icon_valid.svg) no-repeat right 20px center / 20px;
  }

  .input-invalid {
    background: url(/images/icon_invalid.svg) no-repeat right 20px center / 20px;
  }

  .input-valid-pw {
    background: url(/images/icon_valid.svg) no-repeat right 100px center / 20px;
  }

  .input-invalid-pw {
    background: url(/images/icon_invalid.svg) no-repeat right 100px center /
      20px;
  }

  .icon-input {
    position: relative;
    display: inline-block;
    margin-bottom: 10px;

    :last-child {
      margin-bottom: 0;
    }

    img {
      position: absolute;
      left: 21px;
      top: 50%;
      transform: translateY(-50%);
    }

    :nth-of-type(1) img {
      width: 16.67px;
      height: 13.33px;
    }

    :nth-of-type(2) img {
      left: 22px;
      width: 15px;
      height: 16px;
    }

    :nth-of-type(3) img {
      width: 18.33px;
      height: 18.33px;
    }

    :nth-of-type(4) img {
      left: 22px;
      width: 16px;
      height: 17.67px;
    }
  }

  .icon-input input[type="text"],
  .icon-input input[type="password"] {
    padding-left: 46px; /* add some padding to the left of the input field */
  }

  .submit-btn {
    width: 320px;
    height: 44px;
    margin-top: 20px;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    background: #2e90fa;
    border-radius: 30px;
    border: none;
    cursor: pointer;
  }

  .submit-btn-invalid {
    width: 320px;
    height: 44px;
    margin-top: 20px;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    background: #b2ddff;
    border-radius: 30px;
    border: none;
  }

  .showpw-btn {
    position: absolute;
    display: inline-block;
    right: 17px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    font-weight: 600;
    color: #191919;
  }

  /* 이미지 */
  .img-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .signup-logo {
    max-width: 217px;
  }

  .kakaologin {
    max-width: 320px;
  }

  .kakaologo {
    width: 18px;
    height: 18px;
  }

  .google-dl {
    width: 135px;
  }

  .apple-dl {
    width: 120px;
    margin-left: 10px;
  }
`;
