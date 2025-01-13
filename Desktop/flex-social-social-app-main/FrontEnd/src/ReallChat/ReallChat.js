import React, { useEffect, useRef, useState } from 'react'
import "./reallChat.css"
import { Avatar, AvatarBadge, Button, Divider, Flex, Spinner } from '@chakra-ui/react'
import { useGlobalContext } from '../Store/GlobalContext'
import axios from '../Component/axios'
import { useNavigate } from 'react-router-dom'
import ThreePoint from '../FirstView/ThreePoint'
import BlockUsers from './BlockUsers'
import { Progress } from '@chakra-ui/react'
import { io } from 'socket.io-client'
 
const socket = io('https://flex-social-social-app.onrender.com')


const ReallChat = () => {

  const Handelref = useRef(null)
  const Nav = useNavigate()
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [sortedMessages, setSortedMessages] = useState([])
  const { currentUser, TokenUser,dispatch ,currentPictuer} = useGlobalContext()
  const  Useref = useRef(null)
  const [image, setImage] = useState(null);
  const [currentRealOpen,setcurrenRealOpen] = useState(false)
  const [lastSeen,setLastSeen] = useState('')
  const [statusUser,setstatusUser] = useState("")
  const  [stop,setstopx]  = useState("f")
  const [iclick,seticlick] = useState(false)





  const HandelChunk = async()=>{
   
    seticlick((prev)=>!prev)
  
    setLoading(true)

    const newMessage = {
      senderId: TokenUser._id,   // Assuming TokenUser is the sender
      content: Handelref?.current?.value ? Handelref?.current?.value  : "no message ",
      timestamp: new Date().toISOString(),  // Adding the timestamp immediately
      
     
    };
    setMessages([...messages,newMessage])
    try{
     const data=  await axios.post(`/accesMessage/${currentUser[0]._id}`,{
       userId :  TokenUser._id ,
       txt : Handelref?.current?.value  ? Handelref.current.value : "no data",
       imgUser :image,
       vue :"oui",
       imgProfile : TokenUser.imgUser

 
      })
      
      console.log(data,"data")
      setLoading(false)
      setInput("")
      setImage("")
      Handelref.current.value =""
       
   }catch(eroor){
     console.log(eroor)
     setLoading(false)
     
   }
 
  }
 
//useEffect(() => {
 
  //  Useref?.current.scrollIntoView({ behavior: "smooth" });

    

  
  //}, []);



  
  // useEffect(() => {
  //  Useref.current.scrollIntoView({ behavior: "smooth" });
  // }, []);



// Useref.current?.scrollIntoView({behavior:"smooth"})

const [block,setBlock] = useState(false)
const [rayzen,setRayzen] = useState([])
     
    const Conversation =async ()=>{
      try{
        const {data} = await  axios.post(`/get/access/message/${TokenUser?._id}`,{
          userId : currentUser[0]?._id
        })
      
         // can i do inverse message here i wanna last message sned appear in top ? 
       setMessages(data.messages);
       setBlock(data.Block)

      }
      catch(eroor){
        console.log(`This eroor by ${eroor}`)
      }
    }



    //   setRayzen(data.DataBlocker)


    const getBlocker =async ()=>{
      try{
        const {data} = await  axios.post(`/get/access/message/${TokenUser?._id}`,{
          userId : currentUser[0]?._id
        })
      
       
        setRayzen(data.DataBlocker)
        console.log(data.DataBlocker,"fiee")
      }
      catch(eroor){
        console.log(`This eroor by ${eroor}`)
      }
    }



useEffect(()=>{
  console.log(TokenUser._id,"import")
  console.log(currentUser[0]._id,"import")
  
},[])



    const getLastSeen = async()=>{
      try{
          const {data} = await axios.get(`/get/date/user/${currentUser[0]._id}`)
          // console.log('lastMessage',data.LastSeen,'status',data.isOnline,data.waiting)
          setLastSeen(data.LastSeen)
          setstatusUser(data.isOnline)
          setstopx(data.waiting)
      }catch(eroor){
          console.log(`This Eroor ${eroor}`)
      }
    }
    
    
    





   useEffect(()=>{
   const interval = setInterval(() => {
    
    getLastSeen()
   
  },1000); // Fetch messages every 3 seconds
  return () => clearInterval(interval); 
   },[])


  
  //  useEffect(()=>{
  // console.log(Useref?.current?.scrollIntoView({behavior:"smooth"}))
  //  },[messages])
  const Log = ()=>{
    localStorage.clear()
    Nav("/auth")
    
  }

  


  const UpdateUser = async()=>{
    try{
      const UpdateUser  = await axios.post(`/update/user/status/${TokenUser._id}`)

      
    }catch(eroor){
      console.log(`this eroor by ${eroor}`)
    }
  }

  
  const OfflineUser = async()=>{
    try{
      const UpdateUser  = await axios.post(`/update/offline/user/status/${TokenUser._id}`)

      console.log(UpdateUser,"close success")
    }catch(eroor){
      console.log(`this eroor by ${eroor}`)
    }
  }



  useEffect(()=>{
   console.log(TokenUser._id,"current status")
    UpdateUser()
    Conversation()
  },[])

  useEffect(()=>{
      window.addEventListener('beforeunload',OfflineUser)
      
      return ()=>{
        window.removeEventListener('beforeunload',OfflineUser)
      }
  },[])
 



// useEffect(()=>{
//   console.log(currentUser,"ff")
// },[])

 
const handleImageChange = async (e) => {
  const selectedImage = e.target.files[0];
  setImage(selectedImage); // Update state with the selected image
 
  // Ensure an image is selected
  if (!selectedImage) return;

  const formData = new FormData();
  formData.append("file", selectedImage);
  formData.append("upload_preset", 'ask-app'); // Replace with your Cloudinary upload preset
  setLoading(true)
  try {
    // Upload the image to Cloudinary
    const uploadResponse = await axios.post(
      'https://api.cloudinary.com/v1_1/dfmdgsiid/upload', // Replace with your Cloudinary cloud name
      formData
    );
    console.log(uploadResponse.data.secure_url); 
    setImage(uploadResponse.data.secure_url)
    setLoading(false)
  } catch (error) {
    console.log(`This error is caused by ${error}`); // Corrected typo in "error"
    setLoading(false)
  }
};
const HandelSeeMessage = (b)=>{
  console.log(b)
  dispatch({
    type : 'CURRENT__PIC',
    paylod : b
  })
  setcurrenRealOpen(true)
}

 


 

const HadndelTyping = async()=>{
  try{
      await  axios.post(`/set/typing/${TokenUser._id}`,{
      isTyping : "Typing"
    })
    
  }
  catch(eroor){
    console.log(eroor)
  }
}
 

const HandelCloseTyping = async()=>{
  try{
      await  axios.post(`/set/typing/${TokenUser._id}`,{
      isTyping : "close"
    })
    
  }catch(eroor){
    console.log(`This Eroor by ${eroor}`)
  }

}
useEffect(()=>{
  console.log(messages)
},[])

const [loadingMessages,setLoadingMessages] = useState(false)

const HandelDelteMyMessages =async(b)=>{
  setLoadingMessages(true)
  try{
      const DelteMyChat = await axios.post(`/delete/access/message/${TokenUser._id}`,{

        userId:currentUser[0]._id,
        messageId:b._id

    })
    setLoadingMessages(false)

  }
  catch(eroor){
    console.log(eroor)
    setLoadingMessages(false)
  }

}

// other world 

const [progressBar,setProgressBar] = useState(false)

const helpPassToBlockUserFunction =(y) =>{
  setProgressBar(y)
}

const [open,setopen] = useState(false)
// const HandelThisOpen  = (x)=>{
//   setopen(x)
// }

const [asus,setassus] = useState(false)
const rio =()=>{
  setopen((prev)=>!prev)
  getBlocker()
  setassus(true)
  
}

const handleKeyPress = (e) => {
  if (e.key === 'Enter' && input.trim()) {
    HandelChunk();
  }
};




 
useEffect(() => {
  socket.on("PrvMessages", async (data) => {
 
   if(Useref.current){ Useref?.current?.scrollIntoView({ behavior: "smooth" });}
  

    console.log(data.room.messages[(data.room.messages.length)-1].content)
     
   
     const funct = async()=>{
         try {
          
          const   reponse  = await axios.post(`/check/users/freind/${TokenUser._id}`,{
            userId  :  TokenUser._id== data.room.users[0]? data.room.users[1] :  data.room.users[0]
          })


           console.log(reponse.data,"we are freeind")  
           console.log(data.room.messages);

        setMessages(data.room.messages)
        
         }catch(eroor){
          console.log(eroor)
         }
     }



     funct()
  });

 



  // Cleanup when component unmounts
  return () => {
    socket.off("PrvMessages");
  };
}, [socket]);

//this for web rtc for do peer connection peer in this app

const HandelPeerConnection = ()=>{
 
  
  !currentUser[0]._id && alert("should bring an author dude")

  Nav(`/waitingCall/${currentUser[0]?._id}`)
  
  
}

  return (
    <>  
   
    <div className='reallchat'>
   
      <div className='container--reallchat'>
        <div className='chatPage'>
        {progressBar &&    <Progress size='xs' colorScheme='blue' height='3.2px' isIndeterminate />
     }
          <div className='card-wrapp--acountx'>
            <div className='itemcards'>
              <Avatar   size='sm' src={block?"":`${currentUser[0].imgUser}`}>
                
                {block ? '' :  <AvatarBadge boxSize='10px'  bg={statusUser==='true' ? 'green.500' : 'red.500'} />}
              </Avatar>
              <div className='left--card-account1'>
                <h2 style={{ color: "white" }}> {block ? "User Flex"  : currentUser[0].username}</h2>
                {/* <p style={{ color: "grey" }}>@{currentUser[0]?.email}</p> */}
                <p style={{ color: "grey",display:"flex" }}>{stop=="Typing" && <> Typing <ThreePoint/>  </>} </p>

                {block ? <p style={{color:"white"}}>Block</p> :                 <p className='messageme' style={{ color: "white" ,display:statusUser==='true' && 'none'}} >Last seen {lastSeen} </p>}
              </div>
            </div>

      
          
            <div className='user-info-chat-block' style={{ color: "white",cursor:"pointer",display:"flex",width:"100px",alignItems:"center",justifyContent:"center",justifyContent:"space-around" }}>
          
            <div style={{backgroundColor:"transparent",display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
          
            <div className='call-phone' >  
           <Avatar   size='sm' src={`../settingvideoimage/call121234.svg`}   onClick={HandelPeerConnection} /> 
         </div>
         <div  >
            <h1 onClick={()=>rio()} style={{marginBottom:"15px"}}>...</h1>
            </div>
            </div>

            
               
              <div style={{
    position: "absolute",
    top: "500%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2", // Fixed typo in `zIndsex` to `zIndex`
  }}>
                <BlockUsers myId={TokenUser._id} matchID={currentUser[0]._id} passFunction  ={helpPassToBlockUserFunction}
                 test ={rayzen} testBlock = {block}
                 isOpen = {open}   asuss = {asus}
                />
              </div>
            </div>
          </div>

          <div className='scrennMessage' style={{color:"white"}}>
        
         <div >  { loadingMessages && <Progress size='xs' isIndeterminate />}  </div>
         
                  {messages?.map(b=>
                
                   <>
                  <div key={b._id} className={b.senderId===TokenUser._id  ? 'oneToneLeft' : 'oneToOne'} style={{cursor:"pointer"}}>
                   <div  style={{display:b.senderId===TokenUser._id && "flex",justifyContent:"flex-end"}}>
                   <Avatar   size='sm' src={`${b.imgProfile}`}   > 
                <AvatarBadge boxSize='10px' bg={statusUser==='true' ? 'green.500' : 'red.500'} />
              </Avatar> 
                   </div>
                    <h2  style={{fontWeight:"bold",display:"block",alignItems:"center",gap:"10px"}}> 
                  
                            <div>    

                      
                       <div className='content' style={{backgroundColor:"",
                       height:"100%",
                       width:"100%"
                       

                       }}
                       >  {b.content} </div> 

                       <p style={{ color: "black", fontSize: "16px", marginTop: "5px",overflowX:"auto" }}> 
                    

                       {
  b?.imgUser?.includes('.mp4') || b?.imgUser?.includes('.webm') || b?.imgUser?.includes('.ogg') ? (
    <video
      className="contentimg"
      style={{ borderRadius: "10px", cursor: 'all-scroll' }}
      onClick={() => HandelSeeMessage(b)}
      controls
    
    >
      <source src={b?.imgUser} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img
      src={b?.imgUser}
      alt=""
      className="contentimg"
      style={{ borderRadius: "10px", cursor: 'all-scroll' }}
      onClick={() => HandelSeeMessage(b)}
    />
  )
}

                     
                      <div style={{display:"flex",justifyContent:"space-between"}}> 
                    <div>   {new Date(b.timestamp).getHours()} :
                      {new Date(b.timestamp).getMinutes().toString().padStart(2, '0')}</div>
                         <div>
                  {TokenUser._id==b.senderId &&  <h1   onClick={()=>HandelDelteMyMessages(b)}>  🗑️ </h1>}
                         </div>
                      </div>
                            </p>
                            </div>
                    
                        </h2>
                     
                       
    
                  </div>
                  <div ref={Useref}></div>

                    </>
                   
                )
                  }
                  
                     
          </div>

        {!block?    <div className='submitMessages' style={{ display: "flex", alignItems: "center" }}>
       
       <label htmlFor="myfile" style={{color:"white"}}>
         
         <img src='https://cdn-icons-png.flaticon.com/256/6326/6326015.png'
         alt=''
         style={{width:"30px",height:"30px",objectFit:"cover",cursor:"pointer"}}
         />
         </label>       
       <input type="file" id="myfile" name="myfile" onChange={handleImageChange}/>
       
    
         <input
           type='text'
           ref={Handelref}
           onChange={(e) => setInput(e.target.value)}
           style={{ width: "80%", fontWeight: "bold", fontSize: "19px" }}
           onClick={()=>HadndelTyping()}
           onBlur={()=>HandelCloseTyping()}
           onKeyPress={handleKeyPress}

         />
         <Button
           isLoading={loading}
           style={{ backgroundColor: "white", width: "80px", height: "45px", cursor: "pointer", marginLeft: "10px", fontWeight: 'bold', borderRadius: "100px" }}
           onClick={HandelChunk}
           
         >
           SEND
         </Button>
       </div> :<div className='blockConainter' style={{textAlign:"center"}} >
        <hr/>
        <p style={{color:"grey"}}>Tout le monde ne peut pas envoyer de message a ce compte </p>
        </div>}
        </div>
      </div>
    </div>
  
    <div className='containerSeeTheCurrentImages' style={{display:currentRealOpen?"block":"none"}} >
      <div className='containeraddxsrgr' style={{display:currentRealOpen ? 'flex':"none"}}
      onClick={()=>{setcurrenRealOpen(false)
        HadndelTyping()}
      }
      
      ><svg
  xmlns="http://www.w3.org/2000/svg"
  height="24"
  width="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 6h18"></path>
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  <path d="M4 6v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6"></path>
  <path d="M10 11v6"></path>
  <path d="M14 11v6"></path>
</svg>
</div>

<div className='currentImg' ><img src={currentPictuer && currentPictuer[0]?.imgUser} alt=''/></div>
  
    </div>
    
    </>
  )
}

export default ReallChat
