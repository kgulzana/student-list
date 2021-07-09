import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './types'


export const logoutAction = () => (dispatch)=> {
    dispatch({
      type: LOGOUT,
    });
   localStorage.removeItem('x_token')
}

export const getMeAction = (token) =>(dispatch) => {
    let request={
        headers: {
            "X-AUTH": token
        }
    }

    fetch('http://localhost:1717/me', request )
    .then((r) => r.json())
    .then((data) => {
        if (typeof data === 'string') {
            dispatch({type: LOGIN_FAILURE });
        } else {
            dispatch({type: LOGIN_SUCCESS })
        }
        
        
    })
}