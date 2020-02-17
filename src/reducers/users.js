import { RECEIVE_USERS } from '../actions/users';

export default function users (state = {}, action) {
    const actions = {
        [RECEIVE_USERS]: () => {
            return {
                ...state,
                ...action.users
            }
        }
    }
    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}