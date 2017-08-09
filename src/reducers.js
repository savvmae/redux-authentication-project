import { combineReducers } from 'redux';
import { SET_TOKEN, SET_USER, GET_RESPONSE, SENDING_DATA, LOGOUT } from './actions';

import { connect } from 'react-redux'
import update from 'immutability-helper';


const initialState = {
    token: null,
    user: null,
    message: '',
    loading: false,
    loggedIn: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SENDING_DATA:
            return update(state, {
                loading: {
                    $set: true
                }
            })
        case GET_RESPONSE:
            return update(state, {
                loading: {
                    $set: false
                }
            })
        case SET_TOKEN:
            return update(state, {
                token: {
                    $set: action.payload
                },
                loggedIn: {
                    $set: true
                }
            })
        case SET_USER:
            return update(state, {
                user: {
                    $set: action.payload
                }
            })
        case LOGOUT: 
            return update(state, {
                user: {
                    $set: null
                },
                token: {
                    $set: null
                },
                loggedIn: {
                    $set: false
                }
            })
        default:
            return state;
    }
}

