import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  // user: {
  //   _id: "647474ff71203c16c0ee929f",
  //   username: "jane",
  //   email: "jane@gmail.com",
  //   profilePicture: "person/1.jpeg",
  //   coverPicture: "",
  //   followers: [],
  //   followings: ["6474716971203c16c0ee929d"],
  //   isAdmin: false,
  // },
  user: false,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
