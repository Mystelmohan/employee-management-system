
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './componants/Admin';
import Home from './componants/Home';
import Login from './componants/Login';
import Navbar from './componants/Navbar';
import Signup from './componants/Signup';
import User from './componants/User';
import Auth from './componants/Auth';
import Profile from './componants/Profile';

function App() {
  return (
    <div className="App">
      <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Auth>
    </div>
  );
}

export default App;
