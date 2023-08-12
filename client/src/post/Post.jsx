import { useState } from "react";
import axios from "axios";
import "./post.css";

function Post(props) {
  const [image, setImage] = useState();
  // const [name, setName] = useState();
  const [text, setText] = useState();

  const [open, setOpen] = useState(false);

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append('name',props.name)
    formData.append('text',text)


    await axios.post("http://localhost:5000/upload-image", formData);
    setOpen(false)
    alert("Post Sucessfull!!!")
  };
  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h1 className="heading">Welcome to Community...</h1>
      <input type="text" className="search" placeholder="Search..." />

      {open ? (
        <div>
          <button onClick={() => setOpen(false)} className="post-data-btn-close">close</button>
          <form onSubmit={submitImage} className="post-data-form">
          
            {/* <input type="text" name="name" onChange={(e)=>setName(props.name)}/> */}
            <label htmlFor="text">Enter Your text</label>
            <input className="post-data-input" type="text" name="text" onChange={(e)=>setText(e.target.value)} placeholder="Enter Your text..." required/>
            <input
            required
            className="post-data-input-file"
              type="file"
              accept="image/*"
              name="image"
              onChange={onInputChange}
            ></input>
            <button type="submit" className="post-data-btn-sub">submit</button>
          </form>
        </div>
      ) : (
        <div className="post-data">
          <p className="post-data-p">Want to post...</p>
          <button className="post-data-btn-open" onClick={() => setOpen(true)}>
            Post
          </button>
        </div>
      )}
    </div>
  );
}

export default Post;
