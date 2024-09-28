import React, { useRef, useState,useEffect } from 'react'
import "./BuskyHome.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider, Box, Avatar, CircularProgress } from '@chakra-ui/react'
import Posts from '../All__Card/Posts'
import InputSearch from '../All__Card/InputSearch'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useGlobalContext } from '../../Store/GlobalContext'
const BuskyHome = () => {
  const [open,setopen] = useState(false)
  const [loading,setLoading] = useState(false)
  const [textAra,setTextArea]= useState("")
  const textareaRef = useRef(null);
  const [k,setk] = useState(300)
  const [post,setPost] = useState(false)
  const {TokenUser} = useGlobalContext()

useEffect(() => {
    if (textAra.length > 300) {
        console.log("tou7tch akther men 300 7arf brp");
        window.location.reload()
    }
}, [textAra]);

const handleInput = () => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'; // Reset the height
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height based on content

        // Check if the height exceeds 300px
        if (textareaRef.current.scrollHeight > 300) {
            textareaRef.current.style.overflowY = 'auto'; // Enable vertical scrolling
            textareaRef.current.style.height = '300px'; // Limit the height to 300px
        } else {
            textareaRef.current.style.overflowY = 'hidden'; // No scrolling needed
        }
    }
};

useEffect(() => {
    handleInput(); // Set initial height based on content when the component mounts
}, []);





const commentRef = useRef(null);


