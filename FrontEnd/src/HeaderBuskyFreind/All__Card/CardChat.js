import React, { useEffect, useState } from 'react'
import './CardChat.css'
import { Button, ButtonGroup,Stack, useEditable } from '@chakra-ui/react'
import axios from "../../Component/axios"

import { useGlobalContext } from '../../Store/GlobalContext'
const CardChat = ({index,item}) => {
  const [wait,setwait] = useState(false)
  const {TokenUser,currentUser,dispatch} = useGlobalContext()


    const DataScooper = async(data)=>{
      
     setwait(true)
    
  
      
          try{
             await axios.post(`/accesMessage/${TokenUser._id}`,{
              userId : data._id
             })
             setwait(false)
            
          }catch(eroor){
            console.log(eroor)
            setwait(false)
          }
        
       
    }
    

  return (

    <div className='CardChat--1' key={index}>
        <div className='CardChat--image'>
            <img src={`${process.env.REACT_APP_API_KEY}/${item.imgUser}`} alt=''/>
        </div>
        <div className='CardChat--text'>{item.username}</div>
        <div className='CardChatButton'>

       <div className='cardBetween'>
       
  <Button 
  onClick={()=>DataScooper(item)}
  isLoading={wait}
  loadingText="Hani nb3thlha bchwy"
  colorScheme='blue' variant='solid'>
    Add Freind
  </Button>
 
 

       </div>
        </div>
    </div>
  )
}

export default CardChat