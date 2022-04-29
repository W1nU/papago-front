import { atom, RecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface IPost {
  id: number;
  title: string;
  content: string;
  hostEmail: string;
  images: string[];
  fromDate: Date;
  toDate: Date;
  postNumber: string;
  address: string;
  detailedAddress: string;
  latitude: string;
  longitude: string;
  limit: number; // 최대 참가 가능 인원 수
}

export interface IUser {
  email: string;
  password: string;
  name?: string;
}

interface IUserWrap {
  [key: string]: IUser; // key값은 email
}
export interface IReservation {
  userEmail: string;
  reservedPostId?: number;
  number: number;
  comment: string;
}
export interface IState {
  users: RecoilState<IUserWrap>;
  currentUser: RecoilState<IUser | null>;
  posts: RecoilState<IPost[]>;
  reservation: RecoilState<IReservation[]>;
}

const storage: IState = {
  users: atom({
    key: "user",
    default: {
      "jsw9808@gmail.com": {
        email: "jsw9808@gmail.com",
        password: "1234",
        name: "정승우",
      },
    } as IUserWrap,
    effects_UNSTABLE: [persistAtom],
  }),

  currentUser: atom({
    key: "currentUser",
    default: null as IUser | null,
    effects_UNSTABLE: [persistAtom],
  }),

  posts: atom({
    key: "posts",
    default: [{
      id:1,
      title:"쿵푸팬더",
      content:"곰돌이 푸 쎄게 때려보기",
      hostEmail: "mma771@naver.com",
      images: ["./dog.png"],
      fromDate: new Date(),
      toDate: new Date(),
      postNumber: "555",
      address: "zip",
      detailedAddress: "alzip",
      latitude: "1",
      longitude: "2",
      limit: 200
    }] as IPost[],
    effects_UNSTABLE: [persistAtom],
  }),

  reservation: atom({
    key: "reservation",
    default: [] as IReservation[],
    effects_UNSTABLE: [persistAtom],
  }),
};

export default storage;
