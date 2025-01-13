import React, { useEffect, useState } from 'react'
import "./waitingcall.css"
import { Avatar, AvatarBadge } from '@chakra-ui/react'
import { useGlobalContext } from '../Store/GlobalContext'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from '../Component/axios'
const WaitingCall = () => {
    const {TokenUser,currentUser} = useGlobalContext()
    const [data,setsdate] = useState("")
    const [online,setonline] = useState("")
 
    const Nav =useNavigate()
    const client  = useParams().id
    const me  = TokenUser?._id
    useEffect(()=>{
        console.log(me ,client)
    },[])



     
        const GforgetStatus = async()=>{
            try{
                const {data} = await axios.get(`/get/date/user/${client}`)
                 
               setsdate(data.LastSeen)
               setonline(data.isOnline)
               
               
            }catch(eroor){
                console.log(`This Eroor ${eroor}`)
            }
          }
          
         
      

      useEffect(()=>{
      
        const interval = setInterval(() => {
            GforgetStatus()
           
        }, 1000);
    
        
        return () => clearInterval(interval);
      }, []);  
    
  
  
    
    const HandelCancelCall = ()=>{
        Nav("/bluskG/chat")
    }
  return (
   <> 
    <div className='hearder-app'>
        <div className='Header-Waiting-Call-title'> <h2>End-to-end encrypted</h2></div>
  
    <div className='WaitingCall'>
       
      <div className='Waiting-call-content'>
        <div> 
    {online!=="true" &&   <h5 style={{color:"white"}}>Last seen <sub>{data}</sub></h5> }
        <Avatar   size='xl' id='rotateacall'  src={currentUser[0].imgUser}/>
       
        <div
  style={{
    backgroundColor: online === "true" ? "green" : "red",
    width: "10px",
    height: "10px",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  
</div>

        </div>
      
 
        <h2 className='titlename' style={{textAlign:"center"}} > 
            {currentUser[0].username}
            <br>
            </br>
            Connecting ....
        </h2>
      
      </div>
      <div className='answer-Waiting-call'>
      
      <div className='handeller-caller-off-1'>
      <Avatar   cursor={"pointer"} size='md' src={"../settingvideoimage/videocancel.svg"}/>
      </div>
      
      <div className='handeller-caller-off-2'>
      <Avatar   cursor={"pointer"} size='md' src={"../settingvideoimage/micro.svg"}/>
      </div>
      <div className='handeller-caller-off-3'>
      <Avatar   cursor={"pointer"} size='md' src={"../settingvideoimage/volume.svg"}/>

      </div>
      


     <div className='handeller-caller-off'  onClick={HandelCancelCall}>
     <Avatar  cursor={"pointer"}    size='md' src={"../settingvideoimage/cancel.svg"}/>
     
     </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default WaitingCall