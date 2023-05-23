/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

interface DateOfBirth {
  day: number | null;
  month: number | null;
  year: number | null;
}

const Birthday = () => {
  const userInfo = useSelector((state: any) => state.user);

  console.log(userInfo, "userInfo?????");

  /**
   * select 값 관련 state
   * @category 회원가입
   */
  const [monthSelect, setMonthSelect] = useState(3); // SelectBox 열려있는지
  const [daySelect, setDaySelect] = useState(15); // SelectBox 열려있는지
  const [yearSelect, setYearSelect] = useState(2023); // SelectBox 열려있는지

  /**
   * 최종 생년월일
   * @category 회원가입
   */
  // eslint-disable-next-line no-useless-concat
  const birthDate = `${yearSelect}` + `${monthSelect}` + `${daySelect}`;

  /**
   * select-option(ul-li) 클릭 event 관련 state
   * @category 회원가입
   */
  const [isMonthOpen, setIsMonthOpen] = useState(false); // SelectBox 열려있는지
  const [isDayOpen, setIsDayOpen] = useState(false); // SelectBox 열려있는지
  const [isYearOpen, setIsYearOpen] = useState(false); // SelectBox 열려있는지

  /**
   * select-option(ul-li) 클릭 event 관련 코드 (참조 dom)
   * @category 회원가입
   */
  const monthRef = useRef<any>();
  const dayRef = useRef<any>();
  const yearRef = useRef<any>();

  /**
   * Select Box 영역 외 클릭 시 닫히도록 클릭 event 관련 함수
   * @category 회원가입
   */
  const onClickMonth = (e: any) => {
    if (isMonthOpen && !monthRef.current.contains(e.target)) {
      setIsMonthOpen(false);
    }
  };

  /**
   * Select Box 영역 외 클릭 시 닫히도록 클릭 event 관련 hook
   * @category 회원가입
   */
  useEffect(() => {
    if (isMonthOpen) {
      document.addEventListener("mousedown", onClickMonth);
    }
    return () => {
      document.removeEventListener("mousedown", onClickMonth);
    };
  });

  /**
   * Select Box 영역 외 클릭 시 닫히도록 클릭 event 관련 함수
   * @category 회원가입
   */
  const onClickDay = (e: any) => {
    if (isDayOpen && !dayRef.current.contains(e.target)) {
      setIsDayOpen(false);
    }
  };

  /**
   * Select Box 영역 외 클릭 시 닫히도록 클릭 event 관련 hook
   * @category 회원가입
   */
  useEffect(() => {
    if (isDayOpen) {
      document.addEventListener("mousedown", onClickDay);
    }
    return () => {
      document.removeEventListener("mousedown", onClickDay);
    };
  });

  /**
   * Select Box 영역 외 클릭 시 닫히도록 클릭 event 관련 함수
   * @category 회원가입
   */
  const onClickYear = (e: any) => {
    if (isYearOpen && !yearRef.current.contains(e.target)) {
      setIsYearOpen(false);
    }
  };

  /**
   * Select Box 영역 외 클릭 시 닫히도록 클릭 event 관련 hook
   * @category 회원가입
   */
  useEffect(() => {
    if (isYearOpen) {
      document.addEventListener("mousedown", onClickYear);
    }
    return () => {
      document.removeEventListener("mousedown", onClickYear);
    };
  });

  /**
   * 가입 버튼 관련 state
   * @category 회원가입
   */
  const [isValid, setIsValid] = useState(false);

  /**
   * 년도 관련 함수
   * @category 회원가입
   * @return days // 1-31까지의 년도를 담은 배열(숫자) 반환
   */

  const days = new Array(31).fill(0).map((_, index) => index + 1);

  /**
   * 년도 관련 함수
   * @category 회원가입
   * @return years // 1919-2021까지의 년도를 담은 배열(숫자) 반환
   */
  const years = new Array(2021)
    .fill(0, 1918, 2021)
    .map((_, index) => index + 1);

  /**
   * 월 관련 함수
   * @category 회원가입
   * @return {value, label} 월을 담은 배열 반환
   */
  const months = new Array(12).fill(0).map((_, index) => index + 1);

  /**
   * select 관련 state
   * 일/월/년도
   * @category 회원가입
   */
  const [birthday, setBirthday] = useState<DateOfBirth>({
    day: null,
    month: null,
    year: null,
  });

  /**
   * select 관련 함수
   * @category 회원가입
   */
  const handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    field: keyof DateOfBirth
  ) => {
    setBirthday({ ...birthday, [field]: Number(e.target.innerText) || null });
  };

  /**
   * 가입버튼 관련 HOOK
   * @category 회원가입
   */
  useEffect(() => {
    if (birthday.year && birthday.year >= 2016 && birthday.year <= 2021) {
      setIsValid(false);
    } else if (
      birthday.year &&
      birthday.year >= 1919 &&
      birthday.year <= 2015
    ) {
      setIsValid(true);
    }
  }, [birthday]);

  /**
   * submit 버튼 관련
   * @category 회원가입
   */
  const Submit = useCallback((e: any) => {
    e.preventDefault();
  }, []);

  return (
    <BirthdayStyled>
      <div className="item-wrap">
        <div>
          <img className="item-img" src="/images/img_cake.png" alt="birthday" />
          <div className="item-title">생일추가</div>
          <div className="item-subtitle">공개 프로필에 포함되지 않습니다.</div>
          <div className="item-desc">왜 생일 정보를 입력해야 하나요?</div>
        </div>

        <div className="birth-dropdown">
          <button
            id="month"
            type="button"
            className="selectbox"
            ref={monthRef}
            onClick={(e: any) => {
              handleSelect(e, "month");
              setIsMonthOpen((prev) => !prev);
            }}
          >
            {monthSelect}
            <div className={isMonthOpen ? "list-wrap" : "none"}>
              {isMonthOpen &&
                months.map((month) => (
                  <div
                    className={
                      month === monthSelect ? "list-item-select" : "list-item"
                    }
                    key={month}
                    onClick={() => {
                      setMonthSelect(month);
                    }}
                  >
                    {month}
                  </div>
                ))}
            </div>
          </button>

          <button
            id="day"
            type="button"
            className="selectbox"
            // onChange={(e: any) => handleSelect(e, 'day')}
            ref={dayRef}
            onClick={(e: any) => {
              handleSelect(e, "day");
              setIsDayOpen((prev) => !prev);
            }}
          >
            {daySelect}
            <div className={isDayOpen ? "list-wrap" : "none"}>
              {isDayOpen &&
                days.map((day) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                  <div
                    className={
                      day === daySelect ? "list-item-select" : "list-item"
                    }
                    key={day}
                    onClick={() => {
                      setDaySelect(day);
                    }}
                  >
                    {day}
                  </div>
                ))}
            </div>
          </button>

          <button
            id="year"
            type="button"
            className="selectbox"
            ref={yearRef}
            onClick={(e: any) => {
              handleSelect(e, "year");
              setIsYearOpen((prev) => !prev);
            }}
          >
            {yearSelect}
            <div className={isYearOpen ? "list-wrap" : "none"}>
              {isYearOpen &&
                years.map((year) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                  <div
                    className={
                      year === yearSelect ? "list-item-select" : "list-item"
                    }
                    key={year}
                    onClick={() => {
                      setYearSelect(year);
                    }}
                  >
                    {year}
                  </div>
                ))}
            </div>
          </button>
        </div>

        <div className="birth-footer-desc">태어난 날짜를 입력해야합니다</div>

        <button
          onClick={Submit}
          className={isValid ? "submit-btn" : "submit-btn-invalid"}
          type="submit"
          disabled={!isValid}
        >
          가입
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
    </BirthdayStyled>
  );
};

