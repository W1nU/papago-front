import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import storage, { IPost } from "../../storage/storage";

export const ViewPage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useRecoilState(storage.posts);
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    if (posts) {
      posts.forEach((post) => {
        if (post.id === Number(id)) {
          setPost(post);
        }
      });
    }
  }, [id, posts]);

  console.log(post?.images[0]);

  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            우리동네 파파스
          </h3>
        </div>
        <div className="relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6">
          <img
            className="cursor-pointer p-1 rounded-full h-10"
            src={require("../../asset/image/doctor.png")}
          />
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">제목</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {post?.title}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">닉네임</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                닉네임
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">카테고리</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                카테고리
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">위치</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {post?.address + " " + post?.detailedAddress}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                최대참가인원
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {post?.limit}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">모집기간</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {post?.fromDate.toDateString().split(" ")[3] +
                  "/" +
                  post?.fromDate.toDateString().split(" ")[1] +
                  "/" +
                  post?.fromDate.toDateString().split(" ")[2] +
                  " ~ " +
                  post?.toDate.toDateString().split(" ")[3] +
                  "/" +
                  post?.toDate.toDateString().split(" ")[1] +
                  "/" +
                  post?.toDate.toDateString().split(" ")[2]}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">세부사항</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {post?.content}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
