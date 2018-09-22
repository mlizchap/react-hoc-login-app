export const CREATE_POST = 'create_post';
export const CHANGE_AUTH = 'change_auth';

export const createPost = (input) => {
    return {
        type: CREATE_POST,
        payload: input
    }
}

export const isAuthenticated = (isLoggedIn) => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}