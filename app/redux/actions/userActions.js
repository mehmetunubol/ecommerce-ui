import { USER_LOGIN, USER_REGISTER, USER_LOGOUT} from './types';
import {login, register} from '../../fakebackend/Auth'; 
export const userLogin = (user) => dispatch => {
    console.log("userLoginAction + " + JSON.stringify(user));
    login(user).then( status => {
        if (status.isAuth) {
            user.token = status.token;
            user.authError = null;
            dispatch({
                type: USER_LOGIN,
                payload: user
            })
        } else {
            user.authError = "INVALID USER";
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
    register(user).then( status => {
        if (status.isAuth) {
            user.token = status.token;
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

