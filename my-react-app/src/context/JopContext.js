import { createContext, useReducer } from "react";

export const JopContext = createContext();

export const JopsReducer = (state, action) => {
  switch (action.type) {
    case "SET_JOPS":
      return {
        jops: action.payload,
      };
    case "CREATE_JOP":
      return {
        jops: [action.payload, ...state.jops],
      };
    case "DELETE_JOP":
      return {
        jops: state.jops.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const JopsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(JopsReducer, {
      jops: null,
    });
    console.log("JopContext state", state);
  
    return (
      <JopContext.Provider value={{ ...state, dispatch }}>
        {children}
      </JopContext.Provider>
    );
  };
  
  export default JopContext;