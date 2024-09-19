import React, { useEffect, useState } from 'react'
import "./Users.css"
import axios from './axios'
import { useGlobalContext } from '../Store/GlobalContext'
import { useNavigate } from 'react-router-dom'
const Users = () => {
    const [data,setData] = useState([])
    const [input,setInput]= useState("")
    const [newData,setnewData] = useState([])
    const {dispatch} = useGlobalContext()
    const Nav = useNavigate()
    const FetchData = async()=>{
        try{
           const res = await axios.get("/allUsers")
           const reponse =  res.data.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
           console.log(reponse)
           setData(reponse)
           setnewData(reponse)
        }catch(eroor){
            console.log(`this eroor by this ${eroor}`)
        }
    }
    useEffect(()=>{
        FetchData()
    },[])
    console.log(data)
    useEffect(()=>{
        const res =  data?.filter((b)=>b.username.toLowerCase().includes(input.toLowerCase()))
        console.log(res)   
        setnewData(res) 
    },[input])

    const HandelButtonUser = (b)=>{
        console.log(b)
        dispatch({
            type:"SET__PROFILE__USER",
            payload :b
        })
        Nav("/Profile")
    }

  return (
    <div className='Container-section'>
        
        <div className='user-section'>Users</div>
        
        <div className='user-input'> 
            <input type='text' placeholder='Search' onChange={(e)=>setInput(e.target.value)}/>
           
        </div>
        <div className='section-reall-user'>
            {newData?.map((b)=>{
                return <div className='card-user-info-specail' onClick={()=>HandelButtonUser(b)} style={{cursor:"pointer"}} >
                   <div className='imgInsideContainer'>
                    <img  src={`${process.env.REACT_APP_API_KEY}/${b.imgUser}`} alt=''/>
                    <div className='img-right'>
                    <p className='username' >{b.username}</p>
                    <p className='country'>Tunisia</p>
                    <p className='allScore'>500 ⭐</p>
                    </div>
                  </div>

                </div>
            })}
        </div>
    </div>
  )
}

export default Users