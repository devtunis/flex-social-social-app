import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const UIX = ({close}) => {
    const Nav = useNavigate()
    const Logout = ()=>{
        window.localStorage.clear()
        Nav("/")
      }

  return (
    <StyledWrapper style={{display:close?"block":"none"}}>
      <div className="uix-card">
        <ul className="uix-list">
          <li className="uix-element">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="25"
  height="25"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#7e8590"
  strokeWidth={2}
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-user"
>
  <circle cx="12" cy="7" r="4"></circle>
  <path d="M5.5 21a7.5 7.5 0 0 1 13 0"></path>
</svg>

            <p className="uix-label">My Profile</p>
          </li>
          <li className="uix-element">
            <svg
              className="lucide lucide-user-round-plus"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="#7e8590"
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 21a8 8 0 0 1 13.292-6" />
              <circle r="5" cy="8" cx="10" />
              <path d="M19 16v6" />
              <path d="M22 19h-6" />
            </svg>
            <p className="uix-label">Add Member</p>
          </li>
        </ul>
        <div className="uix-separator" />
        <ul className="uix-list">
          <li className="uix-element">
            <svg
              className="lucide lucide-settings"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="#7e8590"
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle r="3" cy="12" cx="12" />
            </svg>
            <p className="uix-label">Settings</p>
          </li>
        
        </ul>
        <div className="uix-separator" />
        <ul className="uix-list">
          <li className="uix-element">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="25"
  height="25"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#7e8590"
  strokeWidth={2}
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-log-out"
>
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
  <polyline points="16 17 21 12 16 7"></polyline>
  <line x1="21" y1="12" x2="9" y2="12"></line>
</svg>

            <p className="uix-label" style={{color:"red"}} onClick={()=>Logout()} >LOG OUT </p>
          </li>
        </ul>
      </div>


      
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .uix-card {
    width: 200px;
    background-color: rgba(36, 40, 50, 1);
    background-image: linear-gradient(
      139deg,
      rgba(36, 40, 50, 1) 0%,
      rgba(36, 40, 50, 1) 0%,
      rgba(37, 28, 40, 1) 100%
    );
    border-radius: 10px;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .uix-separator {
    border-top: 1.5px solid #42434a;
  }

  .uix-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0px 10px;
  }

  .uix-element {
    display: flex;
    align-items: center;
    color: #7e8590;
    gap: 10px;
    transition: all 0.3s ease-out;
    padding: 4px 7px;
    border-radius: 6px;
    cursor: pointer;
  }

  .uix-element svg {
    width: 19px;
    height: 19px;
    transition: all 0.3s ease-out;
  }

  .uix-label {
    font-weight: 600;
  }

  .uix-element:hover {
    background-color: #5353ff;
    color: #ffffff;
    transform: translate(1px, -1px);
  }
  
  .uix-delete:hover {
    background-color: #ff4242;
  }
`;

export default UIX;
