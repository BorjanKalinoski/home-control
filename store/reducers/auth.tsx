import {AUTHENTICATE, LOGOUT} from "../../constants/actions";

const initialState = {
    user: null
};


export default (state = initialState, action) => {
    switch (action.type){
        case AUTHENTICATE:
        case LOGOUT:
        default:
            return state;
    }
};


//redux saga -> dispatch action,
