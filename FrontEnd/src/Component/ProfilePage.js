import React from 'react';
import './ProfilePage.css';
import { useGlobalContext } from '../Store/GlobalContext';
const ProfilePage = () => {
 
  const {UserProfile} = useGlobalContext()
   console.log(UserProfile.imgUser,"<==")
  const user = {
    username: UserProfile[0].username,
    country: 'USA',
    bio: 'Software developer passionate about open-source projects and always learning new technologies!',
    score: 500,
    reputation: 1234,
    avatar: `${process.env.REACT_APP_API_KEY}/${UserProfile[0].imgUser}`,
    backGround : `myaccountGihutb.png`
  };

  return (
    <div className="profile-container">
        
        <div className='HandelImg'>
        <img src={user.backGround} alt=''/>
        </div>
      <div className="profile-header">
        <img className="profile-avatar" src={user.avatar}  alt="" />
        <div className="profile-info">
          <h1 className="profile-username" style={{display:"flex",alignItems:"center",gap:"10px"}}>{user.username} <span ><img src='quality.png' alt="" style={{width:"22px"}}/></span></h1>
          <p className="profile-country">Location: {user.country}</p>
          <p className="profile-bio">{user.bio}</p>


           <div className='rightSidey'> 
          <div className="profile-stats">
            <div className="profile-stat">
              <span className="stat-label">Score:</span> {user.score}
            </div>
            <div className="profile-stat">
              <span className="stat-label">Reputation:</span> {user.reputation}
            </div>
            <div className="profile-stat">
              <span className="stat-label">Following:</span> 11 M
            </div>
            
            <div className="profile-stat">
              <span className="stat-label">Flower:</span> 42k
            </div>
            </div>
            <br/>
            <div className='profileBadgce'>

            <div className="profile-stat1">
              <span className="stat-label">
                <img src='star-medal.png' alt='' />
                </span> 
            </div>
     
            <div className="profile-stat1">
              <span className="stat-label1">
                <img src='gold-medal (1).png' alt='' />
                </span> 
            </div>

            <div className="profile-stat1">
              <span className="stat-label1">
                <img src='gold-medal.png' alt='' />
                </span> 
            </div>
         
            <div className="profile-stat1">
              <span className="stat-label1">
                <img src='silver-medal copy.png' alt='' />
                </span> 
            </div>

            <div className="profile-stat1">
              <span className="stat-label1">
                <img src='medal.png' alt='' />
                </span> 
            </div>
             

            <div className="profile-stat1">
              <span className="stat-label1">
                <img src='medal (1).png' alt='' />
                </span> 
            </div>

            <div className="profile-stat1">
              <span className="stat-label1">
                <img src='silver-medal (1).png' alt='' />
                </span> 
            </div>


            </div>


          </div>
        </div>
      </div>
      <div className="profile-content">
        <h2>Recent Activity</h2>
        {/* Add recent activity or other content here */}
        <p>No recent activity to display.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
