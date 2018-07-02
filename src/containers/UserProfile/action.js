import {LOGIN} from '../../constants/actionTypes';
export const login = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}