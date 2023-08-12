import axios from "axios";
import { useEffect, useState } from "react";
import "./getpost.css";

function GetPost() {
  const [allimage, setallImage] = useState(null);

  useEffect(
    () => async () => {
      const result = await axios.get("http://localhost:5000/get-image");
      setallImage(result.data.data);
    },
    [setallImage]
  );
  // console.log(allimage[0].image);
  return (
    <div className="scroll">
      {allimage &&
        allimage.map((data) => {
          return (
            <div key={data.id} className="getpost">
              <h1 className="getpost-name">{data.name}</h1>

              <img
                className="getpost-img"
                src={require(`../../../api/uploads/${data.image}`)}
                alt="Wait..."
              />
              <p className="getpost-text">{data.text}</p>
            </div>
          );
        })}
    </div>
  );
}

export default GetPost;
