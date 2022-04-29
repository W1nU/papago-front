import React from "react";

const Ticket = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            티켓
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            티켓은 다른 호스트가 주최하는 모험에 참여하기 위해 필요합니다.
            <br />
            구매하거나 나의 재능을 호스팅하여 획득할 수 있습니다.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  티켓으로 모험을 떠나요!
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                티켓은 다른 사용자가 호스팅하는 모험에 참여하기 위해 필요합니다.
                참여하는 자녀 1명당 1개의 티켓이 차감되며, 보호자는 티켓이
                필요하지 않습니다. 사용된 티켓은 티켓 1개의 수수료를 빼고,
                모험을 호스팅한 사용자에게 지급됩니다.{" "}
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  언제나 현금으로 바꿀 수 있어요!
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                티켓은 소액의 수수료(1,000원)를 제한 뒤, 언제든지 현금화가
                가능합니다. 지금 재능을 공유하고 티켓을 획득해보세요!
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex items-center justify-center flex-col">
          <img width={200} src={require("../../asset/image/ticket.png")} />
          <div className="text-xl font-bold relative bottom-10">20,000원</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
