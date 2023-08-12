import axios from "axios";
import "./userdata.css";
import User from '../components/User'
import { useNavigate } from "react-router-dom";

function UserData(props) {
  const navigate = useNavigate();

  const deleteUser = () => {
    axios
      .delete(`http://localhost:5000/api/users/${props.email}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      alert("user Deleted!")
      navigate('/')
  };

  return (
    <div>
      <h1 className="userdata-h1">{props.name}</h1>{" "}
      <div>
      <button className="logout-btn" onClick={() => navigate("/")}>
        Logout
      </button>
      <button className="logout-btn" onClick={deleteUser}>
        Delete
      </button>
      </div>
      {/* <p>{props.email}</p> */}
      <User/>
    </div>
  );
}
// http://localhost:5000/api/users/person1@gmail.com

export default UserData;
