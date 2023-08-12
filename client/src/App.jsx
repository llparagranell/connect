import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login'
import Register from './auth/Register'
import Home from './home/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route element={<Login/>} path='/'/>
      <Route element={<Register/>} path='/register'/>
      <Route element={<Home/>} path='/home'/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
