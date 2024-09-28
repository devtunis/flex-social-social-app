import React, { useEffect, useState } from 'react'
import "./Login.css"
import axios from './axios'
import { useGlobalContext } from '../Store/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LanguageSwitcher from '../LanguageSwitcher'
import { useTranslation } from 'react-i18next'
 

const Login = () => {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setpassword]= useState("")
  const [imgUrl,setimgUrl]= useState("")
  const [selectedFile,setselectedFile] = useState(null)
  const {state,dispatch,TokenUser} = useGlobalContext()
  const [open,setOpen] = useState(false)
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
     formData.append("email",email)
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


  
  const { t } = useTranslation();

 

  

  return (
    <>

<LanguageSwitcher/>
 
 
    <div className='formtadataSection' style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}> 
    <div className='Form' >

 
<label htmlFor="avatar"  ><img 
src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/2048px-OneDrive_Folder_Icon.svg.png'
width="40px" height="40px" 
style={{cursor:"pointer"}}
/></label>

<input  style={{display:"none"}} type="file" id="avatar" name="avatar" accept="/*" onChange={HandelChangePictuer} />

<br/>

        <input type='text'value={username} name='username' placeholder={t('username')} onChange={(e)=>setUsername(e.target.value)}/>
        <br/>
        <input type='text'value={email}  name="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type={open ? "text" : "password"}  value={password} name="password" placeholder={t('password')}  onChange={(e)=>setpassword(e.target.value)}
         
        />
       
         
        <div>  
        
       {open ?
        <span className="material-symbols-outlined" style={{cursor:"pointer"}} onClick={()=>setOpen((prev)=>!prev)} >
        visibility
        </span>
       
       : <span className="material-symbols-outlined" style={{cursor:"pointer"}} onClick={()=>setOpen((prev)=>!prev)}>
       visibility_off
       </span>}

            </div>
        <br/>
        
        <button onClick={HandelUserPush}>{t('login')}</button>
      
    </div>
    </div>
    </>
  )
}

export default Login