export default Birthday;

const BirthdayStyled = styled.div`
  box-sizing: border-box;
  font-family: "SF Pro Display";
  font-style: normal;
  text-align: center;
  color: #7f7f7f;
  font-size: 16px;
  line-height: 24px;
  background: #ffffff;
  letter-spacing: -1px;

  .item-wrap {
    max-width: 446px;
    padding: 60px 48px 39px;
    border: 1px solid #cccccc;
  }

  .item-title {
    margin-top: 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #191919;
  }

  .item-subtitle {
    margin-top: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #7f7f7f;
  }

  .item-desc {
    margin-top: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #2e90fa;
  }

  .birth-dropdown {
    display: flex;
    column-gap: 10px;
    margin-top: 30px;
  }

  .birth-footer-desc {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #7f7f7f;
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

  /* select, button */
  .selectbox {
    position: relative;
    width: 101px;
    height: 44px;
    appearance: none;
    color: #7f7f7f;
    border: 1px solid #b2b2b2;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background: url(/images/icon_arrow.svg) no-repeat right 18px top 50%;
    list-style-type: none;

    .none {
      display: none;
    }

    .list-wrap {
      text-align: left;
      position: absolute;
      display: block;
      width: 98px;
      max-height: 442px;
      padding: 4px 0;
      background: #ffffff;
      border: 1px solid #e5e5e5;
      box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
        0px 4px 6px -2px rgba(16, 24, 40, 0.03);
      border-radius: 8px;
      top: -430%;
      left: 0;
      cursor: pointer;
      overflow: scroll;
      scrollbar-width: none;

      ::-webkit-scrollbar {
        display: none;
      }
    }

    .list-item {
      padding: 10px 0 10px 14px;
      cursor: pointer;

      :hover {
        background: #f6f6f6;
      }
    }

    .list-item-select {
      padding: 10px 0 10px 14px;
      cursor: pointer;
      background: url(/images/icon_check.svg), #f6f6f6;
      background-position: right 17px top 50%;
      background-size: 13.33px 9.17px;
      background-repeat: no-repeat;

      :hover {
        background: url(/images/icon_check.svg), #f6f6f6;
        background-position: right 17px top 50%;
        background-size: 13.33px 9.17px;
        background-repeat: no-repeat;
      }
    }

    :focus-visible {
      outline: none;
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
  .item-img {
    max-width: 238px;
  }

  .google-dl {
    width: 135px;
  }

  .apple-dl {
    width: 120px;
    margin-left: 10px;
  }
`;
