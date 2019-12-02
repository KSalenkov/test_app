import { ENTER_LOGIN } from './types';

export const EnterLogin = (text) => {
    return {
        type: ENTER_LOGIN,
        payload: text
    }
}