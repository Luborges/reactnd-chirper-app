export const SET_AUTHOR_USER = 'SET_AUTHED_USER';

export function setAuthedUser (id) {
    return {
        type: SET_AUTHOR_USER,
        id,
    }
}