import React from 'react';

export const login = (user) => {
    const validToken = "asdasdasdasd";
    const status = {
        isAuth: false,
        token: null
    }
    if(user.email !== "wrong") {
        status.token = validToken;
        status.isAuth = true;
    }

    let promise = new Promise(function(resolve, reject) {
        // the function is executed automatically when the promise is constructed
        // after 1 second signal that the job is done with the result "done"
        setTimeout(() => resolve(status), 2000);
        // re
    });
      return promise;
}