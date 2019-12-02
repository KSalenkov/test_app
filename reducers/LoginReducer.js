import { ENTER_LOGIN } from '../actions/types';

const INITIAL_STATE = {
    login: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ENTER_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        default: return state
    }
}