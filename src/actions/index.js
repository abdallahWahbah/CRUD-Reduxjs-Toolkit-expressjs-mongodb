import { 
    SIGN_OUT, 
    SIGN_IN, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from "./types";
import history from "../history";
import streams from "../apis/streams"

export const signIn = (userId) =>
{
    return{
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () =>
{
    return{
        type: SIGN_OUT
    }
}

export const createStream = values => async (dispatch, getState) => // getState allows us to reach redux store
{
    const {userId} = getState().auth;
    const response = await streams.post("/streams", {...values, userId});
    dispatch({type: CREATE_STREAM, payload: response.data});

    // Do programmatic navigation to the root route
    history.push("/"); // go to the main page after requesting the data
}

export const fetchStreams = () => async dispatch =>
{
    const response = await streams.get("/streams");
    dispatch({type: FETCH_STREAMS, payload: response.data});
}

export const fetchStream = (id) => async dispatch =>
{
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data});
}

export const editStream = (id, values) => async dispatch =>
{
    const response = await streams.patch(`/streams/${id}`, values);
    dispatch({type: EDIT_STREAM, payload: response.data});
    history.push("/");
}

export const deleteStream = (id) => async dispatch =>
{
    await streams.delete(`streams/${id}`);
    dispatch({type:DELETE_STREAM, payload: id});

    history.push("/");
}