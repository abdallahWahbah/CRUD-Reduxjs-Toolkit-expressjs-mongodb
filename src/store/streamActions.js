import { streamingActions } from "./streamingSlice";
import streams from "../apis/streams";
import history from "../history";

export const fetchStreams = () =>
{
    return async dispatch =>
    {
        const response = await streams.get("/streams");
        dispatch(streamingActions.fetchStreams(response.data))
    }
}

export const fetchStream = (id) =>
{
    return async dispatch =>
    {
        const response = await streams.get(`/streams/${id}`);
        dispatch(streamingActions.fetchStream(response.data))
    }
}

export const editStream = (id, values) =>
{
    return async dispatch =>
    {
        const response = await streams.patch(`/streams/${id}`, values);

        dispatch(streamingActions.editStream(response.data))

        history.push("/")
    }
}

export const deleteStream = (id) =>
{
    return async dispatch =>
    {
        await streams.delete(`streams/${id}`);

        dispatch(streamingActions.deleteStream(id))

        history.push("/")
    }
}

export const createStream = (values) =>
{   
    return async (dispatch, getState) =>
    {
        // const state = getState()
        // console.log(state.streams)
        
        const response = await streams.post("/streams", values);
        dispatch(streamingActions.createStream(response.data))

        history.push("/"); 
    }
}
