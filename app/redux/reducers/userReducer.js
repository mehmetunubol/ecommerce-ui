import { USER_REGISTER, USER_LOGIN, USER_LOGOUT } from '../actions/types';
const initialState = {
    email: "",
    password: "",
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
        default:
            return state
    }
}