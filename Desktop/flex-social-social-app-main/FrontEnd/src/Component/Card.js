import React from 'react'
import axios  from './axios'
import "./Card.css"
import { useGlobalContext } from '../Store/GlobalContext'




const Card = ({cardItem,allMessage}) => {
  const  {BasketMassages,dispatch} = useGlobalContext()

 const  GetDataUsers  =()=>{

  console.log(cardItem.PrivateSession,"this data")
  dispatch({
    type :"MESSAGES",
    payload : cardItem.PrivateSession
  })
 }
  return (
    
     <div className='cardSectionUser' onClick={GetDataUsers} >
      <span className='icon-pictuer' > {cardItem.nameidSession[0]}</span>
      <span className='icon-name'>  {cardItem.nameidSession}</span>
     </div>

  )
}

export default Card