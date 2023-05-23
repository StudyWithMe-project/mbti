import React, { useCallback, useState } from "react";
import styled from "styled-components";
// import request from '../../utils/axios';
// import {joinAction} from '../../store/actions/join';

const Terms = () => {
  // const dispatch = useDispatch();

  /**
   * 가입 버튼 관련 state
   * @category 회원가입
   */
  const [isValid, setIsValid] = useState(false);

  /**
   * 체크박스 관련 배열
   * @category 회원가입
   */
  const checkBoxList = [
    { id: 0, title: "이용약관 (필수)" },
    { id: 1, title: "데이터 정책 (필수)" },
    { id: 2, title: "위치 기반 기능 (필수)" },
  ];

  /**
   * 체크박스 관련 배열 (체크된 아이템 배열)
   * @category 회원가입
   */
  const [checkItems, setCheckItems] = useState<number[]>([]);

  /**
   * 체크박스 선택 배열
   * @category 회원가입
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSingleCheck = (checked: any, id: number) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  /**
   * 체크박스 전체 선택
   * @category 회원가입
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAllCheck = (checked: any) => {
    if (checked) {
      const idArray: number[] = [];
      checkBoxList.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  /**
   * submit 버튼 관련
   * @category 회원가입
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Submit = useCallback((e: any) => {
    e.preventDefault();

    // const req = {
    //   phoneNumber: emailValue,
    //   realName: nameValue,
    //   password: pwValue,
    //   loginId: idValue,
    //   birthDate: pwValue,
    // };

    // request({
    //   method: 'POST',
    //   url: '/app/sign-up',
    //   data: req,
    // });

    // dispatch(joinAction({req}));
  }, []);

  return (
    <TermsStyled>
      <div className="item-wrap">
        <div className="terms-title">이용 약관에 동의</div>
        <div className="terms-desc">
          Tnovel은 회원님의 개인정보를 안전하게 보호합니다. <br /> 새 계정을
          만드려면 모든 약관에 동의하세요.
        </div>

        <div className="item-inner">
          <div className="item-inner-title">
            <label htmlFor="select-all" className="icon-checkbox-wrap">
              이용약관 3개에 모두 동의
              <input
                type="checkbox"
                id="select-all"
                className="icon-checkbox"
                name="select-all"
                onChange={(e) => handleAllCheck(e.target.checked)}
                // eslint-disable-next-line no-nested-ternary, no-unneeded-ternary
                checked={
                  checkItems.length === 0
                    ? false
                    : checkItems.length === checkBoxList.length
                    ? true
                    : false
                }
              />
            </label>
          </div>

          <div className="terms-item">
            {checkBoxList?.map((data, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <label
                key={index}
                htmlFor={`select-${data.id}`}
                className="icon-checkbox-wrap"
              >
                <div className="second-row">
                  {data.title}
                  <br />
                  <div
                    className="text-more"
                    // onClick={}
                  >
                    더 알아보기
                  </div>
                </div>
                <input
                  type="checkbox"
                  id={`select-${data.id}`}
                  className="icon-checkbox"
                  name={`select-${data.id}`}
                  onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                  // eslint-disable-next-line no-nested-ternary, no-unneeded-ternary
                  checked={checkItems.includes(data.id) ? true : false}
                />
              </label>
            ))}
          </div>
        </div>

        <button
          className={isValid ? "submit-btn" : "submit-btn-invalid"}
          type="submit"
          disabled={!isValid}
          onClick={Submit}
        >
          다음
        </button>

        <div className="back-btn">돌아가기</div>
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
    </TermsStyled>
  );
};

export default Terms;

const TermsStyled = styled.div`
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
    padding: 50px 30px 39px;
    border: 1px solid #cccccc;
  }

  .terms-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }

  .terms-desc {
    font-size: 14px;
    line-height: 22px;
  }

  .item-inner {
    margin-top: 32px;
    text-align: left;
    font-weight: 500;
    color: #101828;
  }

  .item-inner-title {
    margin-bottom: 7px;
    padding-bottom: 13px;
    border-bottom: 1px solid #cccccc;
  }

  .text-more {
    color: #2e90fa;
    cursor: pointer;
  }

  .item-mid-wrap {
    margin-top: 11px;
    padding: 36px 0;
    font-weight: 600;
    text-align: center;
    border: 1px solid #cccccc;
  }

  .item-bottom-title {
    margin: 20px 0 10px;
    font-weight: 500;
  }

  /* input, button */
  .terms-item {
    cursor: pointer;
  }

  .icon-checkbox-wrap {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    cursor: pointer;

    :last-child {
      margin-bottom: 0;
    }
  }

  .icon-checkbox {
    appearance: none;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:checked {
      background-image: url(/images/icon_checkbox.svg);
      background-size: 12px 9px;
      background-position: center 46%;
      background-repeat: no-repeat;
      background-color: #eff8ff;
      border: 1px solid #2e90fa;
    }
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

  .back-btn {
    margin-top: 10px;
    font-weight: 600;
    color: #2e90fa;
  }

  /* 이미지 */
  .google-dl {
    width: 135px;
  }

  .apple-dl {
    width: 120px;
    margin-left: 10px;
  }
`;
