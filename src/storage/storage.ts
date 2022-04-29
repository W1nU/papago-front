import { atom, RecoilState } from "recoil";

export interface IState {
  userEmail: RecoilState<string>;
  userName: RecoilState<string>;
}

const storage: IState = {
  userEmail: atom({
    key: "userEmail",
    default: "jsw9808@gmail.com",
  }),
  userName: atom({
    key: "userName",
    default: "",
  }),
};

export default storage;