useEffect(() => {
  const handleResize = () => {
    if (commentRef.current) {
      commentRef.current.style.height = '200'; // Reset height
      commentRef.current.style.height = `${commentRef.current.scrollHeight}px`; // Set to the scroll height
    }
  };

  handleResize(); // Call it once to set the initial height
  window.addEventListener('resize', handleResize); // Adjust height on window resize

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);




  return (
<> 

    <div className='busky--home'>
          

          <div className='busky--home--container'>

            <div className={`busky--navbar ${open?'openside':"closeside"}`}>   
            <div className={`busky--navar-seeting ${open?"openx":"closex"}`}>
           <div className='busky--navabar--img'><img src='https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:sussmqg7qh7ja7ma46f3x2aj/bafkreido5og6sxgkdr3cf2uzfuuujjgqaw3ghhwiugai43hltq4jvlee6m@jpeg' alt=''/></div>
         
           <div className='busky--container--section'>
            <img src='./imgHome/accueil.png' alt=''/>
            <span>Home</span>
           </div>
           

           <div className='busky--container--section'>
            <img src='./imgHome/chercher.png' alt=''/>
            <span>Search</span>
           </div>
           

           <div className='busky--container--section'>
            <img src='./imgHome/notification.png' alt=''/>
            <span>notification</span>
           </div>
           

           <div className='busky--container--section' style={{background:"red",display:"flex",alignItems:"center"}}>
           
            <Link to={"/bluskG/freind"}  style={{cursor:"alias",color:"none",}}  >  <img src='./imgHome/chat.png' alt=''/></Link>
            <Link to={"/bluskG/freind"} style={{cursor:"alias",color:"none"}} > <span>Chat</span></Link>
           </div>
           

           <div className='busky--container--section'>
            <img src='./imgHome/symbole-hashtag.png' alt=''/>
            <span>Freind</span>
            
           </div>


           <div className='busky--container--section'>
            <img src='./imgHome/liste-a-puces (1).png' alt=''/>
            <span>Lists</span>
           </div>




           <div className='busky--container--section'>
            <img src='./imgHome/profil-de-lutilisateur.png' alt=''/>
            <span>Profile</span>
           </div>

           <div className='busky--container--section'>
            <img src='./imgHome/parametres-cog.png' alt=''/>
            <span>Setting</span>
           </div>
           
           <div className='busky--container--section-new-post'>
           <div className='up' onClick={()=>setPost(true)}>
           <img src='./imgHome/editer.png' alt=''/>
           <span>New Post</span>

           </div>
           </div>
           


            </div>
            </div>
           
            <div className='busky--posts'>
              <div className='screenSize'>
              
  <div style={{width:"100",display:"flex",justifyContent:"center"}}> <h2 style={{color:"#fff",fontWeight:"bold",fontSize:"30px"}}>Nahdi</h2>  </div>
                <p style={{color:"white"}}></p>
                {/* <img src='./ecdf797744ad4201be49b5d4e5582755-free.png' style={{width:"40px"}} alt=''/> 🎉 */}
            {
             open ?   <img src='./imgHome/close.png'
              onClick={()=>setopen((prev)=>!prev)}
               className='menuSidebar' alt=''/>
             : (    <img src='./imgHome/menu.png'
              onClick={()=>setopen((prev)=>!prev)}
               className='menuSidebar' alt=''/>
            )
            }
            </div>
             <Tabs size='md'defaultIndex={0} >
                <TabList>
                    <Tab><h1 style={{color:"white",fontSize:"19px",fontWeight:"bold"}}>Discover</h1></Tab>
                    <Tab ><h1 style={{color:"white",fontSize:"19px",fontWeight:"bold"}}>Following</h1></Tab>
                    <Tab><h1  style={{color:"white",fontSize:"19px",fontWeight:"bold"}}>Reels</h1></Tab>
                </TabList>
                

                <TabPanels >
                    <TabPanel className='Discover' >
                    
                                                                     
 
{loading ?    <Box padding='6' boxShadow='lg' bg='#161E2'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='5' skeletonHeight='11' />
</Box>:
 
<>  
 <Posts/>
<Posts/>
<Posts/>
<Posts/>
 
</>

}


                    
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>


                    <TabPanel className='Discover'>
                    <p style={{color:"white"}}>section videos reels :)</p>
                    </TabPanel>

                </TabPanels>



                </Tabs>

            </div>


            <div className='busky--search--useres'>
           
           <div className='busky--search--clone'>
           <InputSearch/>
           <br/>
           <hr style={{width:'100%',color:"grey"}}/>
           <div className='busky--links'>
              <h2 className='discover' >Discover</h2>
              <h2 className='Following'>Following</h2>
              <h2 className='more'>More feeds</h2>
           </div>
           <hr style={{width:'100%'}}/>
           <div className='busky--links1'>
              <h2 className='discover' >Feedback</h2>
              <h2 className='Following'>Privacy</h2>
              <h2 className='more'>Terms</h2>
              <h2 className='more'>Help</h2>
              
           </div>
        
 
           </div>
            </div>
          
          </div>
       
       </div><div class="overlay" style={{display:post?'block':'none'}}></div>
        <div className='createPost' style={{display:post?'block':'none'}}>

          <div className='createPostCancel'>
             <h1 style={{color:"#0085FF",cursor:"pointer"}} onClick={()=>setPost(false)}>Cancel</h1>
             <div className='post' ><h1>Post</h1></div>
            
          </div>

          <div className='createuserPofile'>
           
          <div className='fig'>
            <Avatar size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' /></div>
       
          <textarea 
              
                ref={textareaRef} 
                placeholder='What’s up ?' 
                onInput={handleInput}
                onChange={(e)=>setTextArea(e.target.value)}
                value={textAra}
            />

          </div>
          <div className='thirdcontainer'>
          
        <div className='rightSideThridIcon'>
        <svg fill="none" viewBox="0 0 24 24" width="24" height="24"><path fill="hsl(211, 99%, 56%)" fill-rule="evenodd" clip-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm2 1v7.213l1.246-.932.044-.03a3 3 0 0 1 3.863.454c1.468 1.58 2.941 2.749 4.847 2.749 1.703 0 2.855-.555 4-1.618V5H5Zm14 10.357c-1.112.697-2.386 1.097-4 1.097-2.81 0-4.796-1.755-6.313-3.388a1 1 0 0 0-1.269-.164L5 14.712V19h14v-3.643ZM15 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"></path></svg>
          <svg fill="none" viewBox="0 0 24 24" width="24" height="24"><path fill="hsl(211, 99%, 56%)" fill-rule="evenodd" clip-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm2 1v2h2V5H5Zm4 0v6h6V5H9Zm8 0v2h2V5h-2Zm2 4h-2v2h2V9Zm0 4h-2v2.444h2V13Zm0 4.444h-2V19h2v-1.556ZM15 19v-6H9v6h6Zm-8 0v-2H5v2h2Zm-2-4h2v-2H5v2Zm0-4h2V9H5v2Z"></path></svg>
          <svg fill="none" viewBox="0 0 24 24" width="24" height="24"><path fill="hsl(211, 99%, 56%)" fill-rule="evenodd" clip-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm1 16V5h14v14H5Zm10.725-5.2c0 .566-.283.872-.802.872-.538 0-.848-.318-.848-.872v-3.635c0-.512.314-.826.82-.826h2.496c.35 0 .609.272.609.64 0 .369-.26.629-.609.629h-1.666v.973h1.47c.365 0 .608.248.608.613 0 .36-.247.613-.608.613h-1.47v.993Zm-3.367.872c.526 0 .813-.31.813-.872v-3.627c0-.558-.295-.873-.825-.873s-.825.31-.825.873V13.8c0 .558.302.872.837.872Zm-3.879.078C6.92 14.75 6 13.827 6 12.287v-.617c0-1.47.955-2.42 2.472-2.42.589 0 1.139.147 1.548.388.404.236.664.562.664.915 0 .373-.271.636-.656.636a.82.82 0 0 1-.41-.108 2.34 2.34 0 0 1-.271-.177c-.208-.148-.421-.3-.746-.3-.644 0-.95.38-.95 1.155v.52c0 .768.306 1.168.903 1.168.436 0 .735-.248.735-.61v-.061h-.146c-.412 0-.632-.194-.632-.551 0-.353.216-.535.632-.535h.806c.617 0 .884.256.884.834v.166c0 1.253-.92 2.06-2.354 2.06Z"></path></svg>
          
        </div>
        <div className='progress'> 
           <h1 style={{color:"#0085FF",fontWeight:"bold"}}>English</h1>
           <h1 style={{color:"white",fontWeight:"bold"}}>{k-Number(textAra?.length)}</h1>
           <CircularProgress value={textAra.length} size={'30px'} />
        </div>


          </div>

        </div>
{/* ///sectoon comment 🎉 */}
        <div className='SectionComment'>
           <div className='big'>
            <div className='routerComment'>
               <div className='routerCommentIcon'>

               <span class="material-symbols-outlined">arrow_back_ios</span>
               <span class="material-symbols-outlined">arrow_forward_ios</span>

               </div>
            </div>
            <div className='sectionCommentDescsiprion'>
              <h1>Why I Ditched WordPress for Astro.jsr</h1>
              <div className='pargraph'>
                 
                <p>
                TLDRAn AI company, Cicero, has developed an AI avatar trained on Avi Loeb’s public appearances, promising features like phone call, text message, and full visual replica. This technology aims to save time by handling repetitive tasks and preserving personal narratives. AI avatars could evolve dramatically in the next decade, Show more
                </p>
              </div>
            </div>

     <div className='tagAndMention'>
      <span  className='mentionWebTracking'>#web dev</span>
      <span className='mentionWebTracking' >#java script</span>
      <span className='mentionWebTracking'>#node js</span>
      <div className='timeCreated'><p>Jun 27•6m read timeFrom deno.com</p></div>
     </div>
      


 <div className='imgPost'>

  <div className='imgPostContainer'>
    <img src='https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/b8d4f161c390d0ca1d22808f4faaf705?_a=AQAEuiZ'/>
  </div>
 </div>



<div className='nmuberofcomment'>
  <h1>184 Upvotes</h1> <h1>20 comments</h1>
</div>

<div className='numberOfVoteButton'>
 
<div className='topFlop'>
  
 <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none"><path d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z" fill="currentcolor" fill-rule="evenodd"></path></svg>
<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none rotate-180"><path d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z" fill="currentcolor" fill-rule="evenodd"></path></svg>

</div>
<div className='commentFlopTop'>
<div className='samex'> 
<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none"><path d="M8.084 3.217a35.447 35.447 0 017.05-.078l.782.078.279.031c1.089.121 1.885.372 2.606.828a4.516 4.516 0 011.664 1.86c.336.69.5 1.423.53 2.361l.005.321v3.975a4.493 4.493 0 01-3.545 4.392l-.207.04-2.089.346-2.86 2.992-.147.135c-.986.789-2.399.623-3.205-.324-.532-.625-.616-1.34-.51-2.29l.029-.224.038-.254.033-.187-1.332-.189a5.011 5.011 0 01-1.677-.55l-.253-.146-.243-.16a4.777 4.777 0 01-1.491-1.721 4.935 4.935 0 01-.532-1.972l-.009-.3V8.618c0-1.096.162-1.915.535-2.683.375-.77.94-1.4 1.664-1.859.649-.41 1.359-.655 2.288-.788l.318-.04.28-.031zm7.666 1.491a33.948 33.948 0 00-6.752-.075l-.748.075-.28.031c-.915.102-1.481.297-1.97.606a3.016 3.016 0 00-1.116 1.247c-.228.468-.357.989-.38 1.76l-.004.266v3.563c0 .577.134 1.116.375 1.587.242.471.592.874 1.024 1.18.37.263.801.453 1.276.554l.242.043 1.98.283c.339.048.457.096.575.175.119.078.262.187.27.386l-.002.024-.013.08-.164.741-.064.333c-.111.63-.167 1.332.09 1.634.263.309.7.39 1.037.187l.089-.062 2.998-3.135.13-.101.092-.063.077-.04.08-.03.035-.01.087-.02L17 15.545a2.993 2.993 0 002.495-2.77l.005-.182V8.618c0-.921-.13-1.506-.384-2.026A3.016 3.016 0 0018 5.345c-.44-.278-.943-.464-1.706-.572l-.265-.034-.279-.03zm-.55 6.294l.093.005c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005c-.398-.044-.707-.36-.707-.745 0-.38.301-.694.691-.744l.109-.007h6.4zm0-3.5l.093.004c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005C8.309 8.953 8 8.637 8 8.252c0-.38.301-.694.691-.744l.109-.007h6.4z" fill="currentcolor" fill-rule="evenodd"></path></svg>
      
      
         <span>comment</span>
  </div>

</div>


<div className='bookMarks'>
<div className='samex'> 
<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none"><path d="M15.874 3H8.126a3.357 3.357 0 00-3.35 3.152l-.772 12.77c-.028.459.106.915.38 1.286l.101.125c.666.764 1.818.9 2.647.287L12 17.023l4.868 3.597a1.964 1.964 0 003.128-1.7l-.771-12.767A3.358 3.358 0 0015.874 3zm0 1.5c.981 0 1.794.764 1.854 1.744l.771 12.768a.464.464 0 01-.74.402l-5.207-3.848a.929.929 0 00-1.104 0L6.24 19.414a.464.464 0 01-.74-.402l.773-12.768c.06-.98.872-1.744 1.853-1.744h7.748z" fill="currentcolor" fill-rule="evenodd"></path></svg>
        
         <span>bookMarks</span>
  </div>
</div>

<div className='copyLink'>
<div className='samex'> 
<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none"><path d="M13.2 4.096a3.743 3.743 0 015.148-.137l.144.137 1.412 1.412a3.743 3.743 0 01.137 5.148l-.137.144-4.023 4.023a3.743 3.743 0 01-5.148.137l-.144-.137-.706-.706a.749.749 0 01.982-1.125l.076.067.706.705c.84.84 2.181.876 3.063.105l.113-.105 4.022-4.022c.84-.84.876-2.181.105-3.064l-.105-.112-1.411-1.411a2.246 2.246 0 00-3.063-.105l-.113.105L13.2 6.213a.749.749 0 01-1.126-.982l.067-.076L13.2 4.096zM8.119 9.177a3.743 3.743 0 015.148-.137l.144.137.706.706a.749.749 0 01-.982 1.125l-.076-.067-.706-.705a2.246 2.246 0 00-3.063-.105l-.113.105-4.022 4.022a2.246 2.246 0 00-.105 3.064l.105.112 1.411 1.411c.84.84 2.181.876 3.063.105l.113-.105 1.058-1.058a.749.749 0 011.126.982l-.067.076-1.059 1.059a3.743 3.743 0 01-5.148.137l-.144-.137-1.412-1.412a3.743 3.743 0 01-.137-5.148l.137-.144L8.12 9.177z" fill="currentcolor" fill-rule="evenodd"></path></svg>
         <span>copyLink</span>
  </div>
</div>

</div>

<div className='SectionCurrentPost'>

  <div className='containerAppF'>
    
  
    <div className='imgconainerPdf'>  <img src='https://lh3.googleusercontent.com/a/ACg8ocK5b0CAawOTwTcxW2lWeewQqJXLqNWfgESkWUVe0D0Plpv5rdw=s96-c' alt='' /></div>
    <div className='shareButtonS'>   <input type='text' placeholder='Share your thoughts'/></div>

     <div className='buttonPost'>
     <button >Post</button>
     </div>
   
 
    </div>

</div>




{/* reall Comment : ))))  */}

<div className='awsomeComment' ref={commentRef}> 

  <div className='autoPaddingWithHeightelmentInsideit'>

      
     <div className='GhaithNahdi'>
<div className='cardcomment'>
      <div className='userInfoCardComment'>
        <div className='img'><img src='https://avatars.githubusercontent.com/u/22261152?v=4' alt=''/></div>
        <div className='userInsideInfo'>
          <p>Ghaith Nahdi</p>
          <p className='gmail'>Ghaith@gmail.com 2 months ago</p>
         
        </div>
      </div>

      <div className='userContent'>hello this is best app 🎉</div>
      <div className='shareInThing'>
        <div className='shaireThingIcon0'>
          
        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none"><path d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z" fill="currentcolor" fill-rule="evenodd"></path></svg>
<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none rotate-180"><path d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z" fill="currentcolor" fill-rule="evenodd"></path></svg>
<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none"><path d="M8.084 3.217a35.447 35.447 0 017.05-.078l.782.078.279.031c1.089.121 1.885.372 2.606.828a4.516 4.516 0 011.664 1.86c.336.69.5 1.423.53 2.361l.005.321v3.975a4.493 4.493 0 01-3.545 4.392l-.207.04-2.089.346-2.86 2.992-.147.135c-.986.789-2.399.623-3.205-.324-.532-.625-.616-1.34-.51-2.29l.029-.224.038-.254.033-.187-1.332-.189a5.011 5.011 0 01-1.677-.55l-.253-.146-.243-.16a4.777 4.777 0 01-1.491-1.721 4.935 4.935 0 01-.532-1.972l-.009-.3V8.618c0-1.096.162-1.915.535-2.683.375-.77.94-1.4 1.664-1.859.649-.41 1.359-.655 2.288-.788l.318-.04.28-.031zm7.666 1.491a33.948 33.948 0 00-6.752-.075l-.748.075-.28.031c-.915.102-1.481.297-1.97.606a3.016 3.016 0 00-1.116 1.247c-.228.468-.357.989-.38 1.76l-.004.266v3.563c0 .577.134 1.116.375 1.587.242.471.592.874 1.024 1.18.37.263.801.453 1.276.554l.242.043 1.98.283c.339.048.457.096.575.175.119.078.262.187.27.386l-.002.024-.013.08-.164.741-.064.333c-.111.63-.167 1.332.09 1.634.263.309.7.39 1.037.187l.089-.062 2.998-3.135.13-.101.092-.063.077-.04.08-.03.035-.01.087-.02L17 15.545a2.993 2.993 0 002.495-2.77l.005-.182V8.618c0-.921-.13-1.506-.384-2.026A3.016 3.016 0 0018 5.345c-.44-.278-.943-.464-1.706-.572l-.265-.034-.279-.03zm-.55 6.294l.093.005c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005c-.398-.044-.707-.36-.707-.745 0-.38.301-.694.691-.744l.109-.007h6.4zm0-3.5l.093.004c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005C8.309 8.953 8 8.637 8 8.252c0-.38.301-.694.691-.744l.109-.007h6.4z" fill="currentcolor" fill-rule="evenodd"></path></svg>
<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none"><path d="M15.874 3H8.126a3.357 3.357 0 00-3.35 3.152l-.772 12.77c-.028.459.106.915.38 1.286l.101.125c.666.764 1.818.9 2.647.287L12 17.023l4.868 3.597a1.964 1.964 0 003.128-1.7l-.771-12.767A3.358 3.358 0 0015.874 3zm0 1.5c.981 0 1.794.764 1.854 1.744l.771 12.768a.464.464 0 01-.74.402l-5.207-3.848a.929.929 0 00-1.104 0L6.24 19.414a.464.464 0 01-.74-.402l.773-12.768c.06-.98.872-1.744 1.853-1.744h7.748z" fill="currentcolor" fill-rule="evenodd"></path></svg>
  

        </div>
        <div><p>2 UpVotes</p></div>
      </div>
     </div>

     </div>
 
 



  </div>
   




  
</div>














           </div>

           <div className='small'></div>
        </div>
    </>
    
  )
}

export default BuskyHome