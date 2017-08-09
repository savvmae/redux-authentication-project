import { registerService, loginService, dashboardService } from './services'

export const GET_RESPONSE = "GET_RESPONSE";
export const SET_TOKEN = "SET_TOKEN";
export const SET_USER = "SET_USER";
export const SENDING_DATA = "SENDING_DATA";
export const LOGOUT = "LOGOUT";


export function register(user) {
    return (dispatch, getState) => {
        dispatch({ type: 'SENDING_DATA' })
        return registerService(user).then(function (res) {
            dispatch(getResponseAction(res.data.success))
        })
    }
}

export function login(user) {
    return (dispatch, getState) => {
        return loginService(user).then(function (res) {
            dispatch(setToken(res.data.auth_token))
            dispatch(dashboard())
        })
    }
}

export function dashboard(token) {
    return (dispatch, getState) => {
        token = token || getState().token;
        if (!token) {
            return;
        }
        return dashboardService(token).then(function (res) {
            dispatch(setUser(res.data))
        })
    }
}

export function logout(payload) {
    return {type: LOGOUT, payload}
}

function getResponseAction (payload) {
  return { type: GET_RESPONSE, payload }
}
function setToken (payload) {
    return { type: SET_TOKEN, payload }
}

function setUser (payload) {
    return { type: SET_USER, payload }
}
