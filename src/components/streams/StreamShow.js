import React, { useEffect, useState } from "react";
import { fetchStreams } from "../../store/streamActions";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const StreamShow = () =>
{
    const [stream, setStream] = useState(null);

    const dispatch = useDispatch();
    const streams = useSelector(value => value.streams.streams);
    const {id} = useParams();

    useEffect(()=> 
    {
        // console.log(id) // (inifinte rendering)
        dispatch(fetchStreams());
        setStream(streams[id]);
    }, [dispatch, id, streams])

    const checkStreamNullity = () =>
    {
        if(!stream) return <div>Loading...</div>
    }
    
    return (
        <React.Fragment>
            {checkStreamNullity()}
            <div>
                <h1>{stream?.title}</h1>
                <h5>{stream?.description}</h5>
            </div>
        </React.Fragment>
    )
    
}

export default StreamShow;