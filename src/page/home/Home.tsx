import React, {useEffect} from "react";
import storage from "../../storage/storage";
import { useRecoilState } from "recoil";

const accounts = {
  "jse9808@gmail.com": {
    name: "승우",
    email: "jse9808@gmail.com",
    password: "test",
  },
};
const Home = () => {
  const [user, setUser] = useRecoilState(storage.users);
  useEffect(() => {
    console.log(user);
  }) 
  return <div>
  </div>;
};

export default Home;
