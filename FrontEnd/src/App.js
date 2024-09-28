import React, { useEffect } from 'react';
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
import ImageUpload from './Component/ImageUpload';
import FIRSTVIEW from './FirstView/FIRSTVIEW';
import BuskyHome from './BskyAppClone/HeaderBusky/BuskyHome';
import Posts from './BskyAppClone/All__Card/Posts';
import BuskyHomeFreind from './HeaderBuskyFreind/BuskyHomeFreind';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'; // Adjust the import based on your file structure
import './i18n'
import ReallChat from './ReallChat/ReallChat';
const App = () => {
 
  
    //window.addEventListener("beforeunload",()=>localStorage.clear())
    
  return (
    <>
      
       <Routes>

        <Route path='/Headers' element={ <> <NavBar/> <Body/> </> }/>
        <Route path='/login' element={ <> <Login/></> }/>
        <Route path='/HeadersTopQuestion' element={ <>   <NavBar/>   <HeadersQuestion/>   </> }/>
        <Route path='/Admin' element={ <><NavBar/> <Admin/></> }/>
        <Route path='/Users' element={ <><NavBar/> <Users/></> }/>
        <Route path='/Profile' element={ <><ProfilePage/></> }/>
        <Route path='/MathPage' element={ <><MathPage/></> }/>
        <Route path='/auth' element={ <><Auth/></> }/>
        <Route path='/Admin/upload/page' element={ <><ImageUpload/></> }/>
        <Route path='/' element={ <><FIRSTVIEW/></> }/>
        <Route path='/bluskG' element={ <><BuskyHome/></> }/>
        <Route path='/card' element={ <><Posts/></> }/>
        <Route path='/bluskG/freind' element={ <><BuskyHomeFreind/></> }/>
        <Route path='/bluskG/chat' element={ <><ReallChat/></> }/>
        
       </Routes>
       <ToastContainer />


       

    </>
  );
};

export default App;
