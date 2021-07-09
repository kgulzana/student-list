import { SET_STUDENTS, FETCH_END, FETCH_START, FETCH_FAILURE, FETCH_SUCCESS, ADD_STUDENT } from "../actions/types";

const initialState = {
  students: [],
  loading: true,
  error: false
};

export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
      break;
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_END:
      return {
        ...state,
        loading: false,
      };
      break;
    case FETCH_FAILURE:
      return {
        ...state,
        error: true,
      };
      break;
    case FETCH_SUCCESS:
      return {
        ...state,
        error: false,
      };
      break;
    case ADD_STUDENT:
      return {
        ...state,
        students: [action.payload, ...state.students]
      };
      break;

    default:
      return state;
      break;
  }
}
