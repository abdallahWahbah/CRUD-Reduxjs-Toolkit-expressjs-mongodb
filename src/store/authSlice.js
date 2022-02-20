// import { SIGN_IN, SIGN_OUT } from "../actions/types"

// const INITIAL_STATE = 
// {
//     isSignedIn: null,
//     userId: null
// }

// const authReducer = (prevState = INITIAL_STATE, action) =>
// {
//     switch (action.type) {
//         case SIGN_IN:
//             return {...prevState, isSignedIn: true, userId: action.payload};
//         case SIGN_OUT:
//             return {...prevState, isSignedIn: false, userId: null};
//         default:
//             return prevState;
//     }
// }

// export default authReducer;

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = 
{
    isSignedIn: null,
    userId: null
}

const authSlice = createSlice({
    name:"auth",
    initialState: INITIAL_STATE,
    reducers:
    {
        signIn(state, action)
        {
            state.isSignedIn = true;
            state.userId = action.payload
        },
        signOut(state, action)
        {
            state.isSignedIn = false;
            state.userId = null;
        }
    }
});

export const authAction = authSlice.actions;
export default authSlice