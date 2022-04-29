import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import DaumPostcode from "react-daum-postcode";
import storage from "../../storage/storage";
import DateTimePicker from "react-datetime-picker";

//@ts-ignore
const { kakao } = window;

const EnrollClass = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [image, setImage] = useState<any>("");
  const [limit, setLimit] = useState(0);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [posts, setPosts] = useRecoilState(storage.posts);
  const [currentUser, setCurrentUser] = useRecoilState(storage.currentUser);

  const handleComplete = (data: any) => {
    const { zonecode } = data;

    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setSelectedAddress(fullAddress);
    setZonecode(zonecode);
  };

  const onClickSubmit = () => {
    if (currentUser) {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          category: category,
          title: title,
          hostEmail: currentUser.email,
          content: content,
          images: [image],
          detailedAddress: detailedAddress,
          address: selectedAddress,
          postNumber: zonecode,
          fromDate: fromDate,
          toDate: toDate,
          limit: limit,
          latitude: "35.140055275709",
          longitude: "129.10243134194",
        },
      ]);

      window.location.replace("http://localhost:3000");
    }
  };

  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div>
            <h1 className="text-3xl">새로운 모험 호스팅하기</h1>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              *카테고리
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">-</span>
              </div>

              <input
                type="text"
                id="category"
                value={category}
                onChange={({ target }) => setCategory(target.value)}
                placeholder="   우측에 해당 카테고리가 없을 시, 직접 카테고리를 입력해주세요! "
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              />
              <div className="absolute inset-y-0 right-0 mr-3 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>교육 및 학습</option>
                  <option>야외 활동</option>
                  <option>요리 체험</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              *제목
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoComplete="given-name"
              placeholder="   클래스 이름 및 내용을 요약해서 적어주세요! "
              className="mt-1 pl-2 focus:ring-indigo-500 focus:border-indigo-500 h-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              *상세 내용
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={3}
                className="shadow-sm p-3 first-line:focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="   클래스에 대한 설명을 적어주세요!"
                defaultValue={""}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              클래스에 대해 상세히 적어 신청자 수를 늘려보아요!
            </p>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              *우편번호
            </label>
            <input
              type="text"
              placeholder="어디에서 수업이 이루어지나요?"
              value={zonecode}
              disabled
              className="mt-1 pl-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <DaumPostcode onComplete={handleComplete} className="post-code" />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              *주소
            </label>
            <input
              type="text"
              placeholder="어디에서 수업이 이루어지나요?"
              value={selectedAddress}
              disabled
              className="mt-1 pl-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              *상세 주소
            </label>
            <input
              type="text"
              placeholder="어디에서 수업이 이루어지나요?"
              value={detailedAddress}
              onChange={(e) => setDetailedAddress(e.target.value)}
              className="mt-1 pl-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="limit"
              className="block text-sm font-medium text-gray-700"
            >
              *참가인원
            </label>
            <input
              type="number"
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              placeholder="수업 최대 참가인원은 몇명인가요? "
              className="mt-1 pl-3 focus:ring-indigo-500 focus:border-indigo-500 h-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="fromDate"
              className="block text-sm font-medium text-gray-700"
            >
              *시작 시간
            </label>
            <DateTimePicker
              value={fromDate}
              onChange={(datetime) => setFromDate(datetime)}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="toDate"
              className="block text-sm font-medium text-gray-700"
            >
              *종료 시간
            </label>
            <DateTimePicker
              value={toDate}
              onChange={(datetime) => setToDate(datetime)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              사진 등록(추가 설명 사진)
            </label>
            <div className="w-[10rem] h-[10rem] overflow-hidden">
              <img src={image} />
            </div>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>여기 클릭</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        e.preventDefault();

                        let reader = new FileReader();
                        if (e.target.files) {
                          let file = e.target.files[0];

                          reader.onloadend = () => {
                            setImage(reader.result);
                          };

                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  <p className="pl-1">또는 드래그 앤 드롭으로 파일 업로드</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF 최대 10MB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            onClick={onClickSubmit}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            호스팅하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollClass;
