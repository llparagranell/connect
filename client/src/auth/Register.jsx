import React,{useState} from 'react'
import './Auth.css'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register() {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/');

  const [ name , setName ] = useState('');
  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('');

  const user = {
    name,
    email,
    password
  }

  const handleform = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:5000/api/users/register",user).then(res=> alert(res.data));
    navigate('/home',{state:{user:"hello"}});
  }

  return (
    <section>
    <div className="login">
      <div className="loginComponent">
          <h1 id="login">Register</h1>
        <form className="form">
        <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Username..."
            onChange={(e)=> setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email Id..."
            onChange={(e)=> setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password..."
            onChange={(e)=> setPassword(e.target.value)}
          />
          <button onClick={handleform} className="sub">submit</button>
        </form>

        <p id="registerP">
          If have an account? <button className='btnform' onClick={handleLogin}>Login</button>.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Register
