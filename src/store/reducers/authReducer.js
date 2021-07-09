import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/types";

let initialState = {
    logined: true,
}

export default function  authReducer(state= initialState, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          logined: true,
        };
        break;
      case LOGIN_FAILURE:
        return {
          ...state,
          logined: false,
        };
        break;
      case LOGOUT:
        return {
          ...state,
          logined: false,
        };
        break;
      default:
        return state;
        break;
    }
    
}