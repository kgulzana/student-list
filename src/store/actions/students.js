import {
  SET_STUDENTS,
  FETCH_START,
  FETCH_END,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  ADD_STUDENT,
} from "./types";

export function setStudents(payload) {
  return {
    type: SET_STUDENTS,
    payload,
  };
}

export function failureAction(payload) {
  return {
    type: FETCH_FAILURE,
    payload,
  };
}

export function successAction(payload) {
  return {
    type: FETCH_SUCCESS,
    payload,
  };
}

export function startFetchStudents() {
  return {
    type: FETCH_START,
  };
}

export function endFetchStudents() {
  return {
    type: FETCH_END,
  };
}

export const fetchStudents = (lesson) => (dispatch) => {
  dispatch(startFetchStudents());
  dispatch(setStudents([]));
  dispatch(successAction());

  fetch("http://localhost:1717/students/" + lesson)
    .then((r) => r.json())
    .then((data) => {
      if (typeof data === "string") {
        dispatch(failureAction(data));
      } else {
        dispatch(setStudents(data));
        dispatch(successAction(data));
      }

      dispatch(endFetchStudents());
    })
    .catch((e) => {
      console.error("Error", e);
    });
};

export function addNewStudentAction(data) {
  return {
    type: ADD_STUDENT,
    payload: data,
  }
}
