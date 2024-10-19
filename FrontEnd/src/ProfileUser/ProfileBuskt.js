 import React, { useEffect, useState } from 'react'
 import './NewProfileHome.css'
 import { Tabs, TabList, TabPanels, Tab, TabPanel, Editable } from '@chakra-ui/react'
 import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
 import { useGlobalContext } from '../Store/GlobalContext'
 import axios from "../Component/axios"
 const ProfileBuskt = () => {
  const  {TokenUser ,userProfileSe} = useGlobalContext()
 

 const [allData,setallData]= useState([])
 const RenderDataPrc = async()=>{
  try{
    const {data} = await axios.post(`/api/author/profile/${userProfileSe[0].userId}`)
    setallData(data)
 
  }
  catch(eroor){
    console.log(eroor)
  }
 }

 useEffect(()=>{
  RenderDataPrc()
 
 },[])

 
   return (
     <div className='allCaontinserSearchProfileAbout'>
      <div className='search'></div>
      <div className='Profilenb'>
        <div className='BackGroundPoctuer'>
          <img src="https://img.freepik.com/photos-gratuite/arriere-plan-flou-neon_23-2148132649.jpg" alt=''/>
        </div>

          <div className='UsERDinfo'>

            <div className='imgUserDinfo'>
              <Avatar size='lg'  src={`${process.env.REACT_APP_API_KEY}/${allData.imgUser}`} className='slm'/>
              <h1 style={{color:"white",fontWeight:"bold"}}>{allData.username}.bsky.socail</h1>
              <h1 style={{color:"grey",fontWeight:"bold"}}>{allData.email}</h1>
              <h1 style={{color:"grey",fontWeight:"bold"}}>1 Follower 5 Following 9 posts</h1>
            
              </div>

            <div className='EdditProfileImg'>
            
              <span>Edit Profile</span>
              <span>...</span>
            </div>

          </div>
       
<Tabs>
  <TabList>
               
  <Tab><h1 style={{color:"grey",fontSize:"19px",fontWeight:"bold"}}>Posts</h1></Tab>
                    <Tab ><h1 style={{color:"grey",fontSize:"19px",fontWeight:"bold"}}>Replies</h1></Tab>
                    <Tab><h1  style={{color:"grey",fontSize:"19px",fontWeight:"bold"}}>Media</h1></Tab>
                    <Tab><h1  style={{color:"grey",fontSize:"19px",fontWeight:"bold"}}>Likes</h1></Tab>
                    

  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </div>

      <div className='about'></div>
     </div> 
   )
 }
 
 export default ProfileBuskt