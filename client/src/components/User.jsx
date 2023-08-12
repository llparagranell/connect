import axios from "axios";
import './user.css'
import { useEffect, useState } from "react";

function User() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/user")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="user">
        <h1 className="user-p">User's</h1>
      <div >
        {data.map((e) => {
            return <div className="user-container" key={e._id}>{e.name}</div>
        } 
        )}
      </div>
    </div>
  );
}

export default User;
