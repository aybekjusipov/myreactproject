import { createContext } from "react";

const initialState = {
  authenticated: false,
  userData: null,
};

function authContext(state = initialState, action) {
  switch (action.type) {
    case "login": {
      return {
        authenticated: true,
        userData: action.paylod,
      };
    }
    case "logout": {
      return {
        authenticated: false,
        userData: null,
      };
    }
    default:
      return state;
  }
}

const AuthContext = createContext();
export { AuthContext, authReducer, initialState };
