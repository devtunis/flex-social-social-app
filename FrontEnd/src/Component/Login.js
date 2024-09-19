import React, { useState } from 'react'
import "./Login.css"
import axios from './axios'
import { useGlobalContext } from '../Store/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setpassword]= useState("")
  const [imgUrl,setimgUrl]= useState("")
  const [selectedFile,setselectedFile] = useState(null)
  const {state,dispatch,TokenUser} = useGlobalContext()
  const Nav = useNavigate()
  

  const HandelChangePictuer =(e)=>{
    let file = e.target.files[0]
   if(file){
    setselectedFile(file)
    setimgUrl(URL.createObjectURL(e.target.files[0]))
   
   }
    
  }
  const HandelUserPush = async () => {
     const formData = new FormData()
     
     formData.append("username",username)
     formData.append("email",username)
     formData.append("password",password)
     formData.append("imgUser",selectedFile)
     console.log(formData)
      try {
          const reponse = await axios.post("/setUserWithAnswer",formData,{
            headers :{
              'Content-Type':'multipart/form-data'
            }
          })
          reponse && toast.success("Welcome sure we add you :)")

       dispatch({
         type: "ADD__NEW__USER",
         payload: reponse.data  
       });
       reponse && Nav("/Headers")
      
  
      } catch (error) {
        console.log(`Error during user creation: ${error}`);
      }
  };
   
  return (
    <div className='Form' >

 
<label htmlFor="avatar">Choose a profile picture:</label>

<input type="file" id="avatar" name="avatar" accept="/*" onChange={HandelChangePictuer} />

<br/>

        <input type='text'value={username} name='username' placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
        <br/>
        <input type='text'value={email}  name="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type='text'value={password} name="password" placeholder='password'  onChange={(e)=>setpassword(e.target.value)}/>
        <br/>
        
        <button onClick={HandelUserPush}>Create your account</button>
      
    </div>

  )
}

export default Login