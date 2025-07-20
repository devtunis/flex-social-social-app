import React from 'react'
import "./FirstVIew.css"
import { useNavigate } from 'react-router-dom'
import ButterFlyD from './ButterFlyD'
 

const   FIRSTVIEW = () => {
    const Nav = useNavigate()
 
   
  return (
    <> 
 
   

    <div className='container__first_view'>
        
        <div className="insdide__cotnainer">
          <div className='firstview__img'><img src='./betterfly.PNG'/>
          
          <ButterFlyD/></div>
          
          <div className='firstview__titile'> 
            <h1 className='ASKENET'>ASKE NET</h1>
            <h4 className='whatsapp'>What's up?     </h4>
          </div>


          <div className='firstview__button'>

            <input type='button' className='button1' value="Create a new account" onClick={()=> {Nav("/login")}} />

            <input type='button' className='button2' value="Sign in"  onClick={()=>{Nav("/auth")}} />
           
          </div>          

        </div>  

        </div>
        </>

  )
}

export default FIRSTVIEW    
