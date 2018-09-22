export const CREATE_POST = 'create_post';

export const createPost = (input) => {
    return {
        type: CREATE_POST,
        payload: input
    }
}