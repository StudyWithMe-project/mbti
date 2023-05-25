import { UserActionState } from "../reducers/join";

// action 설정
export const joinAction = (data: UserActionState) => {
  return {
    type: "JOIN",
    data,
  };
};
