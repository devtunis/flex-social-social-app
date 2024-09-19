import React, { useState, useEffect } from 'react';
import './HeaderQuestion.css';
import CommentSection from './CommentSection';
import PutComment from './PutComment';
import SaveToggle from './SaveToggle';
import { useGlobalContext } from '../Store/GlobalContext';
import axios from './axios'; // Corrected import
import TextAreaSection from './TextAreaSection';
import { Link } from 'react-router-dom';
const HeadersQuestion = () => {
    const { AddQuestion, togle } = useGlobalContext();
    const [actualData, setA] = useState([]);

    const HandelGetTheDataFromDataBase = async () => {
        try {
            const response = await axios.get(`/callComments/${AddQuestion._id}`); // here logique when
            console.log(response.data);
            setA(response.data); // can you here after set the data to filter i need last comment post the one 
        } catch (error) {
            console.log(`This error occurred: ${error}`);
        }
    };

    useEffect(() => {
        HandelGetTheDataFromDataBase();
        console.log(togle, "frefire");
        console.log(actualData,"actualData")
    }, [togle]);

    return (
        <div className='HeadersQuestion'>
            <div className='HeadersQuestionInside'>
                <div className='left__Side'>
                    <div className='icon-left-side'>

     <div className='icon-self'>

        
        <Link to={"/Headers"} style={{textDecoration:"none",color:"black"}}> <img src='home.png' alt=""/>  </Link>         
           <Link to={"/Headers"} style={{textDecoration:"none",color:"black"}}> <span>Home</span>    </Link>
      </div>


             <div className='icon-self'>
                
           <Link to={"/Headers"} style={{textDecoration:"none",color:"black"}}> <img src='message.png' alt=""/>  </Link>         
           <Link to={"/Headers"} style={{textDecoration:"none",color:"black"}}> Questions  </Link>         

             </div>
         

             <div className='icon-self'>
             <img src='tag.png' alt=""/>
           <span>Tags</span>     
             </div>
         
             <div className='icon-self'>
             <img src='office-building.png' alt=""/>
           <span>Companies</span>     
             </div>
         
             <div className='icon-self'>
             <img src='group.png' alt=""/>
           <span>Users</span>     
             </div>
         
     
                        
                    </div>
                </div>


                <div className='rightSide'>
                    <div className='NavBarRightSide'>
                        <div className='Level1'>
                            <h2>{AddQuestion.question.description}</h2>
                        </div>
                        <div className='Level2'>
                            <button>Ask Question</button>
                        </div>
                    </div>
                    <div className='AskedToday'>
                        <span>Asked today</span>
                        <span>Modified today</span>
                        <span>Viewed 27 times</span>
                    </div>
                    <hr />
                    <div className='Container___Question'>
                        <div className='App__Vote__Question'>
                            <div className='Vote__Question'>
                                <div className='Main__Vote'>
                                  <br/>
                                    <span className="material-symbols-outlined box">arrow_upward</span>
                                    <div className='Counter'><span>1</span></div>
                                    <span className="material-symbols-outlined box">arrow_downward</span>
                                    <br />
                                    <SaveToggle />
                                </div>
                            </div>

                            <div className='right__Vote__Question'>

                                <div className='Space__Vote'>
                                    <h2>{AddQuestion.question.text}</h2>
                                    <div className='PdfSectionUser'>
                                        <img
                                              src={AddQuestion.question.imgItem}
                                              alt=''
                                        />
                                 </div>

                                    <div className='SectionCommentForPost'>
                                        <h1>Section Comment</h1>
                                        <div className='ecran'>
                                            {actualData.map((b, index) => (
                                                <CommentSection key={index} b={b}  />
                                            ))}
                                     </div>

                                        <br /><br />
                                        <div className='EcranComment'>
                                            <PutComment />
                                              
                                        </div>
                                        <br />
                                        <div > 
                                       <TextAreaSection />
                                       </div> 
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='Questionbottom'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadersQuestion;
