import { USER_REGISTER, USER_LOGIN, USER_LOGOUT, USER_UPDATE } from '../actions/types';

const initialState = {
    name: "",
    email: "",
    password: "",
    address: "",
    token: null,
    authError: null
};

export default function(state = initialState, action) {
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                ...action.payload
            }
        case USER_LOGOUT:
            console.log("user logout reducer!");
            return {
                ...initialState
            }
        case USER_REGISTER:
            return {
                ...state,
                ...action.payload
            }
        case USER_UPDATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}