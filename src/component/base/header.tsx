import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import storage from "../../storage/storage";

const Header = () => {
  const [users, setUsers] = useRecoilState(storage.users);
  const [user, setUser] = useRecoilState(storage.currentUser);


  const login = () => {
    window.location.replace("http://localhost:3000/login");
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <div className="flex items-centerbg-white rounded shadow-lg px-7 h-20">
        <nav className="flex flex-1 justify-between items-center">
          <div className="flex items-center space-x-3 pr-6">
            <a href={"/"} className="flex items-center">
              <img
                className="cursor-pointer p-1 rounded-full h-10"
                src={require("../../asset/image/logo.png")}
              />
            </a>
          </div>

          {user ? (
            <a href={"/ticket"} className="flex items-center">
              <img
                className="w-11 mr-2"
                src={require("../../asset/image/ticket.png")}
              />
              <div className="text-lg font-bold">{user.ticket}</div>
            </a>
          ) : null}

          <div>
            {user ? (
              <div className="flex align-center justify-center">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <svg
                    className="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="w-3" />
                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-bold">{user.name}</div>
                    <div className="text-gray-500 text-sm" onClick={logout}>
                      로그아웃
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">{user.email}</div>
                </div>
              </div>
            ) : (
              <div>
                <div onClick={login}>Login</div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
