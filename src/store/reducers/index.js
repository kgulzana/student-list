import studentsReducer from "./studentsReducer";
import { combineReducers} from 'redux'
import authReducer from "./authReducer";

export default combineReducers ({
    math: studentsReducer,
    auth: authReducer,
})