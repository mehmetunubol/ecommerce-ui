import React from 'react';

export const login = (user) => {
    const validToken = "asdasdasdasd";
    let response = {
        name: "",
        email: "",
        password: "",
        address: "",
        isAuth: false,
        token: null
    }
    if(user.email !== "wrong") {
        response = {
            ...user,
            token: validToken,
            isAuth: true
        }
    }

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(response), 2000);
    });
    return promise;
}
export const register = (user) => {
    const validToken = "asdasdasdasd";
    let response = {
        name: "",
        email: "",
        password: "",
        address: "",
        isAuth: false,
        token: null
    }
    if(user.email !== "wrong") {
        response = {
            ...user,
            token: validToken,
            isAuth: true
        }
    }

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(response), 2000);
    });
    return promise;
}

export const update = (user) => {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(user), 1000);
    });
    return promise;
}