import { atom, RecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface IPost {
  id: number;
  category: string;
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
  ticket: number;
}

export interface IUserWrap {
  [key: string]: IUser; // key값은 email
}
export interface IReservation {
  userEmail: string;
  reservedPostId: number;
  number: number;
  comment: string;
  done: boolean;
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
        ticket: 0,
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
    default: [
      {
        id: 1,
        category: "운동",
        title: "현직 태권도 관장입니다.",
        content:
          "안녕하세요. 저는 동래구에서 태권도 도장을 운영중인 예은이 아빠입니다. 심신이 지친 요즘, 아이들과 태권도로 땀도 흘리고 즐거운 추억을 만들어보시는 건 어떨까요? 성장기인 아이들에게 성장 발달에 도움이 되는 태권도 프로그램으로 구성해답니다. ",
        hostEmail: "jsw9808@gmail.com",
        images: [require("../asset/image/tae.jpeg")],
        fromDate: new Date("2022-04-30T20:00:00"),
        toDate: new Date("2022-04-30T22:00:00"),
        postNumber: "48432",
        address: "부산시 남구 수영로 325번길 12",
        detailedAddress: "105동 509호",
        latitude: "35.140055275709",
        longitude: "129.10243134194",
        limit: 10,
      },
      {
        id: 2,
        category: "만들기",
        title: "천연비누 만들어보세요^^",
        content:
          "안녕하세요! 저는 비누공방을 운영하는 사람입니다. 혹시 이번 주말 자녀와 함께 천연비누 만들어보시면 어떨까요? 아이들과 오감체험뿐만 아니라 미백, 피부트러블 완화에 좋은 천연비누도 만들어 가세요!",
        hostEmail: "jsw9808@gmail.com",
        images: [require("../asset/image/binu.webp")],
        fromDate: new Date("2022-04-30T20:00:00"),
        toDate: new Date("2022-04-30T22:00:00"),
        postNumber: "48432",
        address: "부산시 남구 수영로 325번길 12",
        detailedAddress: "105동 509호",
        latitude: "35.140055275709",
        longitude: "129.10243134194",
        limit: 10,
      },
      {
        id: 3,
        category: "놀이",
        title: "평소에 강아지 좋아하시는 분들?",
        content:
          "저희는 귀여운 강아지와 함께 살고 있는데요, 이번 주말에 자녀분들과 같이 공원에서 만나서 부모님들은 저희와 커피 한잔하시고 아이들은 강아지와 함꼐 뛰어노는건 어떠실까요? 저희 강아지 '로미'의 품종은 치와와이고 매우 온순하고 사람을 좋아해서 사람을 잘 따른답니다 ㅎㅎ ",
        hostEmail: "jsw9808@gmail.com",
        images: [require("../asset/image/dog_walk.jpeg")],
        fromDate: new Date("2022-04-30T20:00:00"),
        toDate: new Date("2022-04-30T22:00:00"),
        postNumber: "48432",
        address: "부산시 남구 수영로 325번길 12",
        detailedAddress: "105동 509호",
        latitude: "35.140055275709",
        longitude: "129.10243134194",
        limit: 10,
      },
      {
        id: 4,
        category: "직업",
        title: "비행기 시뮬레이션 체험",
        content:
          "안녕하세요. 저는 항공사 기장이고 아들을 가진 아빠입니다. 혹시 파일럿이 꿈인 자녀가 있다면, 이번주 저희집에서 시뮬레이터로 비행기 조종을 체험해보는건 어떨까요? 간단한 비행 조종 안전 규칙과 조종 관련 지식을 알려주는 시간도 가질 예정입니다. 자녀의 꿈에 날개를 다는 기회를 만들어 가세요 ^^ ",
        hostEmail: "jsw9808@gmail.com",
        images: [require("../asset/image/home.jpeg")],
        fromDate: new Date("2022-04-30T20:00:00"),
        toDate: new Date("2022-04-30T22:00:00"),
        postNumber: "48432",
        address: "부산시 남구 수영로 325번길 12",
        detailedAddress: "105동 509호",
        latitude: "35.140055275709",
        longitude: "129.10243134194",
        limit: 10,
      },
    ] as IPost[],
    effects_UNSTABLE: [persistAtom],
  }),

  reservation: atom({
    key: "reservation",
    default: [] as IReservation[],
    effects_UNSTABLE: [persistAtom],
  }),
};

export default storage;
