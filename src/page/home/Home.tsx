import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <div className="bg-white flex flex-col xl:flex-row">
          <div className="flex-1 container mx-auto px-6 py-16 xl:w-1/3">
            <div className="mx-auto">
              <div>
                <h1 className="text-3xl">이번 주말 어쩔티비</h1>
                <p className="mt-2 text-gray-600">
                  이번 주말 내 아이를 위한 모험을 소개해 드릴게요
                </p>
              </div>

              <div className="mt-4">
                <div className="relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6">
                  <div className="group relative flex cursor-pointer justify-between rounded-xl bg-amber-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-amber-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                    <div className="relative  space-y-1 p-4">
                      <h4 className="text-lg text-amber-900">
                        예절바른 우리아이, 태권도 체험
                      </h4>
                      <div className="relative h-6 text-amber-800 text-sm">
                        <span className="transition duration-300 group-hover:invisible group-hover:opacity-0">
                          부산시 동래구
                        </span>
                        <a
                          href=""
                          className="flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0"
                        >
                          <span>자세히 보기 </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      className="absolute -bottom-14 right-6 w-[8rem] transition duration-300 group-hover:scale-[1.4]"
                      src="https://www.pngplay.com/wp-content/uploads/12/Taekwondo-Background-PNG-Clip-Art.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative -mr-6 flex flex-col justify-end overflow-hidden rounded-b-xl pt-6 pr-6">
                  <div className="group relative flex cursor-pointer justify-between rounded-xl bg-orange-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-orange-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                    <div className="relative space-y-1 p-4">
                      <h4 className="text-lg text-orange-900">
                        코로나 걱정 끝! 천연비누 만들기
                      </h4>
                      <div className="relative h-6 text-orange-800 text-sm">
                        <span className="transition duration-300 group-hover:invisible group-hover:opacity-0">
                          부산시 남구
                        </span>
                        <a
                          href=""
                          className="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0"
                        >
                          <span>자세히 보기</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      className="absolute bottom-0 right-3 w-[5rem] transition duration-300 group-hover:scale-[1.4]"
                      src={require("../../asset/image/soap.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6">
                  <div className="group relative flex cursor-pointer justify-between rounded-xl bg-rose-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-rose-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                    <div className="relative space-y-1 p-4">
                      <h4 className="text-lg text-rose-900">
                        로미와 함께 춤을, 강아지와 힐링
                      </h4>
                      <div className="relative h-6 text-rose-800 text-sm">
                        <span className="transition duration-300 group-hover:invisible group-hover:opacity-0">
                          부산시 연제구
                        </span>
                        <a
                          href=""
                          className="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0"
                        >
                          <span>자세히 보기</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      className="absolute -bottom-10 right-6 w-[5.3rem] transition duration-300 group-hover:scale-[1.4]"
                      src={require("../../asset/image/dog.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative -mr-6 flex flex-col justify-end overflow-hidden rounded-b-xl pt-6 pr-6">
                  <div className="group relative flex cursor-pointer justify-between rounded-xl bg-fuchsia-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-fuchsia-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                    <div className="relative w-7/12 space-y-1 p-4">
                      <h4 className="text-lg text-fuchsia-900">
                        의사 선생님의 세균은 몸에 나빠요!
                      </h4>
                      <div className="relative h-6 text-fuchsia-800 text-sm">
                        <span className="transition duration-300 group-hover:invisible group-hover:opacity-0">
                          부산시 해운대구
                        </span>
                        <a
                          href=""
                          className="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0"
                        >
                          <span>자세히 보기 </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      className="absolute -bottom-7 right-0 w-[4.3rem] transition duration-300 group-hover:scale-[1.4]"
                      src={require("../../asset/image/doctor.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 container mx-auto px-6 py-16 xl:w-1/3">
            <div>
              <div>
                <h1 className="text-3xl">다가오는 모험 일정</h1>
                <p className="mt-2 text-gray-600">
                  예약하신 모험이 다가오고 있어요!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 container mx-auto px-6 py-16">
          <div>
            <div>
              <h1 className="text-3xl">모든 모험</h1>
              <p className="mt-2 text-gray-600">
                파파고와 함께라면 언제든 모험준비 완료!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
