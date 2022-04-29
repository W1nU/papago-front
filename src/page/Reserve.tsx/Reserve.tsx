import { CssSyntaxError } from "postcss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import storage, { IPost, IReservation } from "../../storage/storage";

const Reserve = () => {
  const number = useParams().no;
  const [user, setUser] = useRecoilState(storage.currentUser);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [comment, setComment] = useState("");
  const [posts, setPosts] = useRecoilState(storage.posts);
  const [post, setPost] = useState<IPost>();
  const [selected, setSelected] = useState(1);
  const [reservation, setReservation] = useRecoilState(storage.reservation);

  useEffect(() => {
    if (posts) {
      posts.map((p) => {
        if (p.id === Number(number)) {
          setPost(p);
        }
      });
    }
  });

  const handleChangeSelect = (e: any) => {
    setSelected(Number(e.target.value));
  };

  const reserving = () => {
    if (email == null || name == null) {
      alert("이름 또는 이메일을 입력해주세요");
    } else {
      if (post) {
        const newReservation: IReservation = {
          userEmail: email,
          reservedPostId: post.id,
          number: selected,
          comment: comment,
        };
        setReservation((oldReservation) => [...oldReservation, newReservation]);
        alert("예약되었습니다.");
        window.location.replace("http://localhost:3000");
      }
    }
  };

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  이름
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10 pl-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-4 mt-5">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700 "
                >
                  이메일 주소
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10 pl-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 mt-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  자녀수
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handleChangeSelect}
                >
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div className="col-span-6 mt-5">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  하고싶은말
                </label>
                <textarea
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                ></label>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                ></label>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2 mt-5">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  필요한 티켓 : {selected}
                </label>
              </div>
            </div>
            <div className="mt-10 sm:mt-0"></div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={reserving}
              >
                예약하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserve;
