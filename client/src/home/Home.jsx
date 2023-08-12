import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Post from "../post/Post";
import UserData from "../components/UserData";
import './home.css'
import GetPost from "../post/GetPost";

function Home() {
  const location = useLocation();
  const email = location.state.user;

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/${email}`)
      .then((res) => setData(res.data));
  }, [email]);

  return (
    <div className="home">
      {/* <div  className=" user-container-left">
        {" "}
        <User />{" "}
      </div> */}
      <div className=" post">
        <Post  name={data.name}/>
        <GetPost/>
      </div>
      <div className="home-container userdata">
        <UserData name={data.name} email={email}/>
      </div>
    </div>
  );
}

export default Home;
