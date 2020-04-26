import { USER_LOGIN, USER_REGISTER, USER_LOGOUT, USER_UPDATE} from './types';
import {login, register, update} from '../../fakebackend/Auth'; 

export const userLogin = (user) => dispatch => {
    console.log("userLoginAction + " + JSON.stringify(user));
    login(user).then( response => {
        if (response.isAuth) {
            user.token = response.token;
            user.authError = null;
            dispatch({
                type: USER_LOGIN,
                payload: user
            })
        } else {
            user.authError = "Authentication Error";
            user.token = null;
            dispatch({
                type: USER_LOGIN,
                payload: user
            })
        }
    }) ;

}

export const userLogout = () => dispatch => {
    console.log("userLogoutAction");
    dispatch({
        type: USER_LOGOUT,
    })
}

export const userRegister = (user) => dispatch => {
    console.log("userRegisterAction + " + JSON.stringify(user));
    register(user).then( response => {
        if (response.isAuth) {
            user.token = response.token;
            user.authError = null;
            dispatch({
                type: USER_REGISTER,
                payload: user
            })
        } else {
            user.authError = "Email is already used.";
            user.token = null;
            dispatch({
                type: USER_REGISTER,
                payload: user
            })
        }
    }) ;
}

export const userUpdate = (user) => dispatch => {
    console.log("userUpdateAction + " + JSON.stringify(user));
    update(user).then( response => {
        dispatch({
            type: USER_UPDATE,
            payload: user
        })
    }) ;
}
