import React from 'react';
import { Routes,Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Body from './Component/Body';
import Login from './Component/Login';
import HeadersQuestion from './Component/HeadersQuestion';
import Admin from './Component/Admin';
import Users from './Component/Users';
import ProfilePage from './Component/ProfilePage';
import MathPage from './Component/MathPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cardsx from './Component/Cardsx';
import Auth from './Component/Auth';


const App = () => {
// window.addEventListener("beforeunload",()=>localStorage.clear()) 
  return (
    <>
       <Routes>

        <Route path='/Headers' element={ <> <NavBar/> <Body/> </> }/>
        <Route path='/' element={ <> <Login/></> }/>
        <Route path='/HeadersTopQuestion' element={ <>   <NavBar/>   <HeadersQuestion/>   </> }/>
        <Route path='/Admin' element={ <><NavBar/> <Admin/></> }/>
        <Route path='/Users' element={ <><NavBar/> <Users/></> }/>
        <Route path='/Profile' element={ <><ProfilePage/></> }/>
        <Route path='/MathPage' element={ <><MathPage/></> }/>
        <Route path='/auth' element={ <><Auth/></> }/>
        
       </Routes>
       <ToastContainer />
    </>
  );
};

export default App;
