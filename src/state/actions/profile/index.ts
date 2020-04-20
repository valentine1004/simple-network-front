import {API_URL} from "../../../../config";
import axios from 'axios';
import {LoginValues} from "../../../components/auth/login/LoginForm";
import {
    GET_TOKEN_SUCCESS,
    GET_TOKEN_LOADING,
    GET_TOKEN_ERROR,
    GET_PROFILE_LOADING,
    GET_PROFILE_SUCCESS, GET_PROFILE_ERROR
} from '../../types/profile/types';

const token = localStorage.getItem("token");

export function fetchToken(data: LoginValues, browserHistory: any) {
    return function (dispatch: any) {
        dispatch({
            type: GET_TOKEN_LOADING,
            payload: true
        });
        return axios({
            method: 'post',
            url: `${API_URL}/login`,
            data
        })
            .then((response) => {
                const {token, user} = response.data;
                dispatch({
                    type: GET_TOKEN_SUCCESS,
                    payload: user
                });
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                browserHistory.push('/user');
            }, (error) => {
                dispatch({
                    type: GET_TOKEN_ERROR,
                    payload: error
                });
            });
    };
}

export function fetchUser(userId: string) {
    return function (dispatch: any) {
        dispatch({
            type: GET_PROFILE_LOADING,
            payload: true
        });
        const token = localStorage.getItem("token");
        return axios({
            method: 'get',
            url: `${API_URL}/user/${userId}`,
            headers: {"X-Access-Token": token}
        })
            .then((response) => {
                dispatch({
                    type: GET_PROFILE_SUCCESS,
                    payload: response.data
                });
            }, (error) => {
                dispatch({
                    type: GET_PROFILE_ERROR,
                    payload: error
                });
            });
    }
}