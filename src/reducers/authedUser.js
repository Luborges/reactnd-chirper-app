import { SET_AUTHOR_USER } from '../actions/authedUser';

export default function users (state = null, action) {
    const actions = {
        [SET_AUTHOR_USER]: () => {
            return action.id;
        }
    }
    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}