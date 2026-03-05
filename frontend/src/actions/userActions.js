import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
} from '../constants/userConstants.js';

import axios from 'axios';

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        
        const config = { // Always include headers for POST requests from your backend
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/users/create/',
            {username, password},
            config
        );

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem('userInfo', JSON.stringify(data)); // Store user info in localStorage, easiest but not the most secure. An example of browser storage.
    }
    catch (error) {
        dispatch({ 
            type: USER_LOGIN_FAILURE, 
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        });
    }
};
