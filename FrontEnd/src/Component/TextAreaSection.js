// src/Component/TextAreaSection.js
import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './TextAreaSection.css'; // Import the CSS file
import axios  from './axios';
import { useGlobalContext } from '../Store/GlobalContext';
const TextAreaSection = () => {
  const [latexCode, setLatexCode] = useState('E = mc^2');
  const [answer, setAnswer] = useState('');
  const {TokenUser,AddQuestion} = useGlobalContext()
  
  const StarConverstion =async ()=>{
    try{
       
        
      const responsex  =   await axios.post("/ChatSession",{
        idSession : TokenUser._id,
        nameidSession :TokenUser.username , 
        PrivateSession : [
         {
            textQuestion :"..",
            id :  "..",
            name : "..",
            answerUser :"..",
            rept : "null",
         }
        
       ]
    
 
      })
      responsex?alert("we sent this data to database") : alert("no bro")
 
 
    }
    catch(eroor){
      console.log(`this eroor by ${eroor}`)
    }
  }



  const handleSubmit =async () => {
    // This is where you would handle the submission of the answer
    setAnswer(latexCode);
    console.log(latexCode)
    try{
 
      const response = await axios.put(`/Admins/66e79f301641b10bbfecd53c`,{
              commentsFromAdmin:[          
                { 
                  textQuestion  :  AddQuestion.question.text,
                  id  : TokenUser._id,
                  name  :   TokenUser.username,
                  answerUser : latexCode,
                  rept : 'normalUser'
                }
            ]
             })
             response && alert("this data allow")


       const reponse2 = await axios.put(`/ChatSession/${TokenUser._id}`,{

        PrivateSession: [
          {
            textQuestion: AddQuestion.question.text,
            id: TokenUser._id,
            name: TokenUser.username,
            answerUser: latexCode,
            rept: "noramlUser"
          },
          
        ]

        
       })
 



       reponse2 && alert("this add succuelfy")
       reponse2 && setLatexCode("")





             

    }
    catch(eroor){
      console.log(`This error by ${eroor}`)
    }
  };

  return (
    <div className="latex-renderer">
      <h1>LaTeX to HTML Converter</h1>
      <textarea
        rows="5"
        cols="50"
        placeholder="Type LaTeX code here..."
        value={latexCode}
        onChange={(e) => setLatexCode(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} style={{cursor:"pointer"}}>Submit Answer</button>
      <button onClick={StarConverstion}>Start converstion with admin</button>
      <p>Here should be img</p>
      
       <div>
        {latexCode && (
          <div>
            <BlockMath math={latexCode} />
          </div>
        )}
      </div> 

      {/* Answer Section */}
      {/* {answer && (
        <div className="answer-section">
          <h2>Submitted Answer</h2>
          <div className="answer-content">
            <BlockMath math={answer} />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default TextAreaSection;
