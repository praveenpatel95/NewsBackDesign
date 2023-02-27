import * as types from "./constant";

export const register = (payload) => ({
    type:types.REGISTER,
    payload
})

export const registerSuccess = (payload) => ({
    type:types.REGISTER_SUCCESS,
    payload
})

export const registerFailure = (payload) => ({
    type:types.REGISTER_FAILURE,
    payload
})

export const login = (payload) => ({
    type:types.LOGIN,
    payload
});

export const loginSuccess = (payload) => ({
    type:types.LOGIN_SUCCESS,
    payload
});


export const loginFailure = (error) => ({
    type:types.LOGIN_FAILURE,
    error
});

export const logout = () => ({
    type:types.LOGOUT
});

export const logoutSuccess = () => ({
    type:types.LOGOUT_SUCCESS
});

