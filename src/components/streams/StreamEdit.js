import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { fetchStreams, editStream } from "../../store/streamActions";
import StreamForm from "./StreamForm";

const StreamEdit = () =>
{
    const [stream, setStream] = useState(null);

    const dispatch = useDispatch();
    const streams = useSelector(value => value.streams.streams);
    const {id} = useParams();


    useEffect(()=>
    {
        dispatch(fetchStreams())
    }, [])

    useEffect(()=> 
    {
        setStream(streams[id]); 
    }, [streams])

    const onSubmit = (values) =>
    {
        // console.log("edit", values)
        dispatch(editStream(id, values))
    }

    const checkStreamNullity = () =>
    {
        if(!stream)
        {
            return <p>Loading...</p>
        }
    }

    return (
        <React.Fragment>
            {checkStreamNullity()}
            <div>
                <h3>Edit a Stream</h3>
                
                {stream && (
                    <StreamForm 
                    onSubmit={onSubmit} 
                    initialValues={{title: stream?.title, description: stream?.description}}
                />
                )}
                
            </div>
        </React.Fragment>
    )
    
}

export default StreamEdit;