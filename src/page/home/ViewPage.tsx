import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import storage, {
  IPost,
  IReservation,
  IUser,
  IUserWrap,
} from "../../storage/storage";
import moment from "moment-timezone";

//@ts-ignore
const { kakao } = window;

export const ViewPage = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useRecoilState(storage.reservation);
  const [posts, setPosts] = useRecoilState(storage.posts);
  const [users, setUsers] = useRecoilState(storage.users);
  const [currentUser, setCurrentUser] = useRecoilState(storage.currentUser);

  const [post, setPost] = useState<IPost>();
  const [myReservation, setMyReservation] = useState<IReservation>();
  const [isReserved, setIsReserved] = useState<Boolean>(false);
  const [child, setChild] = useState(0);
  
  const doneTask = () => {
    setReservation(reservation.map(reserve => {
      return myReservation?.reservedPostId === reserve.reservedPostId
        ? {...reserve, done:true}
        :reserve
    }))
    posts.map(post => {
      if(post.id === myReservation?.reservedPostId) {
        console.log(post.id);
        const user = users[post.hostEmail];
        const changeUser:IUser = {
          email: user.email,
          password: user.password,
          name: user.name,
          ticket: user.ticket+1,
        }
        users[post.hostEmail] = changeUser;
      }
    })
    alert("모험을 완료하였습니다.");
    window.location.replace("http://localhost:3000");
  }

  useEffect(() => {
    if (currentUser) {
      const { email } = currentUser;

      reservation.forEach((item) => {
        if (item.userEmail === email) {
          if (item.reservedPostId === Number(id)) {
            setIsReserved(true);
            setChild(item.number);
            setMyReservation(item);
          }
        }
      });
    }
  }, [reservation, currentUser]);

  useEffect(() => {
    if (posts) {
      posts.forEach((post) => {
        if (post.id === Number(id)) {
          setPost(post);

          let container = document.getElementsByClassName("map")[0];

          let options = {
            center: new kakao.maps.LatLng(post.latitude, post.longitude),
            level: 3,
          };

          let map = new kakao.maps.Map(container, options);

          var markerPosition = new kakao.maps.LatLng(
            post.latitude,
            post.longitude
          );

          var marker = new kakao.maps.Marker({
            position: markerPosition,
          });

          marker.setMap(map);
        }
      });
    }
  }, [id, posts]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3\2 lg:aspect-h-4">
            <img
              src={post?.images[0]}
              alt="Model wearing plain white basic tee."
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {post?.title}
            </h1>
          </div>

          <div className="mt-4 lg:mt-0 lg:row-span-3">
            {!isReserved ? (
              <button
                onClick={() => {
                  if (post) {
                    window.location.replace(
                      "http://localhost:3000/reserve/" + post.id
                    );
                  }
                }}
                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                참여 신청하기
              </button>
            ) : (
              <button className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={doneTask}>
                모험 완료하기
              </button>
            )}
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <div>
              <h3 className="sr-only">모험 설명</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{post?.content}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">모험 시간</h3>

              <p className="text-sm text-gray-600">
                {moment(post?.fromDate).format("YYYY년 MM월 DD일 hh:mm") +
                  " ~ " +
                  moment(post?.toDate).format("YYYY년 MM월 DD일 hh:mm")}
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">주소</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {post?.postNumber}
                  <br />
                  {post?.address}
                  <br />
                  {post?.detailedAddress}
                </p>
              </div>
              <br />
              <div className="map w-full h-[30rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
