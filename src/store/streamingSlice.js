import _ from 'lodash';
import { createSlice } from "@reduxjs/toolkit";

const streamingSlice = createSlice({
    name: "streaming",
    initialState: {streams: {}, stream: {}},
    reducers:
    {
        fetchStreams(state, action)
        {
            state.streams = _.mapKeys(action.payload, "_id")
        },
        fetchStream(state, action)
        {
            const fetchedStream = {[action.payload._id] : action.payload};
            // console.log(fetchedStream)
            state.stream = fetchedStream;
        },
        editStream(state, action)
        {
            state.stream = {[action.payload.id] : action.payload}
        },
        deleteStream(state, action)
        {
            _.omit(state.streams, action.payload)
        },
        createStream(state, action)
        {
            state.streams = {...state.streams, [action.payload.id] : action.payload}
            console.log(state.streams)
        }
    }
})

export const streamingActions = streamingSlice.actions;
export default streamingSlice;


// import _ from 'lodash';
// import { 
//     CREATE_STREAM,
//     FETCH_STREAMS,
//     FETCH_STREAM,
//     DELETE_STREAM,
//     EDIT_STREAM
// } from "../actions/types";

// const streamReducer = (prevState={}, action) =>
// {
//     switch(action.type)
//     {
//         case FETCH_STREAMS:
//             console.log(prevState)
//             return {...prevState, ..._.mapKeys(action.payload, "_id")}
//         case FETCH_STREAM: 
//             console.log(action.payload)
//             return {...prevState, [action.payload.id]: action.payload};
//         case CREATE_STREAM:  
//             return {...prevState, [action.payload.id]: action.payload};
//         case EDIT_STREAM: 
//             return {...prevState, [action.payload.id]: action.payload};
//         case DELETE_STREAM:
//             return _.omit(prevState, action.payload);
//         default:
//             return prevState;
//     }
// }
// export default streamReducer;












// the state will be like this
// {
//     0: {id: 0, title: "asjld", description: "alksdjlkajsd"},
//     1: {id:1, title: ";aksjdl", ............}
// }


// key interpolation
// const animalSounds = {cat:"meow", dog: "bark"};
// const lion = "lion";
// const lionSoung = "roar";
// return {...animalSounds, [lion]: sound} // {cat:"meow", dog: "bark", lion: "roar"}

// for every element in the array, use a key taken from the "id" property of each one
// we will create a new object, the key of every attribute will be taken from each id in the array
// exaple
// const arr = [
//     {
//         id: "1",
//         title: "a",
//         des: "asd"
//     },
//     {
//         id: "2",
//         title: "a",
//         des: "asd"
//     },
//     {
//         id: "3",
//         title: "a",
//         des: "asd"
//     },
//     {
//         id: "4",
//         title: "a",
//         des: "asd"
//     },
// ]
// const newObject = _.mapKeys(arr, "id");
// // will return 
// {
//     1: {id: 1, title: "a", des: "asd"},
//     2: {id: 2, title: "a", des: "asd"},
//     3: {id: 3, title: "a", des: "asd"},
//     4: {id: 4, title: "a", des: "asd"},
// }