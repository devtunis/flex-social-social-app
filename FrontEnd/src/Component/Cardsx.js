import "./Cardsx.css";
import { useGlobalContext } from "../Store/GlobalContext";
import { useNavigate } from "react-router-dom";
export default function Cardsx({describre,imgicon,imgpofile,tags,document}) {
   const {dispatch} = useGlobalContext()
   const Nav = useNavigate()
    const  HandelClickData = ()=>{
        dispatch({
          type:"ADD__QUESTION",
          payload2 : document
        })
       
         
       
         
    Nav("/HeadersTopQuestion")
     
      }


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
         <span class="material-symbols-outlined">chat</span>
         <span class="material-symbols-outlined">bookmark</span>
         </div>
      </div>
    </div>
  );
}
