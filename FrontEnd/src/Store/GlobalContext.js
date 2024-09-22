import React, { useReducer, createContext, useContext, useEffect } from 'react';

// Retrieve data from localStorage or use the default initial state
const initialState = {
  user: null,
  TokenUser: JSON.parse(localStorage.getItem('TokenUser')) || [] ,
  AddQuestion :JSON.parse(localStorage.getItem('AddQuestion')) || null,
  togle :    JSON.parse(localStorage.getItem('togle'))    ||    "false",
  BasketMassages : JSON.parse(localStorage.getItem('BasketMessage')) || [],
  // userTage : JSON.parse(localStorage.getItem('userTage')) || '',
  UserProfile  : JSON.parse(localStorage.getItem("userProfile")) || []
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
  
    case "SET__PROFILE__USER":
      const SetData = [action.payload]
      localStorage.setItem("userProfile",JSON.stringify(SetData))
      return{
        ...state,
        UserProfile :SetData
      }



    case "MESSAGES":
      const updatedData = [action.payload];
      
      // Update localStorage with the new data
      localStorage.setItem('BasketMessage', JSON.stringify(updatedData));
      
      return {
        ...state,
        BasketMassages: updatedData
      };



    case "ADD__TOOGLE":
      localStorage.setItem("togle",JSON.stringify(action.toogle))
      return{
        ...state,
        togle : action.toogle
      }



    case "ADD__NEW__USER":
      // Save to localStorage when TokenUser is updated
      localStorage.setItem('TokenUser', JSON.stringify(action.payload));
      return {
        ...state,
        TokenUser: action.payload
      };
    case "ADD__QUESTION":
      localStorage.setItem('AddQuestion', JSON.stringify(action.payload2));

      return{
        ...state,
        AddQuestion : action.payload2
      }


      // case "ADD__TAG__USER":
      //   localStorage.setItem('userTage', JSON.stringify(action.paylod));
  
      //   return{
      //     ...state,
      //     userTage : action.paylod
      //   }
  

    default:
      return state;
  }
};

// Create context
const GlobalContext = createContext();

// Context provider component
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    //console.log(state);
  }, [state.TokenUser,state.AddQuestion]);

  return (
    <GlobalContext.Provider value={{ state, dispatch, user: state.user, TokenUser: state.TokenUser,AddQuestion:state.AddQuestion,togle:state.togle,BasketMassages:state.BasketMassages
      ,userTage:state.userTage,UserProfile:state.UserProfile
     }}>
      
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
