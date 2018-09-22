import { CREATE_POST } from '../actions';

const testPosts = [{ text: 'this is post 1', id: 1}, { text: 'this is another post', id: 2}]
let id = 5;

export default (state = testPosts, action) => {
    switch (action.type) {
        case (CREATE_POST):
            return [...state, { text: action.payload, id: id++ }]
        default: 
            return state
    }
}