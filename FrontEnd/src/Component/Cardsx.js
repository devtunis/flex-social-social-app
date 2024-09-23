import "./Cardsx.css";
import { useGlobalContext } from "../Store/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "./axios";
export default function Cardsx({describre,imgicon,imgpofile,tags,document}) {
   const {dispatch,SavePost,TokenUser} = useGlobalContext()
   const Nav = useNavigate()
    const  HandelClickData = ()=>{

        dispatch({
          type:"ADD__QUESTION",
          payload2 : document
        })
       
         
       
         
    Nav("/HeadersTopQuestion")
     
      }

const [file,setfile] = useState([])
const HandelSaveButtonReactJS = async()=>{
   console.log(document.question,TokenUser._id,SavePost)
  //  dispatch({
  //   type: "SAVE__POST",
  //   paylodSave : document.question
  //  }) 
  try{
  const responseData =  await axios.post(`/pushMyBasket/${TokenUser._id}`,{
    
     id :TokenUser._id ,
     imgItem : document.question.imgItem ,
     text : document.question.text ,
     description :document.question.description 
},

 
)  
 if(responseData){
  (alert("succes data"))
 }  

  }catch(eroor){
    console.log(`this eroor by ${eroor}`)
    alert("this already ")
  }
  
}
useEffect(()=>{
  console.log(SavePost)
},[SavePost])
 
  return (
    <div className="clone-card helper">
      <div className="clone-card-img">
        <img
          src="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1655817725/logos/community"
          alt=""
        />
      </div>
      <div className="clone-card-Description"  onClick={HandelClickData} >{document.question?.description}</div>

      <div className="clone-card-mention">
        <div className="mention1">#docker</div>
        <div className="mention1">#java</div>
      </div>

      <div className="clone-card-Time">Aug 16 . 3m Watch me</div>
      <div className="clone-card-img-container">
        <img

          
          src={document.question.imgItem}
          alt=""
        />
      </div>
      <div className="clone-card-Setting">

        <div className="clone-card-top-flop">
          <span class="material-symbols-outlined">arrow_upward</span>
          10.3k
          <span class="material-symbols-outlined">arrow_downward</span>
          
         </div>
      <div className="icon-det">   
         <span className="material-symbols-outlined boxChat1 ">chat</span>
         <span className="material-symbols-outlined boxChatO " style={{cursor:"pointer"}} onClick={()=>HandelSaveButtonReactJS()}>bookmark</span>
         </div>
      </div>
    </div>
  );
}
