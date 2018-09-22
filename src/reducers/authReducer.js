import { CHANGE_AUTH } from '../actions';

export default (state = false, action) => {
    switch (action.type) {
        case (CHANGE_AUTH):
            return !state
        default:
            return state
    }
}