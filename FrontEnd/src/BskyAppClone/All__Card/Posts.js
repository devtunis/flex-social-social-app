import React from 'react'
import "./posts.css"

import { Avatar, AvatarBadge, AvatarGroup, WrapItem } from '@chakra-ui/react'
import axios from '../../Component/axios'
import { useGlobalContext } from '../../Store/GlobalContext'




const Posts = ({item,updateMessage}) => {
  console.log(item.post,item)
  const {TokenUser} = useGlobalContext()
   
  const HandelCliKaMOUR =async()=>{
          try{
           const LikePushRequest = await axios.post(`/setLikePost/${TokenUser._id}`,{
           PostId: item._id,     
           userId: TokenUser._id,      
           name: TokenUser.username,          
           email:  TokenUser.email,
           imgUser : TokenUser.imgUser               
                }
                
                  )
                  if(LikePushRequest){
                    alert("This pass Awsome here we Goo haha : 🎉")
                  } 

           }catch(eroor){
            console.log(`This Error by ${eroor}`)
           }
        console.log(TokenUser._id)
        console.log(item._id)
  }
 



  return (
    <div className='busky--app-card-post'>

        <div className='busky-app-avatar'>
        <WrapItem>
    <Avatar
      size='md'
      name='Prosper Otemuyiwa'
 
      src={`${process.env.REACT_APP_API_KEY}/${item.onwerHasPictuer}`}
    />{' '}
  </WrapItem>

        </div>

        <div className='busky-app-content'>
              <div className='busky-app-info-user' style={{display:"flex",alignItems:"center",justifyContent:""}} ><h2 className='busky-username'>{item?.ownerUserName} 🩸 <h3 style={{color:"grey"}}>{item.email}</h3>       </h2>      
              
              
              
              <div className='popelwannajoin' style={{marginLeft:"80px",background:"red"}}>
              <AvatarGroup size='md' max={3}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>
              </div>
               </div>  

             <div className='busky-app-descibe-user'><p>{item.post?.text}   </p></div>
             
             <div className='busky-app-info-img'>
     <img src={item.post.imgItem} alt=''/>
           
               </div>
         
          
             <div className='busky-app-info-icons'>

             <div className='busky--app-info-icons-1'>
                <img src='./commenter.png'  alt='' onClick={()=>updateMessage(true,item) }/>
                <span>{item.Comment.length}</span>
             </div>
             
             <div className='busky--app-info-icons-1'>
                <img src='./arrow.png'  alt=''/>
                <span>{item.post.share}</span>
             </div>

             <div className='busky--app-info-icons-1'>
                <img src='./amour.png'  alt='' onClick={()=>HandelCliKaMOUR()}/>
                <span>{item.LikesPost.length}</span>
             </div>

             <div className='busky--app-info-icons-1'>
                <img src='./plus.png'  alt=''/>
                 
             </div>

             </div>
        </div>

    </div>
  )
}

export default Posts