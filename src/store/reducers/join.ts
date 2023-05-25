// 초기 상태값 설정
const initialState = {
  user: {
    realName: "",
    password: "",
    loginId: "",
    birthDate: "",
    phoneNumber: "",
  },
};

export enum Action {
  JOINDATA = "JOINDATA",
  INITDATA = "INITDATA",
}

export type UserAction =
  | { type: Action.JOINDATA; data: UserActionState }
  | { type: Action.INITDATA };

export interface UserActionState {
  phoneNumber: string;
  realName: string;
  loginId: string;
  password: string;
  birthDate?: string;
}

// 리듀서 설정
// eslint-disable-next-line default-param-last
const JoinReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case Action.JOINDATA: {
      return {
        ...state,
        user: {
          ...state.user,
          phoneNumber: action.data.phoneNumber,
          realName: action.data.realName,
          loginId: action.data.loginId,
          password: action.data.password,
          birthDate: action.data.birthDate,
        },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default JoinReducer;
